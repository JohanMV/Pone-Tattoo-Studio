import { useEffect, useLayoutEffect } from 'react'
import { Outlet, useLocation, useNavigationType } from 'react-router-dom'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import { Footer, Navbar } from '@/components/layout'

const metadata: Record<string, { title: string; description: string }> = {
  '/': { title: 'Pone Tattoo Studio | Tatuajes con identidad en Miraflores', description: 'Tatuajes personalizados en Miraflores, Lima. Conoce a Pone Reyes, explora nuestros estilos y cotiza tu tatuaje.' },
  '/portafolio': { title: 'Portafolio y estilos | Pone Tattoo Studio', description: 'Explora conceptos de tatuaje en realismo, color, black & grey, fine line e ilustración.' },
  '/artista': { title: 'Pone Reyes | Pone Tattoo Studio', description: 'Conoce a Pone Reyes y su enfoque para crear tatuajes personalizados en Miraflores, Lima.' },
  '/estudio': { title: 'Nuestro local en Miraflores | Pone Tattoo Studio', description: 'Encuentra Pone Tattoo Studio en Miraflores, Lima. Atención previa cita.' },
  '/contacto': { title: 'Cotiza tu tatuaje | Pone Tattoo Studio', description: 'Cuéntanos tu idea, tamaño, estilo y zona del cuerpo para solicitar una cotización personalizada.' },
}

export function MainLayout() {
  const { pathname, hash } = useLocation()
  const navigation = useNavigationType()
  useSectionReveal(pathname)

  useEffect(() => {
    const page = metadata[pathname]
    document.title = page?.title ?? 'Página no encontrada | Pone Tattoo Studio'
    document.querySelector('meta[name="description"]')?.setAttribute('content', page?.description ?? 'Pone Tattoo Studio en Miraflores, Lima.')
  }, [pathname])

  useLayoutEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' })
    } else if (navigation !== 'POP') {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash, navigation])

  return <>
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <Navbar />
    <main id="contenido" tabIndex={-1} className={pathname !== '/' ? 'inner-page' : undefined}>
      <div key={pathname} className="page-transition"><Outlet /></div>
    </main>
    <Footer />
  </>
}


