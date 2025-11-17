<template>
  <div class="bg-gray-100 p-8 rounded-lg my-8 shadow-lg">
    <h3 class="text-gray-600 text-sm mb-2 font-semibold">
      전역 상태 (Global State)
    </h3>
    <h2 class="text-5xl font-bold text-emerald-500 mb-6">
      {{ counterStore.count }}
    </h2>
    <div class="flex gap-4 justify-center flex-wrap mb-4">
      <button
        @click="counterStore.increment"
        class="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
      >
        +1 Increment
      </button>
      <button
        @click="counterStore.decrement"
        class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
      >
        -1 Decrement
      </button>
      <button
        @click="counterStore.reset"
        class="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
      >
        Reset
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "../../stores/counter";

const counterStore = useCounterStore();
</script>
