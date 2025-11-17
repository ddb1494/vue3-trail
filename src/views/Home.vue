<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <div class="max-w-4xl mx-auto p-8 text-center">
      <h1 class="text-5xl font-bold text-gray-800 mb-4">홈 페이지</h1>
      <p class="text-xl text-gray-600 mb-8">
        Vue3 라우터 체험 프로젝트에 오신 것을 환영합니다!
      </p>

      <PiniaCounter />
      <LocalCounter />

      <router-link
        to="/about"
        class="inline-block mt-8 px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
      >
        About 페이지로 이동 →
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import PiniaCounter from "../components/counters/PiniaCounter.vue";
import LocalCounter from "../components/counters/LocalCounter.vue";
</script>
