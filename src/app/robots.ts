import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/formations',
          '/bibliotheque',
          '/forum',
          '/contact',
          '/inscription',
          '/comment-ca-marche',
        ],
        disallow: [
          '/admin',
          '/mon-espace',
          '/connexion',
          '/auth',
          '/api',
        ],
      },
    ],
    sitemap: 'https://www.digitalcampus-dz.com/sitemap.xml',
  }
}
