import Vue from 'vue'
import VueResource from 'vue-resource'
import WebFont from 'webfontloader'

import router from './router'
import './analytics'

import app from './views/app.vue'

import 'purecss'
import 'purecss/build/grids-responsive-min.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false
Vue.use(VueResource)

WebFont.load({
  google: {
    families: ['Gentium Basic', 'Open Sans', 'Montserrat']
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(app)
}).$mount('#app')
