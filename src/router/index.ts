import { createRouter, createWebHistory } from 'vue-router'
import HomeComp from '../components/HomeComp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComp
    },
  ]
})

export default router
