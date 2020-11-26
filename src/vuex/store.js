import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


// make of use vuex
Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products_data: [],
        cart: []
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products_data = products;
        },
        SET_PRODUCT_TO_CART: (state, product) => {
            let existsItem = state.cart.find(x => x.id === product.id);
            if(!existsItem) {
                state.cart.push(product);
            } else {
                existsItem.quantity += 1; 
            }
        },
        REMOVE_FROM_CART: (state, index) => {
            // state.cart.splice(index, 1);
            console.log('>>> index value ', index);
            let existsItem = state.cart[index]
            if(existsItem.quantity === 1)
                state.cart.splice(index, 1);
            else {
                existsItem.quantity -= 1; 
            }                
        }
    },
    actions: {
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
    },
    getters: {
        CART(state) {
            return state.cart;
        },
        PRODUCTS(state) {
            return state.products_data;
        }
    },
    
});

export default store;

