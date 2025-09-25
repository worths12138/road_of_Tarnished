import axios from 'axios'
console.log('axios 导入成功：', axios) 
// 创建 axios 实例
const api = axios.create({
  baseURL: '/api', // 这个路径会被 MSW 拦截
  timeout: 5000,
})

// 登录接口
export const loginAPI = (userData) => {
  return api.post('/login', userData)
}

// 注册接口
export const registerAPI = (userData) => {
  return api.post('/register', userData)
}