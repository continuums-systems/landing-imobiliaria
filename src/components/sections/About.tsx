import { motion } from 'framer-motion'
import { BsAward, BsPeople, BsBuilding, BsShieldCheck } from 'react-icons/bs'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'

const highlights = [
  { icon: BsAward, text: '15+ anos de expertise' },
  { icon: BsPeople, text: 'Equipe multidisciplinar' },
  { icon: BsBuilding, text: 'Portfólio exclusivo' },
  { icon: BsShieldCheck, text: 'Transparência total' },
]

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              subtitle="Quem Somos"
              title="Sua jornada imobiliária começa aqui"
              description=""
              align="left"
            />
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                Fundada em 2010, a <strong className="text-gray-900">Imobs Imobiliaria</strong> nasceu da visão de transformar o mercado imobiliário brasileiro com um atendimento que une sofisticação, transparência e resultados.
              </p>
              <p className="leading-relaxed">
                Ao longo de mais de uma década, construímos uma sólida reputação baseada na confiança de centenas de famílias e investidores que encontraram conosco o imóvel ideal ou o parceiro certo para vender seu patrimônio.
              </p>
              <p className="leading-relaxed">
                Nossa equipe é formada por consultores especializados, advogados, analistas de mercado e profissionais de marketing que trabalham em sinergia para oferecer uma experiência completa e sem atritos.
              </p>
              <p className="leading-relaxed">
                Mais do que uma imobiliária, somos curadores de sonhos. Cada imóvel do nosso portfólio é avaliado criteriosamente para garantir que atenda aos mais altos padrões de qualidade, localização e valorização.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col items-center gap-2 rounded-xl bg-beige-50 p-4 text-center"
                >
                  <item.icon className="h-6 w-6 text-primary-600" />
                  <span className="text-xs font-medium text-gray-700">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=85"
                alt="Equipe de corretores da Imobs Imobiliaria em reunião"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-primary-600 p-6 shadow-xl max-sm:hidden">
              <p className="max-w-48 font-display text-lg font-semibold text-white">
                +15 anos transformando sonhos em endereços
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
