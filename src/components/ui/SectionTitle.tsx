interface SectionTitleProps {
  subtitle?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionTitle({ subtitle, title, description, align = 'center', light = false }: SectionTitleProps) {
  return (
    <div className={`mb-12 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}>
      {subtitle && (
        <span className={`mb-3 inline-block text-sm font-semibold uppercase tracking-widest ${light ? 'text-beige-300' : 'text-primary-600'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`font-display text-3xl leading-tight sm:text-4xl lg:text-5xl ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-beige-200' : 'text-gray-600'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
