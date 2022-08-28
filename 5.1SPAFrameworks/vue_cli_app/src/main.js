import '@babel/polyfill'
import './assets/stylesheets/custom.scss'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {ApiService} from './common/api.service'

//import the bootstrap library
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
Vue.use(BootstrapVue) 
Vue.use(IconsPlugin)

ApiService.init();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
