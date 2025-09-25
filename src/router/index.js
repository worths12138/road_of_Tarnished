import { createRouter, createWebHistory } from 'vue-router'
import Register from '../components/register.vue'
import Index from '../components/Index.vue'
import newW from '../components/newW.vue'
const routes = [
  {path:'/', redirect: '/components/index'},
  { path: '/components/register', name:'Register' , component: Register },
  { path: '/components/index', name:'Index' , component: Index, },
  { path: '/components/newW', name:'newW' , component: newW, },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


export default router
