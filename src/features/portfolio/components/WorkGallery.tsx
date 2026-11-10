import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Dialog } from '@/components/ui'
import { media, styleLabel, styles, works } from '@/data/studio'
import type { Work } from '@/data/studio'

interface GalleryProps { items: Work[]; featured?: boolean }

interface PortfolioCardProps { work: Work; onOpen: (index: number) => void }

const previousPhoto = (index: number, count: number) => (index - 1 + count) % count
const nextPhoto = (index: number, count: number) => (index + 1) % count

function FeaturedCard({ work, onOpen }: PortfolioCardProps) {
  const [index, setIndex] = useState(0)
  const photos = [work.image, ...(work.additionalImages ?? [])]

  return <article className="work-tile photo-tile">
    <button type="button" className="work-tile-image" onClick={() => onOpen(index)} aria-label={`Ampliar ${work.name}, foto ${index + 1} de ${photos.length}`}>
      <img src={media(photos[index])} alt={`${work.alt}, vista ${index + 1} de ${photos.length}`} width="850" height="750" loading="lazy" decoding="async" />
      <span className="work-caption"><span>{styleLabel(work.styles[0])}</span></span>
    </button>
    {photos.length > 1 && <div className="portfolio-card-arrows work-tile-arrows" aria-label={`Fotos de ${work.name}`}>
      <button type="button" aria-label={`Foto anterior de ${work.name}`} onClick={() => setIndex((value) => previousPhoto(value, photos.length))}><ChevronLeft aria-hidden="true" /></button>
      <button type="button" aria-label={`Foto siguiente de ${work.name}`} onClick={() => setIndex((value) => nextPhoto(value, photos.length))}><ChevronRight aria-hidden="true" /></button>
    </div>}
  </article>
}

function PortfolioCard({ work, onOpen }: PortfolioCardProps) {
  const [index, setIndex] = useState(0)
  const photos = [work.image, ...(work.additionalImages ?? [])]

  return <article className="portfolio-card">
    <div className="portfolio-card-media photo-tile">
      <button type="button" className="portfolio-card-image" onClick={() => onOpen(index)} aria-label={`Ampliar ${work.name}, foto ${index + 1} de ${photos.length}`}>
        <img src={media(photos[index])} alt={`${work.alt}, vista ${index + 1} de ${photos.length}`} width="850" height="750" loading="lazy" decoding="async" />
      </button>
      {photos.length > 1 && <div className="portfolio-card-arrows" aria-label={`Fotos de ${work.name}`}>
        <button type="button" aria-label={`Foto anterior de ${work.name}`} onClick={() => setIndex((value) => previousPhoto(value, photos.length))}><ChevronLeft aria-hidden="true" /></button>
        <button type="button" aria-label={`Foto siguiente de ${work.name}`} onClick={() => setIndex((value) => nextPhoto(value, photos.length))}><ChevronRight aria-hidden="true" /></button>
      </div>}
    </div>
    <div className="portfolio-card-info">
      <div className="portfolio-card-details"><h2>{work.name}</h2><p>{styleLabel(work.styles[0])}</p></div>
      <Link className="portfolio-card-quote" to={`/contacto?trabajo=${encodeURIComponent(work.image)}`} aria-label={`Cotizar ${work.name}`}>Cotizar <ArrowUpRight aria-hidden="true" /></Link>
    </div>
  </article>
}

export function WorkGallery({ items, featured }: GalleryProps) {
  const [selected, setSelected] = useState<Work | null>(null)
  const [photoIndex, setPhotoIndex] = useState(0)
  const photos = selected ? [selected.image, ...(selected.additionalImages ?? [])] : []

  return <>
    <div className={`work-grid ${featured ? 'work-grid--featured' : ''}`}>
      {items.map((work) => featured ? <FeaturedCard key={work.image} work={work} onOpen={(index) => { setPhotoIndex(index); setSelected(work) }} />
        : <PortfolioCard key={work.image} work={work} onOpen={(index) => { setPhotoIndex(index); setSelected(work) }} />)}
    </div>
    {selected && <Dialog title={selected.name} onClose={() => setSelected(null)} className={`work-dialog${photos.length > 1 ? ' work-dialog--multiple' : ''}`}>
      <figure onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') setPhotoIndex((index) => previousPhoto(index, photos.length))
        if (event.key === 'ArrowRight') setPhotoIndex((index) => nextPhoto(index, photos.length))
      }}>
        <img src={media(photos[photoIndex])} alt={`${selected.alt}, vista ${photoIndex + 1} de ${photos.length}`} />
        <figcaption>
          <strong>{selected.name}</strong>
          <span>{selected.styles.map(styleLabel).join(' · ')}</span>
          {photos.length > 1 && <span className="work-photo-count" aria-live="polite">{photoIndex + 1} / {photos.length}</span>}
        </figcaption>
        {photos.length > 1 && <div className="work-navigation" aria-label="Fotos del tatuaje">
          <button type="button" aria-label="Foto anterior" onClick={() => setPhotoIndex((index) => previousPhoto(index, photos.length))}><ChevronLeft aria-hidden="true" /></button>
          <button type="button" aria-label="Foto siguiente" onClick={() => setPhotoIndex((index) => nextPhoto(index, photos.length))}><ChevronRight aria-hidden="true" /></button>
        </div>}
      </figure>
    </Dialog>}
  </>
}

export function PortfolioCatalog() {
  const [params] = useSearchParams()
  const filter = styles.find((style) => style.slug === params.get('estilo'))?.slug
  const visible = filter ? works.filter((work) => work.styles.includes(filter)) : works

  return <>
    <nav className="filters" aria-label="Filtrar por estilo">
      <Link to="/portafolio" preventScrollReset aria-current={!filter ? 'true' : undefined}>Todos</Link>
      {styles.map((style) => <Link key={style.slug} to={`?estilo=${style.slug}`} preventScrollReset aria-current={filter === style.slug ? 'true' : undefined}>
        {style.label}
      </Link>)}
    </nav>
    <p className="sr-only" role="status">{visible.length} {visible.length === 1 ? 'pieza' : 'piezas'}</p>
    <WorkGallery items={visible} />
  </>
}

