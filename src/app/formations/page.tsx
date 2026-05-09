import { formations } from '@/data/formations'
import CourseCard from '@/components/formations/CourseCard'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Formations',
  description: 'Découvrez toutes nos formations en ligne : Python, Développement Web, Cybersécurité, Algorithmique et plus.',
}

export default function FormationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#34A853]/10 rounded-full text-[#34A853] text-sm font-semibold mb-6">
            📚 Nos formations
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Choisis ta formation
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Des parcours complets, du débutant à l&apos;avancé, dispensés en direct via Google Meet par des professeurs passionnés.
          </p>
        </div>
      </section>

      {/* Formations grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {formations.map((formation, i) => (
              <CourseCard key={formation.id} formation={formation} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
            Tu ne trouves pas ta formation ?
          </h2>
          <p className="text-gray-500 mb-6">Contacte-nous, on pourra peut-être adapter notre offre à tes besoins.</p>
          <Button href="/contact" color="blue">
            Nous contacter
          </Button>
        </div>
      </section>
    </>
  )
}
