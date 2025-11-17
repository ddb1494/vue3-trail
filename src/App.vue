<script setup lang="ts"></script>

<template>
  <nav class="sticky top-0 z-50 bg-gray-800 shadow-lg">
    <div class="max-w-6xl mx-auto px-8 py-4 flex gap-6">
      <router-link
        to="/"
        class="text-white font-semibold px-4 py-2 rounded-lg hover:bg-emerald-500 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        🏠 Home
      </router-link>
      <router-link
        to="/about"
        class="text-white font-semibold px-4 py-2 rounded-lg hover:bg-emerald-500 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        ℹ️ About
      </router-link>
    </div>
  </nav>
  <main>
    <router-view></router-view>
  </main>
</template>
