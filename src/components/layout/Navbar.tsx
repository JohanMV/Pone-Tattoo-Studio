import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from '@/components/ui'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/portafolio', label: 'Portafolio' },
  { to: '/artista', label: 'El artista' },
  { to: '/#estilos', label: 'Estilos' },
  { to: '/estudio', label: 'Estudio' },
  { to: '/#redes', label: 'Redes' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(() => window.scrollY > 48)
  const { pathname, hash } = useLocation()

  useEffect(() => {
    function update() { setScrolled(window.scrollY > 48) }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return <header className={`site-header${pathname !== '/' || scrolled || open ? ' site-header--solid' : ''}`}
    onKeyDown={(event) => {
      if (event.key !== 'Escape' || !open) return
      setOpen(false)
      document.getElementById('menu-toggle')?.focus()
    }}>
    <div className="container nav-inner">
      <Link to="/" className="brand" onClick={() => setOpen(false)}><Logo /></Link>
      <button type="button" id="menu-toggle" className="menu-toggle" aria-expanded={open} aria-controls="main-navigation"
        onClick={() => setOpen(!open)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>{open ? <X /> : <Menu />}</button>
      <nav id="main-navigation" aria-label="Principal" className={`site-nav${open ? ' site-nav--open' : ''}`}>
        {links.map(({ to, label }) => {
          const active = to.includes('#') ? pathname + hash === to : pathname === to && (to !== '/' || !hash)
          return <Link key={to} className="nav-link" to={to} aria-current={active ? (to.includes('#') ? 'location' : 'page') : undefined}
            onClick={() => setOpen(false)}>{label}</Link>
        })}
        <Link className="action action--accent nav-quote" to="/contacto" aria-current={pathname === '/contacto' ? 'page' : undefined} onClick={() => setOpen(false)}>Cotizar</Link>
      </nav>
    </div>
  </header>
}


