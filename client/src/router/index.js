import Vue from 'vue'
import Router from 'vue-router'
import DashboardPage from '@/components/DashboardPage'
import HomePage from '@/components/HomePage'
import UserProfile from '@/components/UserProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DashboardPage',
      component: DashboardPage,
      children: [
        {
          path: '',
          name: 'HomePage',
          component: HomePage
        },
        {
          path: '/userprofile',
          name: 'UserProfile',
          component: UserProfile
        }
      ]
    }
  ]
})
