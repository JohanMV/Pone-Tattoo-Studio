import { ArrowUpRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { clips, contact, media } from '@/data/studio'
import type { Clip } from '@/data/studio'
import { Action, Eyebrow, InstagramIcon, TikTokIcon, Title, MediaRow } from '@/components/ui'

interface TikTokPlayerProps { clip: Clip }

function TikTokPlayer({ clip }: TikTokPlayerProps) {
  const iframe = useRef<HTMLIFrameElement>(null)
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.origin !== 'https://www.tiktok.com' || event.source !== iframe.current?.contentWindow) return
      const message: unknown = event.data
      if (!message || typeof message !== 'object' || !('x-tiktok-player' in message) || message['x-tiktok-player'] !== true || !('type' in message)) return
      if (message.type === 'onPlayerError') setStatus('error')
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return <article className="video-tile social-video" aria-label={clip.title} aria-busy={status === 'loading'}>
    {status === 'loading' && <div className="social-video-loading" aria-hidden="true">
      <img src={media(`tiktok-${clip.id}`)} alt="" width="360" height="640" loading="lazy" />
      <span />
    </div>}
    {status !== 'error' && <iframe
      key={attempt}
      ref={iframe}
      title={`TikTok de Pone Tattoo Studio: ${clip.title}`}
      src={`https://www.tiktok.com/player/v1/${clip.id}?controls=1&autoplay=0&loop=0&rel=0&description=0&music_info=0`}
      loading="lazy"
      allow="fullscreen; autoplay; encrypted-media; picture-in-picture"
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
      className={`social-video-frame${status === 'ready' ? ' is-ready' : ''}`}
      onLoad={() => setStatus((value) => value === 'error' ? value : 'ready')}
      onError={() => setStatus('error')}
    />}
    {status === 'error' && <div className="social-video-fallback" role="status">
      <img src={media(`tiktok-${clip.id}`)} alt="" width="360" height="640" loading="lazy" />
      <TikTokIcon />
      <strong>{clip.title}</strong>
      <p>El video no pudo cargarse.</p>
      <a href={`${contact.tiktok}/video/${clip.id}`} target="_blank" rel="noreferrer">Ver en TikTok <ArrowUpRight aria-hidden="true" /></a>
      <button type="button" onClick={() => { setStatus('loading'); setAttempt((value) => value + 1) }}>Reintentar</button>
    </div>}
  </article>
}

export function Social() {
  return <section id="redes" className="section social textured-corner" aria-labelledby="social-title">
    <div className="container">
      <div data-reveal className="split-heading social-heading">
        <div><Eyebrow>En redes sociales</Eyebrow><Title id="social-title" first="Tinta que" accent="cobra vida." /></div>
        <div>
          <p className="body-copy">Mira procesos, consejos, ideas y más contenido detrás de cada tatuaje. Síguenos y descubre más de Pone Tattoo Studio.</p>
          <div className="actions">
            <a className="action action--outline" href={contact.tiktok} target="_blank" rel="noreferrer"><TikTokIcon /> TikTok</a>
            <Action to={contact.instagram} icon={InstagramIcon}>Instagram</Action>
          </div>
        </div>
      </div>
      <MediaRow label="Videos de TikTok" variant="video" count={clips.length}>
        {clips.map((video) => <TikTokPlayer key={video.id} clip={video} />)}
      </MediaRow>
    </div>
  </section>
}




