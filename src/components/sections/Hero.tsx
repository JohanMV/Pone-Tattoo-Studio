import { Crown, Gem, MapPin } from 'lucide-react'
import { Action, Eyebrow, Facts, Title } from '@/components/ui'

export function Hero() {
  return <section className="hero" aria-labelledby="hero-title">
    <picture className="hero-picture">
      <source media="(max-width: 700px)" srcSet="/media/hero-mobile.webp" />
      <img src="/media/hero.webp" width="1672" height="941" alt="" fetchPriority="high" />
    </picture>
    <div className="hero-cut hero-cut--left" aria-hidden="true" />
    <div className="hero-cut hero-cut--right" aria-hidden="true" />
    <div className="container hero-content">
      <Eyebrow>Pone Tattoo Studio</Eyebrow>
      <Title id="hero-title" as="h1" first="Tatuajes con" accent="Identidad." />
      <p className="body-copy">Arte, técnica y experiencia para convertir tus ideas en tatuajes únicos.</p>
      <div className="actions">
        <Action tone="primary" to="/#cotizacion" arrow>Cotiza tu tatuaje</Action>
        <Action to="/portafolio">Ver portafolio</Action>
      </div>
      <Facts items={[
        { icon: Gem, label: <>Tatuajes<br />personalizados</> },
        { icon: Crown, label: <>Calidad<br />profesional</> },
        { icon: MapPin, label: <>Miraflores<br />previa cita</> },
      ]} />
    </div>
  </section>
}

