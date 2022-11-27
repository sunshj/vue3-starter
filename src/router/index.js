import { createRouter, createWebHistory } from 'vue-router'

const Layout = () => import('../layout/Index.vue')
const Welcome = () => import('../views/WelcomeView.vue')

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/welcome',
    children: [{ path: '/welcome', component: Welcome }]
  },
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
