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
    },
    removeNode(nodeId: string) {
      this.nodes = this.nodes.filter(node => node.id !== nodeId)

      if (this.selectedNodeId === nodeId) {
        this.selectedNodeId = null
      }
    },
    duplicateNode(nodeId: string) {

      const node = this.nodes.find(n => n.id === nodeId)

      if (!node) return

      this.nodeCount++

      const duplicatedNode = {

        id: `${node.data.component.id}-${this.nodeCount}`,

        type: node.type,

        position: {
          x: node.position.x + 40,
          y: node.position.y + 40
        },

        data: {
          label: node.data.label,
          component: node.data.component
        }

      }

      this.nodes.push(duplicatedNode)

      this.selectedNodeId = duplicatedNode.id

    },
    getNode(nodeId: string) {
      return this.nodes.find(node => node.id === nodeId) ?? null
    },
    pasteNode(nodeData: any) {

      this.nodeCount++

      const newNode = {

        id: `${nodeData.data.component.id}-${this.nodeCount}`,

        type: nodeData.type,

        position: {
          x: nodeData.position.x + 40,
          y: nodeData.position.y + 40
        },

        data: {
          label: nodeData.data.label,
          component: nodeData.data.component
        }

      }

      this.nodes.push(newNode)

      this.selectedNodeId = newNode.id

    },
  }
})