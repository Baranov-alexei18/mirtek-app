import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import ErrorView from '../views/ErrorView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
  {
    path: '/error',
    component: ErrorView

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
