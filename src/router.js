import Vue from 'vue'
import Router from 'vue-router'

import homePage from './views/home-page.vue'
import projectPage from './views/project-page.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Home',
      path: '/',
      component: homePage
    },
    {
      name: 'Project',
      path: '/project/:project',
      component: projectPage
    }
  ]
})
