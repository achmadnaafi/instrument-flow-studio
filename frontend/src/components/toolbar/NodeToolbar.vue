<script setup lang="ts">
import ActionButton from './ActionButton.vue'

import {
  Copy,
  CopyPlus,
  Trash2
} from 'lucide-vue-next'

import { useCanvasStore } from '@/stores/canvasStore'
import { useClipboard } from '@/composables/useClipboard'

const clipboard = useClipboard()
const props = defineProps<{
  nodeId: string
}>()

const canvasStore = useCanvasStore()

function handleDelete() {
  canvasStore.removeNode(props.nodeId)
}

function handleDuplicate() {
  console.log('Duplicate clicked')
  canvasStore.duplicateNode(props.nodeId)
}

function handleCopy() {

  const node = canvasStore.getNode(props.nodeId)

  if (!node) return

  clipboard.copyNode(node)

}

</script>

<template>
  <div class="toolbar-actions">

    <ActionButton
    title="Duplicate"
    @click="handleDuplicate"
    >
    <CopyPlus :size="18" />
    </ActionButton>
    
    <ActionButton
        title="Copy"
        @click="handleCopy"
    >
        <Copy :size="18"/>
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