import { createRouter, createWebHistory } from 'vue-router'
import Register from '../components/register.vue'
import Index from '../components/Index.vue'
const routes = [
  {path:'/', redirect: '/components/index'},
  { path: '/components/register', name:'Register' , component: Register },
  { path: '/components/index', name:'Index' , component: Index, },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
