import { createRouter, createWebHistory } from 'vue-router'

const Layout = () => import('../layout/Index.vue')
const Welcome = () => import('../views/WelcomeView.vue')
const Login = () => import('../views/Login.vue')
const Chart = () => import('../views/ChartView.vue')

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Layout,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome },
      { path: '/charts', component: Chart }
    ]
  },
  { path: '/login', component: Login },
  {
    path: '/:any*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
