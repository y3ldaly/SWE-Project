
// add to cart
export const addToCart = async (dish, quantity) => {
    const cart = getCart();
    const existingItem = cart.find(item => item.dishName === dish?.title);
    if (existingItem) {
        // existingItem.quantity += quantity;
    } else {
        cart.push({
            dishName: dish?.title,
            price: dish?.price,
            quantity
        });
    }
    saveCart(cart);
};


export const getCart = () => {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

export const saveCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

