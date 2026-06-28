import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import FeatureCard from '../FeatureCard'
import { benefits } from '../../utils/data'

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionTitle
          subtitle="Por Que Nos Escolher"
          title="Sua melhor escolha no mercado imobiliário"
          description="Entregamos excelência em cada detalhe para garantir a melhor experiência na compra ou venda do seu imóvel."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <FeatureCard key={i} benefit={benefit} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
