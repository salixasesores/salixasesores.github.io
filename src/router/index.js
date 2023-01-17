import { createRouter, createWebHashHistory, } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login/',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/logout/',
    name: 'logout',
    component: () => import('../views/LogoutView.vue')
  },
  {
    path: '/signin/',
    name: 'signin',
    component: () => import('../views/SigninView.vue')
  },
  {
    path: '/dashboard/',
    name: 'dashboard',
    component: () => import('../views/DashboardView.vue')
  },
  {
    path: '/login-employees/',
    name: 'login-employees',
    component: () => import('../views/LoginEmployees.vue')
  },
  {
    path: '/employees/',
    name: 'employees',
    component: () => import('../views/EmployeeView.vue')
  },
  {
    path: '/test/',
    name: 'test',
    component: () => import('../views/CompTestView.vue')
  },
  {
    path: '/test2/',
    name: 'test2',
    component: () => import('../views/TestingView.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
