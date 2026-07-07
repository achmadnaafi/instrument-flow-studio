import { defineStore } from 'pinia'

export const useCanvasStore = defineStore('canvas', {
  state: () => ({
    nodes: [] as any[],
    nodeCount: 0
  }),

  actions: {
    addNode(label: string) {
      this.nodeCount++

      this.nodes.push({
        id: `${label}-${this.nodeCount}`,
        position: {
          x: 100 + (this.nodeCount * 50),
          y: 100 + (this.nodeCount * 50)
        },
        data: {
          label
        }
      })
    }
  }
})