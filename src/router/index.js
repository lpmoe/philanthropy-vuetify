import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Engagements from '@/components/Engagement/Engagements'
import CreateEngagement from '@/components/Engagement/CreateEngagement'
import Profile from '@/components/User/Profile'
import Signup from '@/components/User/Signup'
import Signin from '@/components/User/Signin'
import Engagement from '@/components/Engagement/Engagement'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Engagements',
      name: 'Engagements',
      component: Engagements
    },
    {
      path: '/Engagement/new',
      name: 'CreateEngagement',
      component: CreateEngagement,
      beforeEnter: AuthGuard
    },
    {
      path: '/Engagements/:id',
      name: 'Engagement',
      props: true,
      component: Engagement
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ],
  mode: 'history'
})
