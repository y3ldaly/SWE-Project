const UserModel = require('../models/userModel');
const OrderModel = require('../models/orderModel');
const MenuModel = require('../models/menuModel');
const FeedbackModel = require('../models/feedbackModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const orderController = {

    // placeOrder: async (req, res) => {
    //     try {
    //         const { dishes, order_type } = req.body;
    //         let total_price = 0;
    //         const finalDishes = [];

    //         // Calculate total price by fetching details of each dish
    //         for (const item of dishes) {
    //             const menu = await MenuModel.findOne({ dishName: item.dishName });

    //             // Handle case where the dish name is not found
    //             if (!menu) {
    //                 return res.status(404).json({ message: `Dish not found: ${item.dishName}` });
    //             }

    //             finalDishes.push({ dishName: menu.dishName, quantity: item.quantity });

    //             // Add price to total
    //             total_price += menu.price * item.quantity;
    //         }

    //         // Retrieve all available chefs
    //         const chefs = await UserModel.find({ role: 'chef' });

    //         if (chefs.length === 0) {
    //             return res.status(500).json({ message: "No chefs available" });
    //         }

    //         // Select a random chef
    //         const randomChef = chefs[Math.floor(Math.random() * chefs.length)];

    //         // Create a new order object
    //         const newOrder = new OrderModel({
    //             customer: req.user.userId,  // Assuming `req.user` is populated by middleware
    //             chefUsername: randomChef.username,
    //             dishes: finalDishes,
    //             total_price,
    //             status: 'in_progress',
    //             order_type,
    //             created_at: new Date(),
    //             updated_at: new Date()
    //         });

    //         // Save the new order to the database
    //         const savedOrder = await newOrder.save();

    //         res.json({ message: "Order placed successfully", order: savedOrder });

    //     } catch (error) {
    //         // Handle errors and respond appropriately
    //         res.status(500).json({ message: "Error placing order", error: error.message });
    //     }
    // },
    
    placeOrder: async (req, res) => {
        try {
            const { dishes, order_type } = req.body;
            let total_price = 0;
            const finalDishes = [];
    
            // Calculate the total price by fetching the details of each dish
            for (const item of dishes) {
                const menu = await MenuModel.findOne({ dishName: item.dishName });
    
                // Handle the case where the dish name is not found
                if (!menu) {
                    return res.status(404).json({ message: `Dish not found: ${item.dishName}` });
                }
    
                finalDishes.push({ dishName: menu.dishName, quantity: item.quantity });
                total_price += menu.price * item.quantity;
            }
    
            // Retrieve all available chefs
            const chefs = await UserModel.find({ role: 'chef' });
    
            if (chefs.length === 0) {
                return res.status(500).json({ message: "No chefs available" });
            }
    
            // Select a random chef
            const randomChef = chefs[Math.floor(Math.random() * chefs.length)];
    
            // Generate a unique 4-digit orderId within the function itself
            let orderId;
            let existingOrder;
            do {
                orderId = Math.floor(1000 + Math.random() * 9000); // Generate a 4-digit number
                existingOrder = await OrderModel.findOne({ orderId });
            } while (existingOrder); // Loop until a unique orderId is found
    
            // Create a new order object
            const newOrder = new OrderModel({
                customer: req.user.userId, // Assuming `req.user` is populated by middleware
                chefUsername: randomChef.username,
                dishes: finalDishes,
                total_price,
                status: 'in_progress',
                order_type,
                orderId, // Assign the generated orderId
                created_at: new Date(),
                updated_at: new Date()
            });
    
            // Save the new order to the database
            const savedOrder = await newOrder.save();
    
            // Return a success message with the orderId included
            res.json({ message: "Order placed successfully", order: savedOrder, orderId });
    
        } catch (error) {
            // Handle errors and respond appropriately
            res.status(500).json({ message: "Error placing order", error: error.message });
        }
    },

    updateOrder: async (req, res) => {
        const { orderId } = req.params;
        const { dishes, order_type, status } = req.body;

        if (!dishes && !order_type && !status) {
            return res.status(400).json({ message: "At least one of 'dishes', 'order_type', or 'status' must be provided." });
        }

        try {
            // Retrieve the existing order
            const order = await OrderModel.findOne({ orderId: parseInt(orderId) });
            if (!order) {
                return res.status(404).json({ message: "Order not found." });
            }

            if (dishes) {
                let total_price = 0;
                const dishMap = {};

                // Create a map of the existing dishes for easy lookup
                order.dishes.forEach(dish => {
                    dishMap[dish.dishName] = dish;
                });

                // Iterate over incoming dishes to update, add, or remove
                for (const item of dishes) {
                    const menu = await MenuModel.findOne({ dishName: item.dishName });
                    if (!menu) {
                        return res.status(404).json({ message: `Dish not found: ${item.dishName}` });
                    }

                    if (item.quantity > 0) {
                        // Update or add new dish
                        dishMap[item.dishName] = { dishName: menu.dishName, quantity: item.quantity };
                    } else {
                        // Remove the dish if quantity is zero or less
                        delete dishMap[item.dishName];
                    }

                    total_price += menu.price * item.quantity;
                }

                // Set the updated dishes from the map
                order.dishes = Object.values(dishMap);
                order.total_price = total_price;
            }

            // Update order type if provided
            if (order_type) {
                order.order_type = order_type;
            }

            // Update status only if set to 'completed'
            if (status) {
                if (status === 'completed') {
                    order.status = status;
                } else {
                    return res.status(400).json({ message: "Status can only be updated to 'completed'." });
                }
            }

            // Update the updated_at field
            order.updated_at = new Date();

            // Save the updated order to the database
            const updatedOrder = await order.save();
            res.json({ message: "Order updated successfully", order: updatedOrder });

        } catch (error) {
            res.status(500).json({ message: "Error updating order", error: error.message });
        }
    },

    cancelOrder: async (req, res) => {
        try {
            const { orderId } = req.params;
            
            // Find the order by orderId
            const order = await OrderModel.findOne({ orderId: parseInt(orderId) });
            if (! order) {
                return res.status(404).json({ message: "Order not found." });
            }
    
            // Update order status to "canceled"
            order.status = "canceled";
            order.updated_at = new Date();
    
            // Save the updated order to the database
            await order.save();
            
            res.json({ message: "Order has been canceled successfully", order });
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

    // List all orders for a customer or manager
    listUserOrders: (req, res) => {
        
    },

    // Refund a payment (if order is canceled or modified)
    issueOrderRefund: (req, res) => {
        
    },

    // Handle the freezing and unfreezing of orders
    manageOrderFreezing: (req, res) => {
        
    },
};

module.exports = orderController;















// // Handle payment for an order
    // processPayment: (req, res) => {
    //     // Validate payment information
    //     // Check order status and ensure it's ready for payment
    //     // Process the payment transaction
    //     // Update the order status to 'completed' upon successful payment
    //     // Send payment confirmation
    // },

    // // View all transactions for a customer
    // viewUserDeposits: (req, res) => {
    //     // Check user authentication and authorization
    //     // Fetch all transactions related to the user
    //     // Apply filters if necessary (date range, type of transaction)
    //     // Return the list of transactions
    // },

      // // Process a payment for an order
    // makeOrderPayment: (req, res) => {
    //     // Validate payment details
    //     // Check user authentication and authorization
    //     // Ensure order and payment details match
    //     // Check and update customer's balance if necessary
    //     // Update order status to 'completed' if payment is successful
    //     // Create a transaction record for the payment
    //     // Return success response with payment and order details
    // },