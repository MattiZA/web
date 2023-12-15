import { IconFillType } from 'design-system/src/helpers'
import { defineComponent } from 'vue'

export type FolderView = {
  name: string
  label: string
  icon: {
    name: string
    fillType: IconFillType
  }
  isScrollable?: boolean
  component: ReturnType<typeof defineComponent>
  componentAttrs: () => Record<string, unknown>
}
