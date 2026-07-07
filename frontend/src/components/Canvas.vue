<script setup lang="ts">
import { VueFlow, type NodeMouseEvent } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { Controls } from '@vue-flow/controls'
import { shallowRef } from 'vue'
import '@vue-flow/core/dist/style.css'
import '@vue-flow/core/dist/theme-default.css'

import { useCanvasStore } from '@/stores/canvasStore'
import ComponentNode from './nodes/ComponentNode.vue'
import { useEditorShortcuts } from '@/composables/useEditorShortcuts'

useEditorShortcuts()

const canvasStore = useCanvasStore()

console.log(canvasStore.nodes)

const nodeTypes = shallowRef({
  component: ComponentNode
})

function onNodeClick(event: NodeMouseEvent) {
  canvasStore.selectNode(event.node.id)
}
</script>

<template>
  <div class="canvas-container">
    <VueFlow
      :nodes="canvasStore.nodes"
      :node-types="nodeTypes"
      @node-click="onNodeClick"
    >
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