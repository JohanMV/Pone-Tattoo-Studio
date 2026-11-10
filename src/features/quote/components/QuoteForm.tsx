import { Layers, Link2, Pencil, Phone, Tag, User } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useId } from 'react'
import type { ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'
import { media, styleLabel, styles, works } from '@/data/studio'
import { useQuote } from '@/features/quote/hooks/useQuote'

interface FieldProps {
  name: string
  label: string
  icon: LucideIcon
  children: (id: string) => ReactNode
  wide?: boolean
}

function Field({ name, label, icon: Icon, children, wide }: FieldProps) {
  const id = `${useId()}-${name}`
  return <div className={`field ${wide ? 'field--wide' : ''}`}>
    <label htmlFor={id}>{label}</label>
    <div className="field-inner"><Icon aria-hidden="true" />{children(id)}</div>
  </div>
}

export function QuoteForm() {
  const [params] = useSearchParams()
  const selectedWork = works.find((work) => work.image === params.get('trabajo'))
  const { submit, draftUrl, clearDraft } = useQuote(selectedWork)
  const helpId = useId()

  return <form data-reveal className="quote-panel" onSubmit={submit} onChange={clearDraft} aria-label="Formulario de cotización">
    <h2 className="form-title"><Layers aria-hidden="true" /> Formulario de cotización</h2>
    {selectedWork && <div className="quote-reference">
      <img src={media(selectedWork.image)} alt={selectedWork.alt} width="80" height="80" />
      <div><span>Referencia seleccionada</span><strong>{selectedWork.name}</strong><span>{styleLabel(selectedWork.styles[0])}</span></div>
    </div>}
    <div className="form-grid">
      <Field name="nombre" label="Nombre completo *" icon={User}>{(id) =>
        <input id={id} name="nombre" autoComplete="name" placeholder="Tu nombre" pattern=".*\S.*" maxLength={100} required />}
      </Field>
      <Field name="telefono" label="WhatsApp *" icon={Phone}>{(id) =>
        <input id={id} name="telefono" type="tel" autoComplete="tel" placeholder="+51 999 999 999"
          pattern="[+]?[0-9 ]{7,22}" title="Incluye al menos 7 dígitos. Puedes usar el signo + y espacios."
          onInput={(event) => {
            const field = event.currentTarget
            const digits = field.value.replace(/\D/g, '').length
            field.setCustomValidity(field.value && (digits < 7 || digits > 15) ? 'Escribe un número de WhatsApp válido con 7 a 15 dígitos.' : '')
          }} required />}
      </Field>
      <Field name="idea" label="¿Qué tatuaje te gustaría realizar? *" icon={Pencil} wide>{(id) =>
        <textarea id={id} name="idea" placeholder="Cuéntanos tu idea, estilo o concepto…" rows={3} maxLength={850}
          onInput={(event) => {
            const field = event.currentTarget
            field.setCustomValidity(field.value && !field.value.trim() ? 'Cuéntanos un poco sobre tu idea.' : '')
          }} required />}
      </Field>
      <Field name="tamano" label="Tamaño aproximado" icon={Tag}>{(id) =>
        <input id={id} name="tamano" placeholder="Ej. 15 × 10 cm" maxLength={70} />}
      </Field>
      <Field name="zona" label="Zona del cuerpo" icon={Layers}>{(id) =>
        <select id={id} name="zona" defaultValue="">
          <option value="">Selecciona una opción</option>
          {['Brazo', 'Antebrazo', 'Muñeca o mano', 'Hombro', 'Pecho', 'Espalda', 'Costillas', 'Pierna', 'Otra zona'].map((area) => <option key={area}>{area}</option>)}
        </select>}
      </Field>
      <Field name="estilo" label="Estilo de tatuaje" icon={Layers} wide>{(id) =>
        <select key={selectedWork?.image ?? 'sin-referencia'} id={id} name="estilo" defaultValue={selectedWork ? styleLabel(selectedWork.styles[0]) : ''}>
          <option value="">Selecciona un estilo</option>
          {styles.map((style) => <option key={style.slug}>{style.label}</option>)}
          <option>Necesito asesoría</option>
        </select>}
      </Field>
      <Field name="referencia" label="Imagen de referencia (opcional)" icon={Link2} wide>{(id) =>
        <input className="field-reference" id={id} name="referencia" type="url" pattern="https?://.+"
          placeholder="https://… enlace a tu imagen" aria-describedby={helpId} maxLength={400} />}
      </Field>
      <p id={helpId} className="form-help field--wide">También puedes adjuntar la imagen en el chat de WhatsApp.</p>
    </div>
    <button type="submit" className="action action--primary submit-action">Solicitar cotización</button>
    {draftUrl && <p className="draft-status" role="status">Tu borrador está listo. <a href={draftUrl} target="_blank" rel="noreferrer">Abrir WhatsApp</a></p>}
  </form>
}



