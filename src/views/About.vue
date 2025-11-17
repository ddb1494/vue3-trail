<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <div class="max-w-4xl mx-auto p-8 text-center">
      <h1 class="text-5xl font-bold text-gray-800 mb-4">About 페이지</h1>
      <p class="text-xl text-gray-600 mb-6">
        이 페이지는 Vue Router를 사용하여 구현된 페이지입니다.
      </p>

      <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mb-8">
        <p class="text-yellow-700 italic">
          💡 Pinia 카운터는 Home 페이지에서 설정한 count가 여기서도 보입니다!
        </p>
      </div>

      <PiniaCounter />
      <LocalCounter />

      <router-link
        to="/"
        class="inline-block mt-8 px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
      >
        ← 홈 페이지로 돌아가기
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import PiniaCounter from "../components/counters/PiniaCounter.vue";
import LocalCounter from "../components/counters/LocalCounter.vue";
</script>
