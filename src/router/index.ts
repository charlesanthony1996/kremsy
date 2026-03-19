import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Rent from '@/views/Rent.vue'
import MarketPlace from '@/views/MarketPlace.vue'
import Messages from '@/views/Messages.vue'
import Settings from '@/views/Settings.vue'
import Profile from '@/views/Profile.vue'
import Analytics from '@/views/Analytics.vue'


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
    },
    {
      path: '/settings',
      component: Settings
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/analytics',
      component: Analytics
    }

  ],
})

export default router
