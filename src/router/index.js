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
  {
    path: '/employees/users',
    name: 'listUsers',
    component: () => import('../views/EmployeeViews/UsersListView.vue')
  },
  {
    path: '/employees/users/:id',
    name: 'retrieveUser',
    component: () => import('../views/EmployeeViews/UserRetrieveView.vue')
  },
  {
    path: '/employees/clients/',
    name: 'listClients',
    component: () => import('../views/EmployeeViews/ClientsListView.vue')
  },
  {
    path: '/employees/clients/:id',
    name: 'retrieveClient',
    component: () => import('../views/EmployeeViews/ClientsRetrieveView.vue')
  },
  {
    path: '/employees/centers',
    name: 'listCenter',
    component: () => import('../views/EmployeeViews/CentersListView.vue')
  },
  {
    path: '/employees/centers/:id',
    name: 'retrieveCenter',
    component: () => import('../views/EmployeeViews/CentersRetrieveView.vue')
  },
  {
    path: '/employees/enterprises',
    name: 'listEnterprises',
    component: () => import('../views/EmployeeViews/EnterpriseListView.vue')
  },
  {
    path: '/employees/enterprises/:id',
    name: 'retrieveEnterprises',
    component: () => import('../views/EmployeeViews/EnterpriseRetrieveView.vue')
  },
  {
    path: '/employees/contacts',
    name: 'listContacts',
    component: () => import('../views/EmployeeViews/ContactListView.vue')
  },
  {
    path: '/employees/contacts/:id',
    name: 'retrieveContacts',
    component: () => import('../views/EmployeeViews/ContactRetrieveView.vue')
  },
  {
    path: '/employees/users/create/',
    name: 'createUsers',
    component: () => import('../views/EmployeeViews/UserCreateUpdateView.vue')
  },
  {
    path: '/employees/users/update/:id',
    name: 'updateUsers',
    component: () => import('../views/EmployeeViews/UserCreateUpdateView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
