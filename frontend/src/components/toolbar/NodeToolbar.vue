<script setup lang="ts">
import ActionButton from './ActionButton.vue'

import {
  Copy,
  CopyPlus,
  Trash2
} from 'lucide-vue-next'

import { useCanvasStore } from '@/stores/canvasStore'

const props = defineProps<{
  nodeId: string
}>()

const canvasStore = useCanvasStore()

function handleDelete() {
  canvasStore.removeNode(props.nodeId)
}
</script>

<template>
  <div class="toolbar-actions">

    <ActionButton title="Duplicate">
      <CopyPlus :size="18" />
    </ActionButton>

    <ActionButton title="Copy">
      <Copy :size="18" />
    </ActionButton>

    <ActionButton
      title="Delete"
      @click="handleDelete"
    >
      <Trash2 :size="18" />
    </ActionButton>

  </div>
</template>

<style scoped>
.toolbar-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>