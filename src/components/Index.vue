<script setup>
import { reactive,ref } from 'vue';

const mp=ref(true)
const state = reactive({
  username: '12121!',
  password: '123456'
});
console.log(state);
function f1()
{
  if(mp.value)
{
  mp.value=!mp.value
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

<form  id="login-form">
    <fieldset>
      <!-- 登录表单区域,使用<form>标签包裹，便于后续表单提交处理-->
      <legend>登录</legend>
      <label for="login-username">账号:</label>
      <!--type="text" 表示文本输入，id与label的for属性对应，placeholder显示提示文字，required表示该字段为必填项-->

      <input type="text" id="login-username" name="username"  placeholder="请输入账号"required>
      <br>
      <!-- 密码输入框组 -->
      <label for="login-password">密码:</label>
      <input type="password" id="login-password" name="password"  placeholder="请输入密码" required>
      <br>
      <div class="form-button"><button type="button" @click="f1">登录</button>
      </div>
       <!-- 注册链接区域 -->
        <div class="register-link">
      <P>还没有账号？<router-link :to="{ name: 'Register' }">注册</router-link></P>
      </div>
    </fieldset>
  </form>
    </div>
    </template>