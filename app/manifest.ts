import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MacPower IT Solutions',
    short_name: 'MacPower',
    description: 'Soluciones IT empresariales con Apple y marcas globales.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#0f172a',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/images/macpower-logo-color.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
      },
      {
        src: '/images/macpower-logo-color.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
  }
}
