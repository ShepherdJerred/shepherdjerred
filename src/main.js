import Vue from 'vue'
import VueResource from 'vue-resource'
import WebFont from 'webfontloader'

import { sync } from 'vuex-router-sync'
import router from './router'
import store from './store'
import './analytics'

import app from './views/app.vue'

import 'purecss'
import 'purecss/build/grids-responsive-min.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false
Vue.use(VueResource)

sync(store, router)

WebFont.load({
  google: {
    families: ['Fira Mono']
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app')
