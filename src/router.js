import {createRouter, createWebHashHistory} from 'vue-router'
import Home from './views/Home.vue'

const createAppRouter = () => createRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('./views/Project.vue')
    }
  ],
  history: createWebHashHistory(),
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default createAppRouter
