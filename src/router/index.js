import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '@/components/dashboard/dashboard'
import profile from '@/components/profile/profile'
import table from '@/components/table/table'
import typography from '@/components/typography/typography'
import icons from '@/components/icons/icons'
import maps from '@/components/maps/maps'
import notifications from '@/components/notifications/notifications'

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
      path: '/typography',
      name: 'typography',
      component: typography,
    },
    {
      path: '/icons',
      name: 'icons',
      component: icons,
    },
    {
      path: '/maps',
      name: 'maps',
      component: maps,
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: notifications,
    }
  ],
  mode:'history'
})
