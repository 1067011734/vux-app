import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'home',
    component: resolve => {
      require(['../views/Home/Home'], resolve)
    },
    children: [
      {
        path: 'menu',
        name: 'homeMenu',
        component: resolve => {
          require(['../views/Home/views/Menu'], resolve)
        },
        children: [
          {
            path: 'content',
            name: 'homeContent',
            component: resolve => {
              require(['../views/Home/views/Content'], resolve)
            },
            children: [
              {
                path: 'menu',
                name: 'homeSubmit',
                component: resolve => {
                  require(['../views/Home/views/Submit'], resolve)
                }
              }
            ]
          }
        ]
      }
      // {
      //   path: 'Content',
      //   name: 'homeContent',
      //   component: HomeContent
      // },
      // {
    ]
  },
  {
    path: '/dashboard',
    component: resolve => {
      require(['../views/Dashboard/Dashboard'], resolve)
    }
  },
  {
    path: '/user',
    component: resolve => {
      require(['../views/User/User'], resolve)
    }
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => {
      require(['../views/Login/Login'], resolve)
    }
  }
]
const router = new Router({
  routes
})
export default router
