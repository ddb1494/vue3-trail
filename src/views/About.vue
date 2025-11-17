<template>
  <div class="about">
    <h1>About 페이지</h1>
    <p>이 페이지는 Vue Router를 사용하여 구현된 페이지입니다.</p>

    <div class="info-box">
      <p>Pinia 카운터는 Home 페이지에서 설정한 count가 여기서도 보입니다!</p>
    </div>

    <PiniaCounter />
    <LocalCounter />

    <router-link to="/" class="nav-link">홈 페이지로 돌아가기</router-link>
  </div>
</template>

<script setup lang="ts">
import PiniaCounter from '../components/counters/PiniaCounter.vue'
import LocalCounter from '../components/counters/LocalCounter.vue'
</script>

<style scoped>
.about {
  padding: 2rem;
  text-align: center;
}

.info-box {
  background-color: #fff3cd;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  border: 1px solid #ffeaa7;
}

.info-box p {
  margin: 0;
  color: #856404;
  font-size: 0.95rem;
  font-style: italic;
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
