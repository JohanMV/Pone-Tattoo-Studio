import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useId, useRef, useState } from 'react'
import type { ReactNode } from 'react'

interface MediaRowProps { children: ReactNode; label: string; variant: 'style' | 'video'; count: number }

export function MediaRow({ children, label, variant, count }: MediaRowProps) {
  const id = useId()
  const row = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  function move(direction: number) {
    const element = row.current
    const first = element?.firstElementChild
    if (!(first instanceof HTMLElement) || !element) return
    const gap = Number.parseFloat(getComputedStyle(element).columnGap) || 0
    element.scrollBy({ left: direction * (first.offsetWidth + gap) })
  }

  function update() {
    const element = row.current
    const first = element?.firstElementChild
    if (!(first instanceof HTMLElement) || !element) return
    const gap = Number.parseFloat(getComputedStyle(element).columnGap) || 0
    const atEnd = element.scrollLeft + element.clientWidth >= element.scrollWidth - 3
    setActive(atEnd && element.scrollLeft > 0 ? count - 1 : Math.round(element.scrollLeft / (first.offsetWidth + gap)))
  }

  return <>
    <div data-reveal ref={row} id={id} role="group" aria-label={label} className={`media-row media-row--${variant}`} onScroll={update}>
      {children}
    </div>
    <div className="row-controls">
      <button type="button" aria-controls={id} aria-label={`Anterior: ${label}`} onClick={() => move(-1)} disabled={active === 0}><ChevronLeft /></button>
      <span aria-live="polite">{String(active + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}</span>
      <button type="button" aria-controls={id} aria-label={`Siguiente: ${label}`} onClick={() => move(1)} disabled={active === count - 1}><ChevronRight /></button>
    </div>
  </>
}

