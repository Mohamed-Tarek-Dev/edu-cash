import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/home/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/terms',
      name: 'termsAndConditions',
      component: () => import('../pages/terms/TermsAndConditions.vue')
    },
    {
      path: '/privacy',
      name: 'privacyCenter',
      component: () => import('../pages/privacy/PrivacyCenter.vue')
    }
  ]
})

export default router
