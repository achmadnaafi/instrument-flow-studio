<script setup lang="ts">
import { computed } from 'vue'
import { componentThemes } from '@/themes/componentThemes'
import { useCanvasStore } from '@/stores/canvasStore'
import type { NodeProps } from '@vue-flow/core'
import type { ComponentManifest } from '@/types/ComponentManifest'
import NodeToolbar from '@/components/toolbar/NodeToolbar.vue'

interface ComponentNodeData {
  label: string
  component: ComponentManifest
}

const props = defineProps<NodeProps<ComponentNodeData>>()

const canvasStore = useCanvasStore()

const theme = computed(() => {
  return componentThemes[
    props.data.component.theme as keyof typeof componentThemes
  ]
})

const isSelected = computed(() => {
  return canvasStore.selectedNodeId === props.id
})

const emit = defineEmits<{
  (e:'delete-node', nodeId:string): void
}>()

function handleDelete() {
  emit('delete-node', props.id)
}

</script>

<template>
  <div class="node-wrapper">

    <div
      class="node-toolbar"
      v-if="isSelected"
    >
      <NodeToolbar
        v-if="isSelected"
        :node-id="props.id"
      />
    </div>

    <div
      class="component-node"
      :class="{
        selected: isSelected
      }"
    >
      <div class="header">

      <div
          class="dot"
          :style="{
          backgroundColor: theme.color
          }"
      ></div>

      <div class="name">
          {{ props.data.component.name }}
      </div>

      </div>

      <div class="category">
      {{ props.data.component.displayCategory }}
      </div>
    </div>

  </div>
</template>

<style scoped>

.component-node{

    min-width:190px;

    background:white;

    border:1px solid #d1d5db;

    border-radius:10px;

    padding:14px;

    box-shadow:0 2px 8px rgba(0,0,0,.08);

    transition:all .2s ease;

}

.component-node:hover:not(.selected){

    transform:translateY(-2px);

    border-color:#cbd5e1;

    box-shadow:0 8px 18px rgba(0,0,0,.10);

}

.header{

    display:flex;

    align-items:center;

    gap:10px;

}

.dot{

    width:12px;

    height:12px;

    border-radius:50%;

    background:#3b82f6;

    flex-shrink:0;

}

.name{

    font-size:16px;

    font-weight:600;

}

.category{

    margin-top:12px;

    font-size:13px;

    color:#6b7280;

}

.component-node.selected{

    border-color:#2563eb;

    box-shadow:
        0 0 0 4px rgba(37,99,235,.15),
        0 8px 18px rgba(0,0,0,.12);

}

.node-wrapper{

    position:relative;

}

.node-toolbar{

    position:absolute;

    top:-42px;

    left:50%;

    transform:translateX(-50%);

    z-index:10;

}
</style>