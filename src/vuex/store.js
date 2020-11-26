import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions/actions';
import getters from './getters/getters';
import mutations from './mutations/mutations';
import state from './state/state';


// make of use vuex
Vue.use(Vuex);

let store = new Vuex.Store({
    state, mutations, actions, getters,
});

export default store;

