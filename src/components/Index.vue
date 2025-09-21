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
<template><form>
    <fieldset>
      <legend>登录</legend>
      <label for="username">用户名:</label>
      <input type="text" id="username" name="username" required>
      <br>
      <label for="password">密码:</label>
      <input type="password" id="password" name="password" required>
      <br><button type="button" @click="f1">登录</button>
      <router-link :to="{ name: 'Register' }">注册</router-link>
    </fieldset>
  </form>
  <h3>sb  mock</h3></template>