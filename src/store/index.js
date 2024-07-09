import Vuex from 'vuex';
// import Vue from 'vue';
import createPersistedState from "vuex-persistedstate";
import auth from './modules/auth';
import address from './modules/address';
import profile from './modules/profile';
import point from './modules/point';

// Load Vuex
// Vue.use(Vuex);
// Create store
export default new Vuex.Store({
    modules: {
        auth,
        address,
        profile,
        point
    },
    plugins: [createPersistedState()]
});
