import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/home/HomePage.vue'

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
      component: () => import('../views/terms/TermsAndConditions.vue')
    },
    {
      path: '/privacy',
      name: 'privacyCenter',
      component: () => import('../views/privacy/PrivacyCenter.vue')
    }
  ]
})

export default router
