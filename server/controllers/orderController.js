const UserModel = require('../models/userModel');
const OrderModel = require('../models/orderModel');
const MenuModel = require('../models/menuModel');
const FeedbackModel = require('../models/feedbackModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const orderController = {

    placeOrder: async (req, res) => {
        try {
            const { dishes, order_type } = req.body;
            let total_price = 0;
            const finalDishes = [];

            // Calculate the total price by fetching the details of each dish
            for (const item of dishes) {
                const menu = await MenuModel.findOne({ dishName: item.dishName });
                if (!menu) {
                    return res.status(404).json({ message: `Dish not found: ${item.dishName}` });
                }
                finalDishes.push({ dishName: menu.dishName, quantity: item.quantity });
                total_price += menu.price * item.quantity;
            }

            // Check if the user is a VIP and apply discount
            const user = await UserModel.findById(req.user.userId);
            if (user.role === 'VIP') {
                total_price *= 0.9; // 10% discount for VIPs
            }

            if (user.balance < total_price) {
                const neededFunds = total_price - user.balance; // Calculate the shortage
                return res.status(400).json({
                    message: `Insufficient balance. You need to add $${neededFunds.toFixed(2)} more to place this order.`,
                    orderStatus: "frozen"
                });
            }

            // Retrieve all available chefs
            const chefs = await UserModel.find({ role: 'chef' });
            if (chefs.length === 0) {
                return res.status(500).json({ message: "No chefs available" });
            }

            // Select a random chef
            const randomChef = chefs[Math.floor(Math.random() * chefs.length)];

            // Generate a unique 4-digit orderId within the function itself
            let orderId, existingOrder;
            do {
                orderId = Math.floor(1000 + Math.random() * 9000);
                existingOrder = await OrderModel.findOne({ orderId });
            } while (existingOrder);

            let status = (order_type === 'dine-in' || order_type === 'pick-up') ? 'completed' : 'in_progress';

            // Create and save the new order
            const newOrder = new OrderModel({
                customer: req.user.userId,
                chefUsername: randomChef.username,
                dishes: finalDishes,
                total_price,
                status: status,
                order_type,
                orderId,
                created_at: new Date(),
                updated_at: new Date()
            });
            await newOrder.save();

            // Update user's financial and order stats
            user.balance -= total_price; // Subtract the total price from the user's balance
            user.moneySpent += total_price; // Add to money spent
            user.orderCount += 1; // Increment the order count
            await user.save();

            // Check for promotion to VIP status
            if (user.role === 'customer' && (user.moneySpent > 500 || user.orderCount >= 50)) {
                user.role = 'VIP'; // Promote user to VIP
                await user.save();
            }

            // Return a success message with the orderId included
            res.json({ message: "Order placed successfully", order: newOrder, orderId });
        } catch (error) {
            res.status(500).json({ message: "Error placing order", error: error.message });
        }
    },

    cancelOrder: async (req, res) => {
        try {
            const { orderId } = req.params;
            
            // Find the order by orderId
            const order = await OrderModel.findOne({ orderId: parseInt(orderId) });
            if (!order) {
                return res.status(404).json({ message: "Order not found." });
            }
    
            // Retrieve the user who placed the order
            const user = await UserModel.findById(order.customer);
            if (!user) {
                return res.status(404).json({ message: "User not found." });
            }

            // Update order status to "canceled"
            order.status = "canceled";
            order.updated_at = new Date();

            // Revert financials and order count due to cancellation
            user.balance += order.total_price; // Add back total price to user's balance
            user.moneySpent -= order.total_price; // Subtract from money spent
            user.orderCount -= 1; // Decrement the order count

            // Demote from VIP to customer if conditions are met
            if (user.role === 'VIP' && (user.moneySpent <= 500 || user.orderCount < 50)) {
                user.role = 'customer'; // Demote the user
            }

            // Save the updated order and user to the database
            await order.save();
            await user.save();
            
            // Respond with the order details and a success message
            res.json({ message: "Order has been canceled successfully", order, userStatus: user.role });
        } catch (error) {
            res.status(500).json({ message: "Error canceling order", error: error.message });
        }
    },

    getOrderDetails: async (req, res) => {
        try {
            const { orderId } = req.params;
            const userId = req.user.userId;
            const userRole = req.user.role;
            
            // Find the order by orderId
            const order = await OrderModel.findOne({ orderId: parseInt(orderId) });
            if (!order) {
                return res.status(404).json({ message: "Order not found." });
            }
    
            // If the user is a manager, return all details of the order
            if (userRole === "manager") {
                return res.json({ message: "Order details retrieved successfully", order });
            }
    
            // If the user is a customer, only return details if they placed the order
            if (userRole === "customer" && String(order.customer) === userId) {
                const { customer, updated_at, ...orderDetails } = order.toObject();
                return res.json({ message: "Order details retrieved successfully", order: orderDetails });
            }
    
            // If the user doesn't have permission to view the order details
            return res.status(403).json({ message: "You are not authorized to view this order." });
    
        } catch (error) {
            res.status(500).json({ message: "Error retrieving order details", error: error.message });
        }
    },

    makeDeposit: async (req, res) => {
        const { amount } = req.body;
        const userId = req.user.userId;

        if (!amount || amount <= 0) {
            return res.status(400).json({ message: "Invalid deposit amount" });
        }

        try {
            // Validate user exists
            const user = await UserModel.findById(userId);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            user.balance += amount;
            await user.save();

            // Send success response
            res.status(200).json({
                message: "Deposit successful",
                amount,
                balance: user.balance
            });
        } catch (error) {
            console.error("Error managing deposit:", error);
            res.status(500).json({ message: "Failed to manage deposit", error: error.message });
        }
    },

    listOrders: async (req, res) => {
        try {
            // Fetch orders that are in-progress and of type 'delivery'
            const orders = await OrderModel.find({
                status: 'in_progress',
                order_type: 'delivery'
            });

            // Check if any orders were found
            if (!orders.length) {
                return res.status(404).json({ message: "No orders available." });
            }

            // Respond with the list of orders
            res.json({ message: "Delivery orders retrieved successfully", orders });
        } catch (error) {
            // Handle any errors that occur during the operation
            res.status(500).json({ message: "Error retrieving orders", error: error.message });
        }
    },

    takeOrder: async (req, res) => {
        const { orderId } = req.params;  // Extract orderId from the request parameters
        const deliveryUsername = req.user.username; 

        try {
            // Find the order by orderId
            const order = await OrderModel.findOne({ orderId: parseInt(orderId) });
            if (!order) {
                return res.status(404).json({ message: "Order not found." });
            }

            // Check if the order is already taken
            if (order.deliveryUsername) {
                return res.status(400).json({ message: "Order is already taken by another delivery person." });
            }

            // Assign this delivery person to the order
            order.deliveryUsername = deliveryUsername;
            order.status = 'completed';

            // Save the updated order
            await order.save();

            // Respond with success message
            res.json({ message: "Order taken successfully", order });
        } catch (error) {
            // Handle any errors during the process
            res.status(500).json({ message: "Error taking order", error: error.message });
        }
    }
};

