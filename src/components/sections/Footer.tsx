import { BsInstagram, BsFacebook, BsLinkedin, BsYoutube, BsWhatsapp } from 'react-icons/bs'
import Container from '../ui/Container'

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Imóveis', href: '#properties' },
  { label: 'Sobre Nós', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Contato', href: '#contact' },
]

const socialLinks = [
  { icon: BsInstagram, href: '#', label: 'Instagram' },
  { icon: BsFacebook, href: '#', label: 'Facebook' },
  { icon: BsLinkedin, href: '#', label: 'LinkedIn' },
  { icon: BsYoutube, href: '#', label: 'YouTube' },
  { icon: BsWhatsapp, href: '#', label: 'WhatsApp' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="border-b border-gray-800">
        <Container className="py-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                  <svg className="h-6 w-6 text-white" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 20L20 45v35h20V55h20v25h20V45Z" />
                  </svg>
                </div>
                <span className="font-display text-xl font-bold text-white">Imobs</span>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                Referência em imóveis de luxo. Sua jornada imobiliária com excelência, segurança e atendimento personalizado.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-white">Navegação</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm transition-colors hover:text-gold-400">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-white">Contato</h4>
              <ul className="space-y-2 text-sm">
                <li>(11) 3500-1234</li>
                <li>contato@imobs.com.br</li>
                <li className="leading-relaxed">
                  Alameda dos Sonhos, 500<br />
                  Jardins, São Paulo - SP
                </li>
                <li>Seg-Sex: 9h às 19h | Sáb: 9h às 13h</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-white">Redes Sociais</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-800 text-gray-400 transition-colors hover:bg-primary-600 hover:text-white"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-6">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Imobs Imobiliaria. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-gray-300">Política de Privacidade</a>
            <a href="#" className="transition-colors hover:text-gray-300">Termos de Uso</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
