import { onMounted, onUnmounted } from 'vue'

export function useKeyboard(
  handler: (event: KeyboardEvent) => void
) {

  onMounted(() => {

    window.addEventListener('keydown', handler)

  })

  onUnmounted(() => {

    window.removeEventListener('keydown', handler)

  })

}