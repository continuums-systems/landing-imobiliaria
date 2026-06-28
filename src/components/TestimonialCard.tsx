import { motion } from 'framer-motion'
import { BsStar, BsStarHalf, BsQuote } from 'react-icons/bs'
import type { Testimonial } from '../utils/types'

interface TestimonialCardProps {
  testimonial: Testimonial
  index: number
}

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating)
  const half = rating % 1 !== 0
  return (
    <div className="flex items-center gap-0.5 text-gold-400">
      {Array.from({ length: full }, (_, i) => (
        <BsStar key={i} className="h-4 w-4 fill-current" />
      ))}
      {half && <BsStarHalf className="h-4 w-4 fill-current" />}
    </div>
  )
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="rounded-2xl bg-white p-8 shadow-lg"
    >
      <BsQuote className="mb-4 h-8 w-8 text-primary-100" />
      <p className="mb-6 leading-relaxed text-gray-600">"{testimonial.text}"</p>
      <Stars rating={testimonial.rating} />
      <div className="mt-4 flex items-center gap-4">
        <img
          src={testimonial.photo}
          alt={testimonial.name}
          loading="lazy"
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-gray-900">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.city}</p>
        </div>
      </div>
    </motion.div>
  )
}
