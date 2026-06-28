import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface CounterProps {
  end: number
  suffix?: string
  prefix?: string
  label: string
  decimals?: number
}

export default function Counter({ end, suffix = '', prefix = '', label, decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = Math.max(1, Math.floor(end / (duration / 16)))
    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, end])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="font-display text-4xl font-bold text-white sm:text-5xl">
        {prefix}{count.toFixed(decimals)}{suffix}
      </div>
      <p className="mt-2 text-sm text-beige-200 sm:text-base">{label}</p>
    </motion.div>
  )
}
