import { motion } from 'framer-motion'
import { BsWhatsapp, BsTelephone, BsEnvelope, BsGeoAlt, BsClock } from 'react-icons/bs'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import Input from '../ui/Input'
import Select from '../ui/Select'

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionTitle
          subtitle="Contato"
          title="Vamos conversar?"
          description="Estamos prontos para atender você. Entre em contato por um dos canais abaixo."
        />
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-5 sm:grid-cols-2">
                <Input label="Nome" placeholder="Seu nome completo" required />
                <Input label="Email" type="email" placeholder="seu@email.com" required />
              </div>
              <Input label="Telefone" type="tel" placeholder="(11) 99999-9999" required />
              <Select
                label="Interesse"
                options={[
                  { value: '', label: 'Selecione...' },
                  { value: 'comprar', label: 'Comprar imóvel' },
                  { value: 'vender', label: 'Vender imóvel' },
                  { value: 'alugar', label: 'Alugar imóvel' },
                  { value: 'avaliar', label: 'Avaliar imóvel' },
                  { value: 'outro', label: 'Outro' },
                ]}
              />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">Mensagem</label>
                <textarea
                  rows={4}
                  placeholder="Como podemos ajudar você?"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm transition-all duration-200 placeholder:text-gray-400 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/10"
                />
              </div>
              <Button variant="primary" size="lg" type="submit" className="w-full sm:w-auto">
                Enviar mensagem
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <a
              href="https://wa.me/551135001234"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-green-50 p-5 transition-colors hover:bg-green-100"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600 text-white">
                <BsWhatsapp className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">WhatsApp</p>
                <p className="text-sm text-gray-600">(11) 3500-1234</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl bg-primary-50 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white">
                <BsTelephone className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Telefone</p>
                <p className="text-sm text-gray-600">(11) 3500-1234</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-beige-50 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400 text-white">
                <BsEnvelope className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">E-mail</p>
                <p className="text-sm text-gray-600">contato@imobs.com.br</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-beige-50 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-700 text-white">
                <BsGeoAlt className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Endereço</p>
                <p className="text-sm text-gray-600">Alameda dos Sonhos, 500 - Jardins, São Paulo</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-beige-50 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white">
                <BsClock className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Horários</p>
                <p className="text-sm text-gray-600">Seg-Sex: 9h às 19h | Sáb: 9h às 13h</p>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl bg-gray-200">
              <div className="flex h-48 items-center justify-center bg-gray-100 text-sm text-gray-400">
                <BsGeoAlt className="mr-2 h-5 w-5" /> Mapa interativo
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
