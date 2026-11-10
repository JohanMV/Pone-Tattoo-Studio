import { Link } from 'react-router-dom'
import { media, styles } from '@/data/studio'
import { Action, Eyebrow, Title, MediaRow } from '@/components/ui'

export function Styles() {
  return <section id="estilos" className="section styles textured-corner" aria-labelledby="styles-title">
    <div className="container">
      <div data-reveal className="split-heading">
        <div><Eyebrow>Estilos</Eyebrow><Title id="styles-title" first="Estilos que" accent="manejamos" inline /></div>
        <p className="body-copy">Explora la variedad de estilos que trabajamos y encuentra el ideal para tu próximo tatuaje.</p>
      </div>
      <MediaRow label="Estilos de tatuaje" variant="style" count={styles.length}>
        {styles.map(({ slug, label, description, image, icon: Icon }) => <Link className="style-tile photo-tile" key={slug} to={`/portafolio?estilo=${slug}`}>
          <img src={media(image)} alt="" width="620" height="910" loading="lazy" decoding="async" />
          <div className="style-caption"><Icon aria-hidden="true" /><h3>{label}</h3><p>{description}</p></div>
        </Link>)}
      </MediaRow>
      <div className="section-end"><Action to="/portafolio" tone="accent" arrow>Ver todos los estilos</Action></div>
    </div>
  </section>
}


