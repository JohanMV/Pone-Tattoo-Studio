import { useState } from 'react'
import type { FormEvent } from 'react'
import { contact, styleLabel } from '@/data/studio'
import type { Work } from '@/data/studio'

export function useQuote(selectedWork?: Work) {
  const [draft, setDraft] = useState<{ url: string; workId?: string } | null>(null)
  const draftUrl = draft?.workId === selectedWork?.image ? draft?.url ?? null : null

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const fields = new FormData(event.currentTarget)
    const value = (name: string) => String(fields.get(name) ?? '').trim()
    const message = [
      '¡Hola, Pone Tattoo Studio! Quisiera cotizar un tatuaje.',
      '',
      `Nombre: ${value('nombre')}`,
      `WhatsApp: ${value('telefono')}`,
      selectedWork && `Trabajo del portafolio: ${selectedWork.name} (${styleLabel(selectedWork.styles[0])}, ID: ${selectedWork.image})`,
      `Idea: ${value('idea')}`,
      value('tamano') && `Tamaño: ${value('tamano')}`,
      value('zona') && `Zona: ${value('zona')}`,
      value('estilo') && `Estilo: ${value('estilo')}`,
      value('referencia') && `Referencia: ${value('referencia')}`,
    ].filter((line, index) => line || index === 1).join('\n')
    const url = `${contact.whatsapp}?text=${encodeURIComponent(message)}`
    setDraft({ url, workId: selectedWork?.image })
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return { submit, draftUrl, clearDraft: () => setDraft(null) }
}
