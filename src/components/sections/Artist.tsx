import { CalendarCheck, MapPin, PenTool } from 'lucide-react'
import { contact, media } from '@/data/studio'
import { Action, Eyebrow, Facts, InstagramIcon, Title } from '@/components/ui'

interface ArtistProps { standalone?: boolean }

const images = [
  { file: 'artista-principal', alt: 'Ilustración de un tatuador usando una máquina en el brazo de un cliente' },
  { file: 'artista-retrato', alt: 'Retrato ilustrativo en blanco y negro de un tatuador' },
  { file: 'artista-boceto', alt: 'Ilustración de un tatuador dibujando un boceto en papel' },
  { file: 'artista-sesion', alt: 'Ilustración de un tatuador con gorra trabajando durante una sesión' },
]

export function Artist({ standalone = false }: ArtistProps) {
  return <section id="artista" className="section artist textured-corner" aria-labelledby="artist-title">
    <div className="container artist-grid">
      <figure data-reveal className="artist-media">
        <div className="artist-collage">
          {images.map(({ file, alt }) => <img key={file} src={media(file)} alt={alt} width="700" height="700" loading={standalone && file === 'artista-principal' ? 'eager' : 'lazy'} decoding="async" />)}
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
          <Action to="/contacto" tone="primary" arrow>Cotiza tu idea</Action>
          <Action to={contact.artist} icon={InstagramIcon}>Instagram del artista</Action>
        </div>
      </div>
    </div>
  </section>
}



