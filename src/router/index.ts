import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainIndex from '@/views/main/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path:'/' , component: MainIndex
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
