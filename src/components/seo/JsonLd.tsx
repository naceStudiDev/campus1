export default function JsonLd() {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Digital Campus Dz',
    alternateName: 'D.C.D',
    url: 'https://www.digitalcampus-dz.com',
    logo: 'https://www.digitalcampus-dz.com/images/logo.png',
    description:
      "École en ligne algérienne fondée par des étudiants pour des étudiants. Cours de programmation, cybersécurité, algorithmique et marketing digital via Google Meet.",
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'DZ',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Formations Digital Campus Dz',
      itemListElement: [
        { '@type': 'Course', name: 'Python', description: 'Apprenez Python de zéro jusqu\'à la POO.', provider: { '@type': 'Organization', name: 'Digital Campus Dz' } },
        { '@type': 'Course', name: 'Développement Web', description: 'HTML, CSS, JavaScript, React — devenez développeur web.', provider: { '@type': 'Organization', name: 'Digital Campus Dz' } },
        { '@type': 'Course', name: 'Cybersécurité', description: 'Hacking éthique, pentest et sécurité des systèmes.', provider: { '@type': 'Organization', name: 'Digital Campus Dz' } },
        { '@type': 'Course', name: 'Algorithmique', description: 'Algorithmes et structures de données, du débutant à l\'avancé.', provider: { '@type': 'Organization', name: 'Digital Campus Dz' } },
        { '@type': 'Course', name: 'Marketing Digital', description: 'SEO, réseaux sociaux, Google Ads et stratégie digitale.', provider: { '@type': 'Organization', name: 'Digital Campus Dz' } },
      ],
    },
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Digital Campus Dz',
    url: 'https://www.digitalcampus-dz.com',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  )
}
