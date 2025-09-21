
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
<form>
  <fieldset>
    <legend>register</legend>
    <label for="username">用户名:</label>
    <input type="'text" id ="username" required >
    <br>
    <label for="password">密码:</label>
    <input type="password" id="password" minlength="6" required>
    <br>
    <label for="password2">确认密码:</label>
    <input type="password" id="password2" minlength="6" required>
   <br>
   <label for="email">邮箱:</label>
   <input type="email" id="email" required>
   <br>
    <button type="submit" onclick="check()">注册</button>
    <br>
    <router-link :to="{ name: 'Index' }">返回登录</router-link>
  </fieldset>
</form></template>