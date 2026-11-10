import { CalendarCheck, Gem, ShieldCheck } from 'lucide-react'
import type { ReactNode } from 'react'
import { Eyebrow, Facts, Title } from '@/components/ui'

interface QuoteProps { form: ReactNode; standalone?: boolean }

export function Quote({ form, standalone = false }: QuoteProps) {
  return <section id="cotizacion" className="section quote" aria-labelledby="quote-title">
    <div className="container quote-grid">
      <div data-reveal className="quote-copy">
        <Eyebrow>Solicita tu cotización</Eyebrow>
        <Title id="quote-title" as={standalone ? 'h1' : 'h2'} first="Tu idea." accent="Nuestro arte." />
        <p className="body-copy">Cuéntanos qué tatuaje tienes en mente, comparte tus referencias y recibe una cotización personalizada.</p>
        <Facts items={[
          { icon: Gem, label: 'Diseños personalizados' },
          { icon: ShieldCheck, label: 'Asesoría profesional' },
          { icon: CalendarCheck, label: 'Atención previa cita' },
        ]} />
      </div>
      {form}
    </div>
  </section>
}


