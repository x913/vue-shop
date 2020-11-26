export default {
    SET_PRODUCTS_TO_STATE: (state, products) => {
        state.products_data = products;
    },
    SET_PRODUCT_TO_CART: (state, product) => {
        let existsItem = state.cart.find(x => x.id === product.id);
        if(!existsItem) {
            state.cart.push( {...product, quantity: 1 } );
        } else {
            existsItem.quantity += 1; 
        }
    },
    REMOVE_FROM_CART: (state, index) => {
    
        let existsItem = state.cart[index]
        if(existsItem.quantity === 1)
            state.cart.splice(index, 1);
        else {
            existsItem.quantity -= 1; 
        }                
    },
    INCREASE_CART_ITEMS: (state, index) => {
        let existsItem = state.cart[index];
        existsItem.quantity += 1;
    },
    DECREASE_CART_ITEMS: (state, index) => {
        let existsItem = state.cart[index];
        if(existsItem.quantity > 1)
            existsItem.quantity -= 1;
        else
            state.cart.splice(index, 1);
    }
}