
<script setup>
import { ref } from 'vue'
import { registerAPI } from '@/api/user.js'

// 定义 emits
const emit = defineEmits(['switch-to-login', 'register-success'])

// 响应式数据
const form = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const loading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

// 方法
const handleSubmit = async () => {
  if (form.value.password !== form.value.confirmPassword) {
    errorMessage.value = '密码不一致'
    return
  }

  loading.value = true
  errorMessage.value = ''
  
  try {
    const response = await registerAPI({
      username: form.value.username,
      email: form.value.email,
      password: form.value.password
    })
    
    if (response.data.code === 200) {
      successMessage.value = '注册成功！'
      setTimeout(() => {
        emit('register-success')
        switchToLogin()
      }, 1000)
    } else {
      errorMessage.value = response.data.message
    }
  } catch (error) {
    if (error.response) {
      errorMessage.value = error.response.data.message || '注册失败'
    } else if (error.request) {
      errorMessage.value = '网络错误，请检查连接'
    } else {
      errorMessage.value = '注册失败'
    }
  } finally {
    loading.value = false
  }
}

const switchToLogin = () => {
  form.value = { username: '', email: '', password: '', confirmPassword: '' }
  errorMessage.value = ''
  successMessage.value = ''
  emit('switch-to-login')
}
</script>


<template>
   <div id="register-page">
      <!-- 注册表单标题 -->
    <div class="register-title">
            <h2>账号注册</h2>
        </div>
 <!-- 注册表单 -->
<form id="register-form" @submit.prevent="handleSubmit">
   <!-- 账号/邮箱输入框组 -->
  <fieldset>
    <legend>register</legend>
<div class="form-group">
    <label for="usere">用户名:</label>
    <input type="text" id ="username" v-model="form.username" placeholder="请输入你的新用户名" required >
</div>
<div class="form-group1">
   <label for="useremail">邮箱:</label>
    <input type="'text" id ="useremail" v-model="form.email" placeholder="请输入你的邮箱" required >
    <br>
    <small>请使用有效的邮箱地址，便于后续找回密码</small>
 <!-- 辅助提示文字 -->
</div>
<div class="form-group2">
    <label for="register-password">设置密码:</label>
    <input type="password" 
    id="register-password"
    name="registerPassword" 
     v-model="form.password"
    placeholder="请设置密码(至少6位 )" 
    minlength="6" 
    required
    >
    <br>
    <label for="confirm-password">确认密码:</label>
    <input type="password" 
    id="confirm-password" 
      name="confirmPassword"
      v-model="form.confirmPassword"
       placeholder="请再次输入密码"  
      minlength="6" 
      required
      >
        <br>
       <small>两次输入的密码必须一致</small>
       <div v-if="errorMessage" style="color: red;">
        {{ errorMessage }}
      </div>
      
      <div v-if="successMessage" style="color: green;">
        {{ successMessage }}
      </div>
   <div class="form-button">
    <button type="submit" :disabled="loading">{{ loading ? '注册中...' : '注册' }}</button>
    </div>
    
<div  class="login-link">
    <p>已有账号？ <router-link :to="{ name: 'Index' }">返回登录</router-link></p>
</div>
</div>
  </fieldset>
</form>
  </div>
  </template>