import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tac',
    name: 'TermsAndConditions',
    component: () => import('../views/TermsAndConditions.vue')
  },
  {
    path: '/signals',
    name: 'Signals',
    component: () => import('../views/Signals.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
