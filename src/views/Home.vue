<template>
  <div class="home">
    <h1>홈 페이지</h1>
    <p>Vue3 라우터 체험 프로젝트에 오신 것을 환영합니다!</p>

    <PiniaCounter />
    <LocalCounter />

    <router-link to="/about" class="nav-link">About 페이지로 이동</router-link>
  </div>
</template>

<script setup lang="ts">
import PiniaCounter from '../components/counters/PiniaCounter.vue'
import LocalCounter from '../components/counters/LocalCounter.vue'
</script>

<style scoped>
.home {
  padding: 2rem;
  text-align: center;
}

.nav-link {
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: 1px solid #42b983;
  border-radius: 4px;
  display: inline-block;
  transition: all 0.3s;
}

.nav-link:hover {
  background-color: #42b983;
  color: white;
}
</style>
