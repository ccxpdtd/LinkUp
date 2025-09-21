import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
const app = createApp(App)

import router from './router'
app.use(router)

import pinia from './store/index'
app.use(pinia)

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)

app.mount('#app')
