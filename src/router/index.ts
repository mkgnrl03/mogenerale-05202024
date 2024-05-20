import { createRouter, createWebHistory } from 'vue-router'
import KanBanView from '../views/KanBanView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: KanBanView
    }
  ]
})

export default router
