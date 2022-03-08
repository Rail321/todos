import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from '../pages/AboutPage.vue'

const routes = [
  {
    path: '/',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/todos',
    name: 'Todos',
    component: () => import('../modules/todos/pages/TodosPage'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
