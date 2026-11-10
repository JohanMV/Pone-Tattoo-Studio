import { MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { contact } from '@/data/studio'
import { InstagramIcon, Logo, TikTokIcon } from '@/components/ui'

export function Footer() {
  return <footer className="site-footer">
    <div className="container footer-inner">
      <Link to="/" className="brand"><Logo /></Link>
      <div className="footer-location"><MapPin aria-hidden="true" /> <span>Miraflores, Lima<br />Atención previa cita</span></div>
      <nav aria-label="Pie de página">
        <Link to="/portafolio">Portafolio</Link><Link to="/artista">El artista</Link><Link to="/estudio">Estudio</Link><Link to="/contacto">Cotizar</Link>
      </nav>
      <div className="footer-social">
        <a href={contact.instagram} aria-label="Instagram de Pone Tattoo Studio" target="_blank" rel="noreferrer"><InstagramIcon /></a>
        <a href={contact.tiktok} aria-label="TikTok de Pone Tattoo Studio" target="_blank" rel="noreferrer"><TikTokIcon /></a>
      </div>
      <small>© {new Date().getFullYear()} Pone Tattoo Studio</small>
    </div>
  </footer>
}


