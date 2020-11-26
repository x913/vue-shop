export default {
    CART(state) {
        return state.cart;
    },
    PRODUCTS(state) {
        return state.products_data;
    },
    CART_TOTAL_ITEMS(state) {
        return state.cart.reduce((sum, v) => sum += v.quantity, 0);
    },
    CART_TOTAL_SUM(state) {
        return state.cart.reduce((sum, v) => sum += (v.quantity * v.price), 0);
    }
}