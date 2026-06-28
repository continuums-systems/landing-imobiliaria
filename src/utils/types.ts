export interface Property {
  id: number
  title: string
  type: 'Casa' | 'Apartamento' | 'Terreno' | 'Comercial'
  purpose: 'Comprar' | 'Alugar'
  location: string
  price: string
  bedrooms: number
  bathrooms: number
  area: string
  image: string
  featured?: boolean
}

export interface Testimonial {
  id: number
  name: string
  city: string
  photo: string
  rating: number
  text: string
}

export interface Service {
  icon: string
  title: string
  description: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface Benefit {
  icon: string
  title: string
  description: string
}

export interface Neighborhood {
  name: string
  description: string
  image: string
  properties: number
}
