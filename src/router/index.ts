import {createRouter, createWebHistory} from '@ionic/vue-router';
import {RouteRecordRaw} from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/main'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/main'
      },
      {
        path: 'main',
        component: () => import('@/views/Main.vue')
      },
      {
        path: 'settings',
        component: () => import('@/views/Settings.vue')
      },
      {
        path: 'history',
        component: () => import('@/views/History.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
