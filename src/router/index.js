import Vue from 'vue'
import Router from 'vue-router'
// import HomeContent from 'components/Home/components/Content'
// import HomeSubmit from 'components/Home/components/Submit'
// import HomeReject from 'components/Home/components/Reject'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/user'
  },
  {
    path: '/home',
    name: 'home',
    component: resolve => {
      require(['../components/Home/Home'], resolve)
    },
    children: [
      {
        path: 'menu',
        name: 'homeMenu',
        component: resolve => {
          require(['../components/Home/components/Menu'], resolve)
        },
        children: [
          {
            path: 'content',
            name: 'homeContent',
            component: resolve => {
              require(['../components/Home/components/Content'], resolve)
            }
          }
        ]
      }
      // {
      //   path: 'Content',
      //   name: 'homeContent',
      //   component: HomeContent
      // },
      // {
      //   path: 'Submit',
      //   name: 'homeSubmit',
      //   component: HomeSubmit
      // },
      // {
      //   path: 'reject',
      //   name: 'homeReject',
      //   component: HomeReject
      // },
      // {
      //   path: 'planExamination',
      //   component: PlanExamination
      // },
      // {
      //   path: 'projectExamination',
      //   component: ProjectExamination
      // }
    ]
  },
  {
    path: '/work',
    component: resolve => {
      require(['../components/Work/Work'], resolve)
    }
  },
  {
    path: '/user',
    component: resolve => {
      require(['../components/User/User'], resolve)
    }
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => {
      require(['../components/Login/Login'], resolve)
    }
  }
]
const router = new Router({
  routes
})
export default router
// export default routes
