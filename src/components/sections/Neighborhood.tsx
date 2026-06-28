import { motion } from 'framer-motion'
import { BsGeoAlt } from 'react-icons/bs'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import { neighborhoods } from '../../utils/data'

export default function Neighborhood() {
  return (
    <section className="bg-beige-50 py-20 sm:py-28">
      <Container>
        <SectionTitle
          subtitle="Regiões"
          title="Bairros e regiões que atendemos"
          description="Conheça as regiões onde concentramos nossos melhores imóveis."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {neighborhoods.map((n, i) => (
            <motion.div
              key={n.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={n.image}
                  alt={n.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 p-6 text-white">
                <div className="mb-1 flex items-center gap-1.5 text-sm text-beige-300">
                  <BsGeoAlt className="h-3.5 w-3.5" />
                  <span>{n.properties} imóveis disponíveis</span>
                </div>
                <h3 className="font-display text-2xl font-semibold">{n.name}</h3>
                <p className="mt-1 text-sm text-gray-200">{n.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