module.exports = orderController;

















// updateOrder: async (req, res) => {
    //     const { orderId } = req.params;
    //     const { dishes, order_type, status } = req.body;

    //     if (!dishes && !order_type && !status) {
    //         return res.status(400).json({ message: "At least one of 'dishes', 'order_type', or 'status' must be provided." });
    //     }

    //     try {
    //         // Retrieve the existing order
    //         const order = await OrderModel.findOne({ orderId: parseInt(orderId) });
    //         if (!order) {
    //             return res.status(404).json({ message: "Order not found." });
    //         }

    //         if (dishes) {
    //             let total_price = 0;
    //             const dishMap = {};

    //             // Create a map of the existing dishes for easy lookup
    //             order.dishes.forEach(dish => {
    //                 dishMap[dish.dishName] = dish;
    //             });

    //             // Iterate over incoming dishes to update, add, or remove
    //             for (const item of dishes) {
    //                 const menu = await MenuModel.findOne({ dishName: item.dishName });
    //                 if (!menu) {
    //                     return res.status(404).json({ message: `Dish not found: ${item.dishName}` });
    //                 }

    //                 if (item.quantity > 0) {
    //                     // Update or add new dish
    //                     dishMap[item.dishName] = { dishName: menu.dishName, quantity: item.quantity };
    //                 } else {
    //                     // Remove the dish if quantity is zero or less
    //                     delete dishMap[item.dishName];
    //                 }

    //                 total_price += menu.price * item.quantity;
    //             }

    //             // Set the updated dishes from the map
    //             order.dishes = Object.values(dishMap);
    //             order.total_price = total_price;
    //         }

    //         // Update order type if provided
    //         if (order_type) {
    //             order.order_type = order_type;
    //         }

    //         // Update status only if set to 'completed'
    //         if (status) {
    //             if (status === 'completed') {
    //                 order.status = status;
    //             } else {
    //                 return res.status(400).json({ message: "Status can only be updated to 'completed'." });
    //             }
    //         }

    //         // Update the updated_at field
    //         order.updated_at = new Date();

    //         // Save the updated order to the database
    //         const updatedOrder = await order.save();
    //         res.json({ message: "Order updated successfully", order: updatedOrder });

    //     } catch (error) {
    //         res.status(500).json({ message: "Error updating order", error: error.message });
    //     }
    // },