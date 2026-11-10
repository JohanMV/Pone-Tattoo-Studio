import { useEffect } from 'react'

export function useSectionReveal(pathname: string) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('reveal-in')
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.08 })

    const elements = document.querySelectorAll('[data-reveal]')
    elements.forEach((element) => observer.observe(element))
    return () => {
      observer.disconnect()
      elements.forEach((element) => element.classList.remove('reveal-in'))
    }
  }, [pathname])
}
