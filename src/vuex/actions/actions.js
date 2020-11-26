import axios from 'axios';

export default {
    INCREASE_CART_ITEMS({commit}, index) {
        commit('INCREASE_CART_ITEMS', index);
    },
    DECREASE_CART_ITEMS({commit}, index) {
        commit('DECREASE_CART_ITEMS', index);
    },
    DELETE_FROM_CART({commit}, index) {
        commit('REMOVE_FROM_CART', index);
    },
    ADD_TO_CART({commit}, product) {
        commit('SET_PRODUCT_TO_CART', product);
    },
    GET_PRODUCTS({commit}) {
        return axios.get('http://localhost:9999/products')
            .then((products) => {
                commit('SET_PRODUCTS_TO_STATE', products.data);
                return products;
            }).catch(e => {
                console.log(e.message);
                return e;
            });
    }
}