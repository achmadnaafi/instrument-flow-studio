<script setup lang="ts">
import { useCanvasStore } from '@/stores/canvasStore'
import { loadComponents } from '@/services/componentLoader'

const canvasStore = useCanvasStore()
const components = loadComponents()
console.log(components)

</script>

<template>
  <aside class="sidebar">

    <div
      v-for="category in components"
      :key="category.id"
      class="category"
    >

      <h3>{{ category.title }}</h3>

      <ul>

        <li
          v-for="component in category.components"
          :key="component.id"
          @click="canvasStore.addNode(component)"
        >

          {{ component.name }}

        </li>

      </ul>

    </div>

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
    padding:10px;
    margin:6px 0;
    background:white;
    border:1px solid #d1d5db;
    border-radius:8px;
    cursor:pointer;
    transition:.2s;
}

li:hover{
    background:#eff6ff;
    border-color:#3b82f6;
}
</style>