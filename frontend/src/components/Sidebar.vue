<script setup lang="ts">
import { useCanvasStore } from '@/stores/canvasStore'

const canvasStore = useCanvasStore()
</script>

<template>
  <aside class="sidebar">
    <h3>Controllers</h3>
    <ul>
      <li @click="canvasStore.addNode('ESP32')">ESP32</li>
      <li @click="canvasStore.addNode('Arduino Uno')">Arduino Uno</li>
    </ul>

    <h3>Sensors</h3>
    <ul>
      <li @click="canvasStore.addNode('MQ2')">MQ2</li>
      <li @click="canvasStore.addNode('DHT22')">DHT22</li>
      <li @click="canvasStore.addNode('BMP280')">BMP280</li>
    </ul>

    <h3>Actuators</h3>
    <ul>
      <li>Relay</li>
      <li>LED</li>
      <li>Buzzer</li>
    </ul>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 250px;
  background: #f1f5f9;
  padding: 15px;
  border-right: 1px solid #ddd;
}

h3 {
  margin-top: 15px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 8px;
  margin: 4px 0;
  background: white;
  border: 1px solid #ddd;
  cursor: pointer;
}
</style>