import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
 
import './style.css'
if (process.env.NODE_ENV === 'development') {
  const { worker } = await import('./mocks/browser')
  worker.start()
}
createApp(App).use(router).mount('#app')
