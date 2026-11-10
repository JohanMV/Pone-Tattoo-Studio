import { Maximize2 } from 'lucide-react'
import { useState } from 'react'
import { Action, Dialog, Eyebrow, InstagramIcon, Title } from '@/components/ui'
import { contact, media } from '@/data/studio'
import './artist-page.css'

const awards = [
  {
    year: '2026',
    event: 'Lima Tattoo Convention',
    distinction: '2.º puesto en New School',
    photo: 'premio-lima-new-school',
    alt: 'Pone Reyes muestra el trofeo de New School junto al tatuaje de Lulú',
  },
  {
    year: '2026',
    event: 'Lima Tattoo Convention',
    distinction: 'Presentación oficial como artista peruano especialista en acuarela',
    photo: 'lima-presentacion-pone',
    alt: 'Afiche de Lima Tattoo Convention con el retrato de Pone Reyes y un tatuaje en acuarela',
  },
  {
    year: '2024',
    event: 'Lima Tattoo Convention',
    distinction: '1.er puesto en Acuarela',
    photo: 'premio-lima-watercolor',
    alt: 'Pone Reyes sostiene el trofeo de Acuarela en el escenario de Lima Tattoo Convention',
  },
  {
    year: '2019',
    event: 'Convención Internacional Tattoo Chimbote',
    distinction: '1.er puesto en Dotwork y Mejor tatuaje del día',
    photo: 'premio-chimbote',
    alt: 'Pone Reyes con sus dos trofeos y diplomas de la convención de Chimbote',
  },
  {
    year: '2018',
    event: 'Sudaka Tattoo Fest',
    distinction: 'Reconocimiento en la primera edición',
    photo: 'premio-sudaka',
    alt: 'Pone Reyes con el trofeo de Sudaka Tattoo Fest junto al participante que luce su tatuaje',
  },
]

export function ArtistPage() {
  const [selected, setSelected] = useState<(typeof awards)[number] | null>(null)

  return <section className="section artist-awards" aria-labelledby="artist-awards-title">
    <div className="container">
      <header className="artist-awards-header">
        <div>
          <Eyebrow>El artista</Eyebrow>
          <Title as="h1" id="artist-awards-title" first="Pone Reyes." accent="Reconocimientos." />
        </div>
        <p className="body-copy">De los detalles del Dotwork al color de la acuarela y el New School, estos premios marcan distintas etapas en su trayectoria como tatuador.</p>
      </header>

      <ol className="artist-awards-grid" aria-label="Reconocimientos del más reciente al más antiguo">
        {awards.map((award) => (
          <li key={award.photo}>
            <img src={media(award.photo)} alt={award.alt} decoding="async" />
            <div className="artist-awards-caption">
              <time dateTime={award.year}>{award.year}</time>
              <h2>{award.event}</h2>
              <p>{award.distinction}</p>
            </div>
            <button type="button" className="artist-awards-expand" aria-haspopup="dialog"
              aria-label={`Ampliar foto: ${award.event}, ${award.year}. ${award.distinction}`}
              onClick={() => setSelected(award)}>
              <Maximize2 aria-hidden="true" />
            </button>
          </li>
        ))}
      </ol>

      <div className="actions artist-awards-actions">
        <Action to={contact.artist} icon={InstagramIcon}>Instagram del artista</Action>
      </div>
    </div>
    {selected && <Dialog title={selected.event} onClose={() => setSelected(null)} className="work-dialog">
      <figure>
        <img src={media(selected.photo)} alt={selected.alt} />
        <figcaption>
          <strong>{selected.event}</strong>
          <span><time dateTime={selected.year}>{selected.year}</time> · {selected.distinction}</span>
        </figcaption>
      </figure>
    </Dialog>}
  </section>
}
