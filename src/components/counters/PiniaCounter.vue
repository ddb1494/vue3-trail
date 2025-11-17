<template>
  <div class="counter-section">
    <h3>전역 상태 (Global State)</h3>
    <h2>Counter: {{ counterStore.count }}</h2>
    <div class="button-group">
      <button @click="counterStore.increment" class="btn btn-primary">
        +1 Increment
      </button>
      <button @click="counterStore.decrement" class="btn btn-warning">
        -1 Decrement
      </button>
      <button @click="counterStore.reset" class="btn btn-danger">
        Reset
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../../stores/counter'

const counterStore = useCounterStore()
</script>

<style scoped>
.counter-section {
  background-color: #f5f5f5;
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem 0;
}

.counter-section h3 {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.counter-section h2 {
  font-size: 2.5rem;
  color: #42b983;
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

.btn-primary {
  background-color: #42b983;
  color: white;
}

.btn-primary:hover {
  background-color: #369970;
  transform: scale(1.05);
}

.btn-warning {
  background-color: #f39c12;
  color: white;
}

.btn-warning:hover {
  background-color: #d68910;
  transform: scale(1.05);
}

.btn-danger {
  background-color: #e74c3c;
  color: white;
}

.btn-danger:hover {
  background-color: #c0392b;
  transform: scale(1.05);
}
</style>
