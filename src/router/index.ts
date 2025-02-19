import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DashboardView,
    },
    {
      path: '/menu1',
      name: 'menu1',
      component: () => import('../views/Menu1View.vue'),
    },
    {
      path: '/menu2',
      name: 'menu2',
      component: () => import('../views/Menu2View.vue'),
    },
    {
      path: '/menu3',
      name: 'menu3',
      component: () => import('../views/Menu3View.vue'),
    },
    {
      path: '/menu4',
      name: 'menu4',
      component: () => import('../views/Menu4View.vue'),
    },
  ],
})

export default router
