import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BsFunnel, BsGrid, BsListUl } from 'react-icons/bs'
import Container from '../ui/Container'
import PropertyCard from '../PropertyCard'
import { properties } from '../../utils/data'
import type { Property } from '../../utils/types'

type ViewMode = 'grid' | 'list'

export default function PropertySearch() {
  const [activeType, setActiveType] = useState<string>('todos')
  const [activePurpose, setActivePurpose] = useState<string>('todos')
  const [view, setView] = useState<ViewMode>('grid')

  const types = ['todos', 'Casa', 'Apartamento', 'Terreno', 'Comercial']
  const purposes = [
    { value: 'todos', label: 'Todos' },
    { value: 'Comprar', label: 'Comprar' },
    { value: 'Alugar', label: 'Alugar' },
  ]

  const filtered = properties.filter((p) => {
    if (activeType !== 'todos' && p.type !== activeType) return false
    if (activePurpose !== 'todos' && p.purpose !== activePurpose) return false
    return true
  })

  return (
    <section id="properties" className="bg-beige-50 py-20 sm:py-28">
      <Container>
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-primary-600">
              Imóveis em Destaque
            </span>
            <h2 className="font-display text-3xl text-gray-900 sm:text-4xl">
              Propriedades Selecionadas
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setView('grid')}
              className={`rounded-lg p-2 transition-colors ${view === 'grid' ? 'bg-primary-600 text-white' : 'text-gray-400 hover:text-gray-600'}`}
              aria-label="Visualização em grade"
            >
              <BsGrid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setView('list')}
              className={`rounded-lg p-2 transition-colors ${view === 'list' ? 'bg-primary-600 text-white' : 'text-gray-400 hover:text-gray-600'}`}
              aria-label="Visualização em lista"
            >
              <BsListUl className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mb-10 flex flex-wrap items-center gap-3">
          <BsFunnel className="h-4 w-4 text-gray-400" />
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                activeType === type
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {type === 'todos' ? 'Todos' : type}
            </button>
          ))}
          <span className="mx-2 h-5 w-px bg-gray-200" />
          {purposes.map((p) => (
            <button
              key={p.value}
              onClick={() => setActivePurpose(p.value)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                activePurpose === p.value
                  ? 'bg-gold-400 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeType + activePurpose + view}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={
              view === 'grid'
                ? 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3'
                : 'flex flex-col gap-6'
            }
          >
            {filtered.length > 0 ? (
              filtered.map((property: Property, i: number) => (
                <PropertyCard key={property.id} property={property} index={i} />
              ))
            ) : (
              <p className="col-span-full py-12 text-center text-gray-500">
                Nenhum imóvel encontrado com os filtros selecionados.
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  )
}
