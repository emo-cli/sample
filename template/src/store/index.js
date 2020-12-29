import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        deviceready: false
    },
    mutations: {
        onDeviceReady (state) {
            state.deviceready = true
        }
    }
})
