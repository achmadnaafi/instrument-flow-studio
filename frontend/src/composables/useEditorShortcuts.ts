import { useKeyboard } from './useKeyboard'
import { useCanvasStore } from '@/stores/canvasStore'
import { useClipboard } from './useClipboard'

export function useEditorShortcuts() {
  const clipboard = useClipboard()
  const canvasStore = useCanvasStore()

  useKeyboard((event) => {

    // Delete
    if (
      event.key === 'Delete' &&
      canvasStore.selectedNodeId
    ) {

      canvasStore.removeNode(
        canvasStore.selectedNodeId
      )

      return
    }

    // Duplicate
    if (
      event.ctrlKey &&
      event.key.toLowerCase() === 'd' &&
      canvasStore.selectedNodeId
    ) {

      event.preventDefault()

      canvasStore.duplicateNode(
        canvasStore.selectedNodeId
      )

    }

    // Copy
    if (
    event.ctrlKey &&
    event.key.toLowerCase() === 'c' &&
    canvasStore.selectedNodeId
    ) {

    event.preventDefault()

    const node = canvasStore.getNode(
        canvasStore.selectedNodeId
    )

    if (!node) return

    clipboard.copyNode(node)

    }
    
    // Paste
    if (
    event.ctrlKey &&
    event.key.toLowerCase() === 'v'
    ) {

    event.preventDefault()

    if (!clipboard.hasData()) return

    canvasStore.pasteNode(
        clipboard.pasteNode()
    )

    }
  })

}