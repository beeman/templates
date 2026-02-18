import { LucideBug, LucideChevronsUpDown, type LucideProps, LucideRefreshCcw } from 'lucide-react'
import type * as react from 'react'
import type { ForwardRefExoticComponent } from 'react'

type UiIconLucide = ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & react.RefAttributes<SVGSVGElement>>

export type UiIconName = 'bug' | 'chevronsUpDown' | 'refresh'

const uiIconMap = new Map<UiIconName, UiIconLucide>()
  .set('bug', LucideBug)
  .set('chevronsUpDown', LucideChevronsUpDown)
  .set('refresh', LucideRefreshCcw)

export function getIcon(type: UiIconName) {
  if (!uiIconMap.has(type)) {
    throw new Error(`Icon with type ${type} not found`)
  }
  return uiIconMap.get(type) as UiIconLucide
}

export function getIconNames() {
  return Array.from(uiIconMap).map(([name]) => name)
}
