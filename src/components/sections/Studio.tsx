import { CalendarCheck, MapPin, PenTool } from 'lucide-react'
import { contact, media } from '@/data/studio'
import { Action, Eyebrow, Facts, Title } from '@/components/ui'

interface StudioProps { standalone?: boolean }

export function Studio({ standalone = false }: StudioProps) {
  return <section id="estudio" className="section studio textured-corner" aria-labelledby="studio-title">
    <div className="container studio-grid">
      <div data-reveal className="studio-intro">
        <Eyebrow>Nuestro local</Eyebrow>
        <Title id="studio-title" as={standalone ? 'h1' : 'h2'} first="Un espacio pensado" accent="para tu próximo tatuaje." />
        <p className="body-copy">Conoce nuestro estudio en Miraflores, un espacio pensado para recibir tus ideas y dar forma a tu próximo tatuaje.</p>
      </div>
      <figure data-reveal className="studio-media">
        <div className="studio-frame">
          <img src={media('estudio')} width="940" height="940" alt="Vista ilustrativa de un estudio con recepción naranja y estaciones de tatuaje" loading={standalone ? 'eager' : 'lazy'} decoding="async" />
        </div>
        <svg className="studio-marks" aria-hidden="true" viewBox="0 0 26 96" fill="none" stroke="currentColor" strokeWidth="6">
          <path d="M4 4 22 22M22 4 4 22M4 39 22 57M22 39 4 57M4 74 22 92M22 74 4 92" />
        </svg>
      </figure>
      <div data-reveal className="studio-details">
        <Facts items={[
          { icon: MapPin, label: <>Miraflores,<br />Lima</> },
          { icon: CalendarCheck, label: <>Atención<br />previa cita</> },
          { icon: PenTool, label: <>Diseño<br />a medida</> },
        ]} />
        <div className="actions">
          <Action to="/contacto" tone="primary" arrow>Cotiza tu idea</Action>
          <Action to={contact.maps} icon={MapPin}>Cómo llegar</Action>
        </div>
      </div>
    </div>
  </section>
}



