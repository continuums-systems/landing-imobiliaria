import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BsList, BsX } from 'react-icons/bs'
import Button from '../ui/Button'

const links = [
  { label: 'Início', href: '#hero' },
  { label: 'Imóveis', href: '#properties' },
  { label: 'Sobre Nós', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Contato', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Navegação principal">
        <a href="#hero" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600">
            <svg className="h-5 w-5 text-white" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 20L20 45v35h20V55h20v25h20V45Z" />
            </svg>
          </div>
          <span className={`font-display text-xl font-bold transition-colors ${scrolled ? 'text-primary-600' : 'text-white'}`}>
            Imobs
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                scrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button variant="secondary" size="sm">
            Encontrar meu imóvel
          </Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden ${scrolled ? 'text-gray-700' : 'text-white'}`}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          {open ? <BsX className="h-6 w-6" /> : <BsList className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-white shadow-lg lg:hidden"
          >
            <div className="flex flex-col gap-2 px-4 pb-6 pt-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-600"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 px-4">
                <Button variant="secondary" size="sm" className="w-full">
                  Encontrar meu imóvel
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
