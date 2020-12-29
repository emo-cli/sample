import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import 'amfe-flexible/index'
import './ezm/index'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
