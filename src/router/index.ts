import { createRouter, createWebHistory } from 'vue-router'
import HomeComp from '../components/HomeComp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHistory('/opening/'), //deployment
  routes: [
    {
      path: '/opening',
      name: 'home',
      component: HomeComp
    },
  ]
})

router.beforeEach((to, from, next) => {
  if(to.path !== '/opening'){
    if(to.path == '/'){
      next('/opening')
    }else{
      next()
    }
  }else{
    next()
  }
})

export default router

