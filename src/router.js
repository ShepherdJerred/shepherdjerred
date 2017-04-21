import Vue from 'vue'
import Router from 'vue-router'

import store from './store'

import homePage from './views/home-page.vue'
import projectPage from './views/project-page.vue'
import notFoundPage from './views/notFound-page.vue'

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
      component: projectPage,
      props: (route) => ({
        title: store.getters.loadProject(route.params.project).title,
        summary: store.getters.loadProject(route.params.project).summary,
        description: store.getters.loadProject(route.params.project).description,
        tags: store.getters.loadProject(route.params.project).tags,
        color: store.getters.loadProject(route.params.project).color,
        icon: store.getters.loadProject(route.params.project).icon,
        links: store.getters.loadProject(route.params.project).links,
        process: store.getters.loadProject(route.params.project).process
      }),
      beforeEnter: (to, from, next) => {
        if (store.state.projects[to.params.project] === null) {
          next('/not-found')
        } else {
          next()
        }
      }
    },
    {
      name: 'Not Found',
      path: '/not-found',
      component: notFoundPage
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
