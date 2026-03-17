import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Rent from '@/views/Rent.vue'
import MarketPlace from '@/views/MarketPlace.vue'
import Messages from '@/views/Messages.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/rent',
      component: Rent
    },
    {
      path: '/marketplace',
      component: MarketPlace
    },
    {
      path: '/messages',
      component: Messages
    }

  ],
})

export default router
