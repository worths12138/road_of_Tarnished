<script setup>
import { ref } from 'vue'
import { loginAPI } from '@/api/user.js'
import router from '../router'

// 定义 emits
const emit = defineEmits(['switch-to-register', 'login-success'])

// 响应式数据
const form = ref({
  username: '',
  password: ''
})

const loading = ref(false)
const errorMessage = ref('')

// 方法
const handleSubmit = async () => {
  if (!form.value.username || !form.value.password) {
    errorMessage.value = '请填写完整信息'
    return
  }

  loading.value = true
  errorMessage.value = ''
  
  try {
    const response = await loginAPI(form.value)
    
    if (response.data.code === 200) {
      console.log('登录成功：')
      localStorage.setItem('token', response.data.data.token)
      emit('login-success', response.data.data.user)
      
    } else {
      errorMessage.value = response.data.message
    }
  } catch (error) {
    if (error.response) {
      errorMessage.value = error.response.data.message || '登录失败'
    } else if (error.request) {
      errorMessage.value = '网络错误，请检查连接'
    } else {
      errorMessage.value = '登录失败'
    }
  } finally {
    loading.value = false
  }
}
</script>
<template>
  <div id="login-page">
        <!-- 
            网站Logo区域
            显示"软工集市"文字标识
        -->

  <div class="logo-container">
            <h1>软工集市</h1>
        </div>

<form  id="login-form"  @submit.prevent="handleSubmit">
    <fieldset>
      <!-- 登录表单区域,使用<form>标签包裹，便于后续表单提交处理-->
      <legend>登录</legend>
      <label for="login-username">账号:</label>
      <!--type="text" 表示文本输入，id与label的for属性对应，placeholder显示提示文字，required表示该字段为必填项-->

      <input type="text" id="login-username" name="username" v-model="form.username" placeholder="请输入账号" required>
      <br>
      <!-- 密码输入框组 -->
      <label for="login-password">密码:</label>
      <input type="password" id="login-password" name="password" v-model="form.password" placeholder="请输入密码" required>
      <br>
       <div v-if="errorMessage" style="color: red;">
        {{ errorMessage }}
      </div>
      <div class="form-button"><button type="submit" :disabled="loading">
        {{ loading ? '登录中...' : '登录' }}
      </button>
      </div>
       <!-- 注册链接区域 -->
        <div class="register-link">
      <p>还没有账号？<router-link :to="{ name: 'Register' }">注册</router-link></P>
      </div>
    </fieldset>
  </form>
    </div>
    </template>