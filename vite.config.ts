import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'social-preview-url',
      transformIndexHtml: {
        order: 'pre',
        handler(html) {
          const domain = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL
          const imageUrl = domain ? `https://${domain}/og-preview.jpg` : '/og-preview.jpg'
          return html.replaceAll('%SOCIAL_IMAGE_URL%', imageUrl)
        },
      },
    },
  ],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
})
