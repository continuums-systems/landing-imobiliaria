import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import PropertyCard from '../PropertyCard'
import { properties } from '../../utils/data'

export default function FeaturedProperties() {
  const featured = properties.filter((p) => p.featured)

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionTitle
          subtitle="Seleção Especial"
          title="Imóveis em Destaque"
          description="Propriedades selecionadas a dedo para quem busca o melhor em sofisticação e conforto."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((property, i) => (
            <PropertyCard key={property.id} property={property} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
