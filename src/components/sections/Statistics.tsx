import Container from '../ui/Container'
import Counter from '../Counter'

export default function Statistics() {
  return (
    <section className="bg-primary-600 py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <Counter end={15} suffix="+" label="Anos no mercado" />
          <Counter end={2000} suffix="+" label="Imóveis vendidos" />
          <Counter end={5000} suffix="+" label="Clientes atendidos" />
          <Counter end={98} suffix="%" label="Satisfação dos clientes" />
        </div>
      </Container>
    </section>
  )
}
