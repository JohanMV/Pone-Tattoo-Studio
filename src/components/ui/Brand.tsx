import { ArrowRight } from 'lucide-react'
import type { LucideIcon, LucideProps } from 'lucide-react'
import { forwardRef } from 'react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export function Logo() {
  return <img className="brand-logo" src="/pone.svg" width="180" height="106" alt="Pone Tattoo Studio" />
}

interface EyebrowProps { children: ReactNode }
export function Eyebrow({ children }: EyebrowProps) {
  return <p className="eyebrow">{children}</p>
}

interface TitleProps { first: string; accent: string; as?: 'h1' | 'h2'; inline?: boolean; id?: string }
export function Title({ first, accent, as: Tag = 'h2', inline, id }: TitleProps) {
  return <Tag id={id} className={`display-title${inline ? ' display-title--inline' : ''}`}><span>{first}</span>{' '}<em>{accent}</em></Tag>
}

interface ActionProps {
  to: string
  children: ReactNode
  tone?: 'primary' | 'outline' | 'accent'
  arrow?: boolean
  icon?: LucideIcon
}
export function Action({ to, children, tone = 'outline', arrow = false, icon: Icon }: ActionProps) {
  const className = `action action--${tone}`
  const content = <>{Icon && <Icon aria-hidden="true" />}{children}{arrow && <ArrowRight className="action-arrow" aria-hidden="true" />}</>
  return to.startsWith('https://')
    ? <a className={className} href={to} target="_blank" rel="noreferrer">{content}</a>
    : <Link className={className} to={to}>{content}</Link>
}

interface Fact { icon: LucideIcon; label: ReactNode }
interface FactsProps { items: Fact[] }
export function Facts({ items }: FactsProps) {
  return <ul className="facts">{items.map(({ icon: Icon, label }, index) =>
    <li key={index}><Icon aria-hidden="true" /><span>{label}</span></li>
  )}</ul>
}

export function TikTokIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M16.7 2c.27 2.28 1.56 3.72 3.81 3.87v3.35c-1.38.14-2.6-.32-3.98-1.16v6.25c0 7.94-8.65 10.42-12.13 4.73-2.24-3.66-.87-10.08 6.34-10.34v3.53c-.55.09-1.14.23-1.67.41-1.59.54-2.48 1.56-2.22 3.35.51 3.43 6.8 4.45 6.28-2.26V2h3.57Z" /></svg>
}

export const InstagramIcon = forwardRef<SVGSVGElement, LucideProps>(function InstagramIcon(props, ref) {
  return <svg ref={ref} aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.5 6.5h.01" />
  </svg>
})
