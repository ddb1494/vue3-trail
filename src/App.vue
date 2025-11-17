<script setup lang="ts"></script>

<template>
  <nav class="navbar">
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/about" class="nav-link">About</router-link>
  </nav>
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>
.navbar {
  background-color: #333;
  padding: 1rem;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s;
}

.nav-link:hover,
.nav-link.router-link-active {
  background-color: #42b983;
}

main {
  padding: 2rem;
}
</style>
