import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.macpower.com.co' // Replace with actual domain
  
  // Core pages
  const routes = [
    '',
    '/nosotros',
    '/mac-para-empresas',
    '/apple-educacion',
    '/mac',
    '/portafolio/valor-it',
    '/portafolio/daas',
    '/labpower',
    '/contacto-empresas',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
