import { Gamepad2, Layers, Palette, PenTool, ScanFace } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const contact = {
  instagram: 'https://www.instagram.com/pone.tattoo.studio/',
  artist: 'https://www.instagram.com/pone.reyes/',
  tiktok: 'https://www.tiktok.com/@ponetattoostudio',
  maps: 'https://www.google.com/maps/search/?api=1&query=Pone+Tattoo+Studio+Miraflores+Lima',
  whatsapp: 'https://wa.me/51916842610',
}

export const media = (name: string) => `/media/${name}.webp`

export type StyleSlug = 'realismo' | 'color' | 'black-grey' | 'fine-line' | 'ilustrativo-anime'

interface TattooStyle {
  slug: StyleSlug
  label: string
  description: string
  image: string
  icon: LucideIcon
}

export const styles: TattooStyle[] = [
  { slug: 'realismo', label: 'Realismo', description: 'Detalles y profundidad que cobran vida.', image: 'realismo', icon: ScanFace },
  { slug: 'color', label: 'Color', description: 'Diseños vibrantes y llenos de expresión.', image: 'acuarela', icon: Palette },
  { slug: 'black-grey', label: 'Black & Grey', description: 'Contraste, sombra y gran nivel de detalle.', image: 'tigre', icon: Layers },
  { slug: 'fine-line', label: 'Fine Line', description: 'Trazos precisos, elegantes y minimalistas.', image: 'colibri', icon: PenTool },
  { slug: 'ilustrativo-anime', label: 'Ilustrativo / Anime', description: 'Arte personalizado con tus ideas y personajes.', image: 'anime', icon: Gamepad2 },
]

export interface Work { image: string; name: string; styles: StyleSlug[]; alt: string; additionalImages?: string[] }

export const works: Work[] = [
  { image: 'acuarela', additionalImages: ['acuarela-vista-2', 'acuarela-vista-3'], name: 'Retrato en acuarela', styles: ['color'], alt: 'Tatuaje de un retrato femenino en acuarela cian y carmesí' },
  { image: 'perro', additionalImages: ['perro-vista-2', 'perro-vista-3'], name: 'Retrato canino', styles: ['realismo', 'color'], alt: 'Tatuaje realista de un perro de pelaje blanco y ocre' },
  { image: 'casco', additionalImages: ['casco-vista-2', 'casco-vista-3'], name: 'Casco galáctico', styles: ['ilustrativo-anime', 'color'], alt: 'Tatuaje de un casco galáctico en tonos fucsia y cian' },
  { image: 'horus', additionalImages: ['horus-vista-2', 'horus-vista-3'], name: 'Ojo de Horus', styles: ['black-grey'], alt: 'Tatuaje negro del ojo de Horus con el iris rojo' },
  { image: 'colibri', additionalImages: ['colibri-vista-2', 'colibri-vista-3'], name: 'Colibrí', styles: ['fine-line'], alt: 'Tatuaje de línea fina con perfil de mujer, luna creciente, flores y colibrí' },
  { image: 'realismo', additionalImages: ['realismo-vista-2'], name: 'Escultura clásica', styles: ['realismo', 'black-grey'], alt: 'Tatuaje realista de una figura clásica barbada' },
  { image: 'tigre', additionalImages: ['tigre-vista-2'], name: 'Mirada felina', styles: ['black-grey', 'realismo'], alt: 'Tatuaje de tigre en negro y gris con ojos turquesa' },
  { image: 'anime', additionalImages: ['anime-vista-2'], name: 'Dragón y guerrero', styles: ['ilustrativo-anime', 'color'], alt: 'Tatuaje a color de un personaje de anime y un dragón verde' },
]

export function styleLabel(slug: StyleSlug) {
  return styles.find((style) => style.slug === slug)?.label ?? slug
}

export interface Clip { id: string; title: string; description: string }

export const clips: Clip[] = [
  { id: '7603502516009061648', title: 'Familia de leones', description: 'Fuerza, protección y unión.' },
  { id: '7533744317345598725', title: 'Jack y Sally', description: 'Una pieza a todo color.' },
  { id: '7528146342820990225', title: 'Fuera de este mundo', description: 'Un casco galáctico a color.' },
  { id: '7651279799800909057', title: 'Un koi en 15 segundos', description: 'Así toma forma el diseño.' },
  { id: '7661045372143308048', title: 'Fe y fortaleza', description: 'Un tatuaje en negro y gris.' },
]

