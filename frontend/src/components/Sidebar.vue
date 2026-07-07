<script setup lang="ts">
import { useCanvasStore } from '@/stores/canvasStore'
import { loadComponents } from '@/services/componentLoader'

const canvasStore = useCanvasStore()
const components = loadComponents()
console.log(components)

</script>

<template>
  <aside class="sidebar">

    <h3>Controllers</h3>
    <ul>
      <li
        v-for="controller in components.controllers"
        :key="controller.id"
        @click="canvasStore.addNode(controller)"
      >
        {{ controller.name }}
      </li>
    </ul>

    <h3>Sensors</h3>
    <ul>
      <li
        v-for="sensor in components.sensors"
        :key="sensor.id"
        @click="canvasStore.addNode(sensor)"
      >
        {{ sensor.name }}
      </li>
    </ul>

    <h3>Actuators</h3>
    <ul>
      <li
        v-for="actuator in components.actuators"
        :key="actuator.id"
        @click="canvasStore.addNode(actuator)"
      >
        {{ actuator.name }}
      </li>
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