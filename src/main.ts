/*
 * @Author: 田建辉
 * @Date: 2023-04-24 18:17:58
 * @LastEditors: 田建辉
 * @LastEditTime: 2023-04-24 18:34:23
 * @FilePath: /test-vite/vue3-project/src/main.ts
 * @Description: 
 * 
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Element3 from 'element3'
import 'element3/lib/theme-chalk/index.css'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Element3)

app.mount('#app')
