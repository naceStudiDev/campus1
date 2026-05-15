import { formations } from '@/data/formations'

const BASE_URL = 'https://www.digitalcampus-dz.com'

const durationToISO = (d: string) => {
  if (d.includes('2 mois')) return 'P2M'
  if (d.includes('3 mois')) return 'P3M'
  if (d.includes('4 mois')) return 'P4M'
  if (d.includes('6 mois')) return 'P6M'
  return 'P3M'
}

const levelToSchema = (level: string) => {
  if (level === 'Débutant') return 'Beginner'
  if (level === 'Intermédiaire') return 'Intermediate'
  return 'Advanced'
}

export default function FormationsJsonLd() {
  const courseList = formations.map((f) => ({
    '@type': 'Course',
    '@id': `${BASE_URL}/formations#${f.id}`,
    name: f.title,
    description: f.description,
    url: `${BASE_URL}/formations`,
    inLanguage: 'fr',
    timeRequired: durationToISO(f.duration),
    educationalLevel: levelToSchema(f.level),
    courseMode: 'online',
    teaches: f.topics.join(', '),
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Digital Campus Dz',
      url: BASE_URL,
    },
    offers: {
      '@type': 'Offer',
      category: 'Paid',
      priceCurrency: 'DZD',
      availability: 'https://schema.org/InStock',
      url: `${BASE_URL}/inscription`,
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: `P${f.program.length}W`,
      instructor: {
        '@type': 'Organization',
        name: 'Digital Campus Dz',
      },
    },
  }))

  const schema = {
    '@context': 'https://schema.org',
    '@graph': courseList,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
