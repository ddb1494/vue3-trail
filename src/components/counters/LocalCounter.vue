<template>
  <div class="local-counter-section">
    <h3>로컬 상태 (Local State - 이 페이지만)</h3>
    <h2>Local Count: {{ localCount }}</h2>
    <div class="button-group">
      <button @click="localCount++" class="btn btn-success">
        +1 Local Increment
      </button>
      <button @click="localCount--" class="btn btn-info">
        -1 Local Decrement
      </button>
      <button @click="localCount = 0" class="btn btn-secondary">
        Local Reset
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const localCount = ref(0)
</script>

<style scoped>
.local-counter-section {
  background-color: #e8f5e9;
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem 0;
  border: 2px dashed #42b983;
}

.local-counter-section h3 {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.local-counter-section h2 {
  font-size: 2.5rem;
  color: #2e7d32;
  margin-bottom: 1rem;
}

.button-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: bold;
}

.btn-success {
  background-color: #27ae60;
  color: white;
}

.btn-success:hover {
  background-color: #229954;
  transform: scale(1.05);
}

.btn-info {
  background-color: #3498db;
  color: white;
}

.btn-info:hover {
  background-color: #2980b9;
  transform: scale(1.05);
}

.btn-secondary {
  background-color: #95a5a6;
  color: white;
}

.btn-secondary:hover {
  background-color: #7f8c8d;
  transform: scale(1.05);
}
</style>
