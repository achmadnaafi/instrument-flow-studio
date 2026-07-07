<script setup lang="ts">
import { VueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { Controls } from '@vue-flow/controls'

import { useCanvasStore } from '@/stores/canvasStore'

import '@vue-flow/core/dist/style.css'
import '@vue-flow/core/dist/theme-default.css'

const canvasStore = useCanvasStore()
</script>

<template>
  <div class="canvas-container">
    <VueFlow :nodes="canvasStore.nodes">
      <Background />
      <Controls />
    </VueFlow>
  </div>
</template>

<style scoped>
.canvas-container {
  width: 100%;
  height: 100%;
}
</style>