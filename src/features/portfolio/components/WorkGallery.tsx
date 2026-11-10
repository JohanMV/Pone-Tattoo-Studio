import { ArrowUpRight, ChevronLeft, ChevronRight, Images, Maximize2 } from 'lucide-react'
import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Dialog } from '@/components/ui'
import { media, styleLabel, styles, works } from '@/data/studio'
import type { Work } from '@/data/studio'

interface GalleryProps { items: Work[]; featured?: boolean }

interface PortfolioCardProps { work: Work; onOpen: (index: number) => void }

function PortfolioCard({ work, onOpen }: PortfolioCardProps) {
  const [index, setIndex] = useState(0)
  const photos = [work.image, ...(work.additionalImages ?? [])]

  return <article className="portfolio-card">
    <div className="portfolio-card-media photo-tile">
      <button type="button" className="portfolio-card-image" onClick={() => onOpen(index)} aria-label={`Ampliar ${work.name}, foto ${index + 1} de ${photos.length}`}>
        <img src={media(photos[index])} alt={`${work.alt}, vista ${index + 1} de ${photos.length}`} width="850" height="750" loading="lazy" decoding="async" />
      </button>
      {photos.length > 1 && <div className="portfolio-card-arrows" aria-label={`Fotos de ${work.name}`}>
        <button type="button" aria-label={`Foto anterior de ${work.name}`} disabled={index === 0} onClick={() => setIndex((value) => value - 1)}><ChevronLeft aria-hidden="true" /></button>
        <button type="button" aria-label={`Foto siguiente de ${work.name}`} disabled={index === photos.length - 1} onClick={() => setIndex((value) => value + 1)}><ChevronRight aria-hidden="true" /></button>
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
      {items.map((work) => featured ? <button key={work.image} type="button" className="work-tile photo-tile"
        onClick={() => { setPhotoIndex(0); setSelected(work) }} aria-label={`Ver fotos: ${work.name}`}>
        <img src={media(work.image)} alt={work.alt} width="850" height="750" loading="lazy" decoding="async" />
        {work.additionalImages?.length && <span className="work-count"><Images aria-hidden="true" /> {1 + work.additionalImages.length}</span>}
        <span className="work-caption"><span>{styleLabel(work.styles[0])}</span><Maximize2 aria-hidden="true" /></span>
      </button> : <PortfolioCard key={work.image} work={work} onOpen={(index) => { setPhotoIndex(index); setSelected(work) }} />)}
    </div>
    {selected && <Dialog title={selected.name} onClose={() => setSelected(null)} className={`work-dialog${photos.length > 1 ? ' work-dialog--multiple' : ''}`}>
      <figure onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') setPhotoIndex((index) => Math.max(0, index - 1))
        if (event.key === 'ArrowRight') setPhotoIndex((index) => Math.min(photos.length - 1, index + 1))
      }}>
        <img src={media(photos[photoIndex])} alt={`${selected.alt}, vista ${photoIndex + 1} de ${photos.length}`} />
        <figcaption>
          <strong>{selected.name}</strong>
          <span>{selected.styles.map(styleLabel).join(' · ')}</span>
          {photos.length > 1 && <span className="work-photo-count" aria-live="polite">{photoIndex + 1} / {photos.length}</span>}
        </figcaption>
        {photos.length > 1 && <div className="work-navigation" aria-label="Fotos del tatuaje">
          <button type="button" aria-label="Foto anterior" disabled={photoIndex === 0} onClick={() => setPhotoIndex((index) => index - 1)}><ChevronLeft aria-hidden="true" /></button>
          <button type="button" aria-label="Foto siguiente" disabled={photoIndex === photos.length - 1} onClick={() => setPhotoIndex((index) => index + 1)}><ChevronRight aria-hidden="true" /></button>
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

