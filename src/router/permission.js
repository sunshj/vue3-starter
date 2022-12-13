import router from './index'

// 路由守卫
router.beforeEach((to, _from, next) => {
  if (to.path === '/login') return next()
  // 获取token
  const token = sessionStorage.getItem('token')
  // 手动判断token是否存在且有效
  if (!token) return next('/login')
  next()
})
