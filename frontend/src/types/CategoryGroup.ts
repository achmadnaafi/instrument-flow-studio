import type { ComponentManifest } from './ComponentManifest'

export interface CategoryGroup {
  id: string
  title: string
  components: ComponentManifest[]
}