import { motion } from 'framer-motion'
import { BsSearch, BsWhatsapp } from 'react-icons/bs'
import Button from '../ui/Button'
import Select from '../ui/Select'

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85"
          alt="Vista aérea de uma mansão luxuosa com piscina e jardins"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm"
          >
            Imobiliária de Excelência desde 2010
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Encontre o imóvel ideal para o{' '}
            <span className="text-gold-400">seu novo capítulo</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-gray-200"
          >
            Há mais de 15 anos transformando sonhos em endereços. Somos especialistas em imóveis de alto padrão, com atendimento personalizado e os melhores negócios do mercado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button variant="secondary" size="lg">
              <BsSearch className="h-5 w-5" /> Ver imóveis
            </Button>
            <Button variant="outline" size="lg">
              <BsWhatsapp className="h-5 w-5" /> Falar com especialista
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 rounded-2xl bg-white/95 p-6 shadow-2xl backdrop-blur-md sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Select
                options={[
                  { value: '', label: 'Comprar / Alugar' },
                  { value: 'comprar', label: 'Comprar' },
                  { value: 'alugar', label: 'Alugar' },
                ]}
              />
              <Select
                options={[
                  { value: '', label: 'Tipo de imóvel' },
                  { value: 'casa', label: 'Casa' },
                  { value: 'apartamento', label: 'Apartamento' },
                  { value: 'terreno', label: 'Terreno' },
                  { value: 'comercial', label: 'Comercial' },
                ]}
              />
              <Select
                options={[
                  { value: '', label: 'Localização' },
                  { value: 'sp', label: 'São Paulo' },
                  { value: 'alphaville', label: 'Alphaville' },
                  { value: 'litoral', label: 'Litoral Paulista' },
                  { value: 'interior', label: 'Interior' },
                ]}
              />
              <Select
                options={[
                  { value: '', label: 'Faixa de preço' },
                  { value: '1', label: 'Até R$ 1M' },
                  { value: '3', label: 'R$ 1M - R$ 3M' },
                  { value: '5', label: 'R$ 3M - R$ 5M' },
                  { value: '10', label: 'R$ 5M - R$ 10M' },
                  { value: '10+', label: 'Acima de R$ 10M' },
                ]}
              />
            </div>
            <Button variant="primary" size="md" className="mt-4 w-full sm:w-auto">
              <BsSearch className="h-4 w-4" /> Buscar imóveis
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
