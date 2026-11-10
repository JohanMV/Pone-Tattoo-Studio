import { CalendarCheck, MapPin, PenTool } from 'lucide-react'
import { useState } from 'react'
import { contact, media } from '@/data/studio'
import { Action, Eyebrow, Facts, InstagramIcon, Title } from '@/components/ui'

interface ArtistProps { standalone?: boolean }

const images = [
  { file: 'pone-hero', alt: 'Ilustración de un tatuador trabajando, recortada de la imagen principal del sitio', position: 'center 35%' },
  { file: 'pone-trabajando', alt: 'Pone Reyes trabajando en un tatuaje', position: 'center 40%' },
  { file: 'pone-retrato', alt: 'Retrato de Pone Reyes con camiseta del estudio', position: 'center 25%' },
  { file: 'pone-convencion', alt: 'Pone Reyes con un premio junto al tatuaje de una clienta', position: 'center 35%' },
]

export function Artist({ standalone = false }: ArtistProps) {
  const [collage, setCollage] = useState(images)

  function swapImage(index: number) {
    setCollage((current) => {
      const next = [...current]
      ;[next[0], next[index]] = [next[index], next[0]]
      return next
    })
  }

  return <section id="artista" className="section artist textured-corner" aria-labelledby="artist-title">
    <div className="container artist-grid">
      <figure data-reveal className="artist-media">
        <div className="artist-collage">
          <img src={media(collage[0].file)} alt={collage[0].alt} style={{ objectPosition: collage[0].position }} width="700" height="700" loading={standalone ? 'eager' : 'lazy'} decoding="async" />
          {collage.slice(1).map(({ file, alt, position }, index) => <button key={index} type="button" className="artist-thumbnail" onClick={() => swapImage(index + 1)} aria-label={`Mostrar imagen principal: ${alt}`}>
            <img src={media(file)} alt="" style={{ objectPosition: position }} width="700" height="700" loading="lazy" decoding="async" />
          </button>)}
        </div>
      </figure>
      <div data-reveal className="artist-copy">
        <Eyebrow>El artista</Eyebrow>
        <Title id="artist-title" as={standalone ? 'h1' : 'h2'} first="El arte lleva" accent="su firma." />
        <p className="artist-name">Pone Reyes</p>
        <p className="body-copy">Detrás de cada tatuaje hay una idea, una historia y una visión artística. Conoce a Pone Reyes y descubre cómo transforma cada propuesta en una pieza única y personal.</p>
        <Facts items={[
          { icon: PenTool, label: <>Diseños<br />personalizados</> },
          { icon: MapPin, label: <>Miraflores,<br />Lima</> },
          { icon: CalendarCheck, label: <>Atención<br />previa cita</> },
        ]} />
        <div className="actions">
          <Action to="/artista" tone="primary" arrow>Reconocimientos</Action>
          <Action to={contact.artist} icon={InstagramIcon}>Instagram del artista</Action>
        </div>
      </div>
    </div>
  </section>
}



