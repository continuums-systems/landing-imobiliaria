import { motion } from 'framer-motion'
import { BsHouseHeart, BsCashCoin, BsClipboardCheck, BsGraphUpArrow, BsBank, BsPieChart } from 'react-icons/bs'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import { services } from '../../utils/data'

const iconMap: Record<string, React.ElementType> = {
  BsHouseHeart,
  BsCashCoin,
  BsClipboardCheck,
  BsGraphUpArrow,
  BsBank,
  BsPieChart,
}

export default function Services() {
  return (
    <section id="services" className="bg-beige-50 py-20 sm:py-28">
      <Container>
        <SectionTitle
          subtitle="Nossos Serviços"
          title="Soluções completas para você"
          description="Do primeiro contato à entrega das chaves, oferecemos tudo que você precisa para realizar seu negócio imobiliário."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                  {Icon && <Icon className="h-7 w-7" />}
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="leading-relaxed text-gray-600">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
