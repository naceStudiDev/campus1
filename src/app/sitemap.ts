import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.digitalcampus-dz.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL,                               lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/formations`,               lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/bibliotheque`,             lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/inscription`,              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/comment-ca-marche`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/forum`,                    lastModified: new Date(), changeFrequency: 'daily',   priority: 0.7 },
    { url: `${BASE_URL}/contact`,                  lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.5 },
  ]
}
