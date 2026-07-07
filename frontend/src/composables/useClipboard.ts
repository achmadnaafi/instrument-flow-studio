import { shallowRef } from 'vue'

const clipboard = shallowRef<any | null>(null)

export function useClipboard() {

  function copyNode(node: any) {

    clipboard.value = {

      type: node.type,

      position: {
        x: node.position.x,
        y: node.position.y
      },

      data: {
        label: node.data.label,
        component: node.data.component
      }

    }

  }

  function pasteNode() {
    return clipboard.value
  }

  function clear() {
    clipboard.value = null
  }

  function hasData() {
    return clipboard.value !== null
  }

  return {

    copyNode,

    pasteNode,

    clear,

    hasData

  }

}