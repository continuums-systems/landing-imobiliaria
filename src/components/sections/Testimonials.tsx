import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import TestimonialCard from '../TestimonialCard'
import { testimonials } from '../../utils/data'

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionTitle
          subtitle="Depoimentos"
          title="O que nossos clientes dizem"
          description="A satisfação dos nossos clientes é o nosso maior patrimônio."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
