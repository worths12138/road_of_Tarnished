
<script setup>function check() {
    var pwd1 = document.getElementById("password").value;
    var pwd2 = document.getElementById("password2").value;
    if(pwd1.length < 6) {
      alert("密码长度不能少于6位，请重新输入!!");
      return false; // 阻止表单提交
    }
    if (pwd1 !== pwd2 ) {
      alert("两次输入的密码不一致，请重新输入!!");
      return false; // 阻止表单提交
    }
    alert("注册成功");
    return true; }// 允许表单提交
</script>


<template>
   <div id="register-page">
      <!-- 注册表单标题 -->
    <div class="register-title">
            <h2>账号注册</h2>
        </div>
 <!-- 注册表单 -->
<form id="register-form">
   <!-- 账号/邮箱输入框组 -->
  <fieldset>
    <legend>register</legend>
<div class="form-group">
    <label for="usere">用户名:</label>
    <input type="'text" id ="username" placeholder="请输入你的新用户名" required >
</div>
<div class="form-group1">
   <label for="useremail">邮箱:</label>
    <input type="'text" id ="useremail" placeholder="请输入你的邮箱" required >
    <br>
    <small>请使用有效的邮箱地址，便于后续找回密码</small>
 <!-- 辅助提示文字 -->
</div>
<div class="form-group2">
    <label for="register-password">设置密码:</label>
    <input type="password" 
    id="register-password"
    name="registerPassword" 
    placeholder="请设置密码(至少6位 )" 
    minlength="6" 
    required
    >
    <br>
    <label for="confirm-password">确认密码:</label>
    <input type="password" 
    id="confirm-password" 
      name="confirmPassword"
       placeholder="请再次输入密码"  
      minlength="6" 
      required
      >
        <br>
       <small>两次输入的密码必须一致</small>
   <div class="form-button">
    <button type="submit" onclick="check()">注册</button>
    </div>
    
<div  class="login-link">
    <p>已有账号？ <router-link :to="{ name: 'Index' }">返回登录</router-link></p>
</div>
</div>
  </fieldset>
</form>
  </div>
  </template>