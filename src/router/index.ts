import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import ProfileView from '@/views/ProfileView.vue'
import MainLayout from '@/components/layout/MainLayout.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '/', component: HomeView },
      { path: '/login', component: LoginView },
      { path: '/profile', component: ProfileView }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: 'active'
})

export default router
