import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import 'amfe-flexible/index'
import './ezm/index'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
