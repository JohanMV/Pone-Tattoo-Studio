import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Artist, Hero, Portfolio, Quote, Social, Studio, Styles } from '@/components/sections'
import { Action, Eyebrow, Title } from '@/components/ui'
import { PortfolioCatalog, WorkGallery } from '@/features/portfolio'
import { QuoteForm } from '@/features/quote'
import { MainLayout } from '@/layouts/MainLayout'

function Home() {
  return <><Hero /><Portfolio gallery={(items) => <WorkGallery items={items} featured />} /><Artist /><Styles /><Studio /><Social /><Quote form={<QuoteForm />} /></>
}

function PortfolioPage() {
  return <section className="section catalog">
    <div className="container">
      <div className="catalog-header">
        <Eyebrow>Portafolio</Eyebrow>
        <Title as="h1" first="Cada tatuaje," accent="una historia." inline />
        <p className="body-copy">Explora los estilos que trabajamos.</p>
      </div>
      <PortfolioCatalog />
    </div>
  </section>
}

function NotFound() {
  return <section className="section not-found"><div className="container"><Eyebrow>404</Eyebrow>
    <Title as="h1" first="Página" accent="no encontrada." />
    <Action to="/" tone="primary" arrow>Volver al inicio</Action>
  </div></section>
}

export default function App() {
  return <BrowserRouter><Routes>
    <Route element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="portafolio" element={<PortfolioPage />} />
      <Route path="artista" element={<Artist standalone />} />
      <Route path="estudio" element={<Studio standalone />} />
      <Route path="contacto" element={<Quote form={<QuoteForm />} standalone />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes></BrowserRouter>
}

