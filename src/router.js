import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: r =>
        require.ensure([], () => r(require('@/views/user/login.vue')), 'login')
    },
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '',
      name: 'home',
      redirect: 'usermanage',
      component: r =>
        require.ensure([], () => r(require('@/views/layer/home.vue')), 'home'),
      children: [
        {
          path: '/usermanage',
          name: 'usermanage',
          meta: ['用户管理', '用户管理'],
          component: r =>
            require.ensure(
              [],
              () => r(require('@/views/pages/usermanage/usermanage.vue')),
              'usermanage'
            )
        },
        {
          path: '/useradd',
          name: 'useradd',
          meta: ['用户管理', '添加用户'],
          component: r =>
            require.ensure(
              [],
              () => r(require('@/views/pages/usermanage/useradd.vue')),
              'usermanage'
            )
        }
      ]
    }
  ]
})
