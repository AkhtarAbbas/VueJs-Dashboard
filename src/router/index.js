import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '@/components/dashboard/dashboard'
import profile from '@/components/profile/profile'
import table from '@/components/table/table'
import icons from '@/components/icons/icons'
import maps from '@/components/maps/maps'
import blank from '@/components/blank/blank'
import error from '@/components/error/error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: profile,
    },
    {
      path: '/table',
      name: 'table',
      component: table,
    },
    {
      path: '/icons',
      name: 'themify icons',
      component: icons,
    },
    {
      path: '/maps',
      name: 'google map',
      component: maps,
    },
    {
      path: '/blank',
      name: 'blank page',
      component: blank,
    },
    {
      path: '/error404',
      name: 'error 404',
      component: error,
    }
  ]
})
