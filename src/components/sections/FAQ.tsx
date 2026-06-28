import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Accordion from '../ui/Accordion'
import { faqItems } from '../../utils/data'

export default function FAQ() {
  return (
    <section className="bg-beige-50 py-20 sm:py-28">
      <Container>
        <SectionTitle
          subtitle="FAQ"
          title="Perguntas Frequentes"
          description="Tire suas principais dúvidas sobre nossos serviços e o mercado imobiliário."
        />
        <div className="mx-auto max-w-3xl">
          <Accordion items={faqItems} />
        </div>
      </Container>
    </section>
  )
}
