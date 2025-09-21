<script setup>

</script>

<template>
  <div id="app">
    
    <!-- 路由出口：动态显示匹配的组件 -->
    <router-view></router-view>
    <footer>
        <p>© 2024 软工集市 版权所有</p>
    </footer>
  </div>
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
