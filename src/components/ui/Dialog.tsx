import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'

interface DialogProps { title: string; children: ReactNode; onClose: () => void; className?: string }

export function Dialog({ title, children, onClose, className = '' }: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    const previouslyFocused = document.activeElement
    dialog?.showModal()
    return () => {
      dialog?.close()
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus({ preventScroll: true })
    }
  }, [])

  return <dialog
    ref={ref}
    aria-label={title}
    className={`media-dialog ${className}`}
    onCancel={(event) => { event.preventDefault(); onClose() }}
    onClick={(event) => { if (event.target === event.currentTarget) onClose() }}
  >
    <div className="dialog-content">
      <button type="button" className="dialog-close" aria-label="Cerrar" onClick={onClose}><X /></button>
      {children}
    </div>
  </dialog>
}
