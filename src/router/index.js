import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/HomeView.vue')
const Welcome = () => import('../views/WelcomeView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
      redirect: '/welcome',
      children: [{ path: '/welcome', component: Welcome }]
    },
    {
      path: '/:any*',
      redirect: '/'
    }
  ]
})

export default router
