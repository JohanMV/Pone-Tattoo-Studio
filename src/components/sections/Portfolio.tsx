import { works } from '@/data/studio'
import { Action, Eyebrow, Title } from '@/components/ui'
import type { ReactNode } from 'react'

interface PortfolioProps { gallery: (items: typeof works) => ReactNode }

export function Portfolio({ gallery }: PortfolioProps) {
  return <section className="section portfolio angled-corner" aria-labelledby="portfolio-title">
    <div className="container container--portfolio">
      <div data-reveal className="split-heading">
        <div><Eyebrow>Portafolio destacado</Eyebrow><Title id="portfolio-title" first="Cada tatuaje," accent="una historia." inline /></div>
        <p className="body-copy">Una selección de estilos que refleja la técnica, versatilidad y pasión por el arte que inspiran nuestro trabajo.</p>
      </div>
      {gallery(works.slice(0, 5))}
      <div className="section-end"><Action to="/portafolio" tone="accent" arrow>Ver portafolio completo</Action></div>
    </div>
  </section>
}


