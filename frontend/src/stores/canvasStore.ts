import { defineStore } from 'pinia'

export const useCanvasStore = defineStore('canvas', {
  state: () => ({
    nodes: [] as any[],
    nodeCount: 0
  }),

  actions: {
    addNode(component: any) {
      this.nodeCount++

      this.nodes.push({
        id: `${component.id}-${this.nodeCount}`,
        position: {
          x: 100 + (this.nodeCount * 50),
          y: 100 + (this.nodeCount * 50)
        },
        data: {
          label: component.name,
          component
        }
      })
    }
  }
})