import { motion } from 'framer-motion'
import { BsGeoAlt, BsDoorOpen, BsDroplet, BsRulers } from 'react-icons/bs'
import type { Property } from '../utils/types'
import Button from './ui/Button'
import Card from './ui/Card'

interface PropertyCardProps {
  property: Property
  index: number
}

export default function PropertyCard({ property, index }: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group">
        <div className="relative h-56 overflow-hidden sm:h-64">
          <img
            src={property.image}
            alt={property.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          {property.featured && (
            <span className="absolute left-4 top-4 rounded-lg bg-gold-400 px-3 py-1 text-xs font-semibold text-white">
              Destaque
            </span>
          )}
          <span className="absolute bottom-4 left-4 rounded-lg bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800 backdrop-blur-sm">
            {property.purpose}
          </span>
        </div>
        <div className="p-6">
          <h3 className="font-display text-xl font-semibold text-gray-900">{property.title}</h3>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-gray-500">
            <BsGeoAlt className="h-3.5 w-3.5 shrink-0" />
            {property.location}
          </p>
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
            {property.bedrooms > 0 && (
              <span className="flex items-center gap-1">
                <BsDoorOpen className="h-4 w-4" /> {property.bedrooms} quartos
              </span>
            )}
            {property.bathrooms > 0 && (
              <span className="flex items-center gap-1">
                <BsDroplet className="h-4 w-4" /> {property.bathrooms} suítes
              </span>
            )}
            <span className="flex items-center gap-1">
              <BsRulers className="h-4 w-4" /> {property.area}
            </span>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
            <span className="font-display text-xl font-bold text-primary-600">{property.price}</span>
            <Button variant="ghost" size="sm">
              Ver detalhes
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
