import { defineStore } from 'pinia'
import type { ComponentManifest } from '@/types/ComponentManifest'

export const useCanvasStore = defineStore('canvas', {
  state: () => ({
    nodes: [] as any[],
    nodeCount: 0,

    selectedNodeId: null as string | null
  }),

  actions: {
    addNode(component: ComponentManifest) {
      this.nodeCount++

      this.nodes.push({
        id: `${component.id}-${this.nodeCount}`,
        type: 'component',
        position: {
          x: 100 + (this.nodeCount * 50),
          y: 100 + (this.nodeCount * 50)
        },
        data: {
          label: component.name,
          component
        }
      })
    },
    selectNode(id: string) {
      this.selectedNodeId = id
    },
    clearSelection() {
      this.selectedNodeId = null
    }
  }
})