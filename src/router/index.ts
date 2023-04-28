/*
 * @Author: 田建辉
 * @Date: 2023-04-24 18:17:58
 * @LastEditors: 田建辉
 * @LastEditTime: 2023-04-25 16:39:30
 * @FilePath: /vue3-project/src/router/index.ts
 * @Description:
 * 
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
