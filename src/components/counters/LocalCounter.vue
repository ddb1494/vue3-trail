<template>
  <div
    class="bg-green-50 p-8 rounded-lg my-8 border-2 border-dashed border-emerald-500 shadow-lg"
  >
    <h3 class="text-gray-600 text-sm mb-2 font-semibold">
      로컬 상태 (Local State - 이 페이지만)
    </h3>
    <h2 class="text-5xl font-bold text-green-700 mb-6">{{ localCount }}</h2>
    <div class="flex gap-4 justify-center flex-wrap mb-4">
      <button
        @click="localCount++"
        class="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
      >
        +1 Local Increment
      </button>
      <button
        @click="localCount--"
        class="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
      >
        -1 Local Decrement
      </button>
      <button
        @click="localCount = 0"
        class="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
      >
        Local Reset
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const localCount = ref(0);
</script>
