import type { Property, Testimonial, Service, FAQItem, Benefit, Neighborhood } from './types'

export const properties: Property[] = [
  {
    id: 1,
    title: 'Cobertura Exclusiva com Vista Panorâmica',
    type: 'Apartamento',
    purpose: 'Comprar',
    location: 'Condomínio Park Avenue, Jardins, São Paulo',
    price: 'R$ 4.850.000',
    bedrooms: 4,
    bathrooms: 5,
    area: '340 m²',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    featured: true,
  },
  {
    id: 2,
    title: 'Mansão Contemporânea com Piscina Olímpica',
    type: 'Casa',
    purpose: 'Comprar',
    location: 'Alphaville, Barueri',
    price: 'R$ 8.200.000',
    bedrooms: 6,
    bathrooms: 7,
    area: '780 m²',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    featured: true,
  },
  {
    id: 3,
    title: 'Apartamento Penthouse com Terraço Gourmet',
    type: 'Apartamento',
    purpose: 'Comprar',
    location: 'Itaim Bibi, São Paulo',
    price: 'R$ 6.350.000',
    bedrooms: 5,
    bathrooms: 5,
    area: '420 m²',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
    featured: true,
  },
  {
    id: 4,
    title: 'Sala Comercial Premium com Acabamento Luxo',
    type: 'Comercial',
    purpose: 'Alugar',
    location: 'Faria Lima, São Paulo',
    price: 'R$ 28.000/mês',
    bedrooms: 0,
    bathrooms: 3,
    area: '250 m²',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    featured: true,
  },
  {
    id: 5,
    title: 'Casa Moderna com Design Sustentável',
    type: 'Casa',
    purpose: 'Comprar',
    location: 'Vila Madalena, São Paulo',
    price: 'R$ 3.950.000',
    bedrooms: 4,
    bathrooms: 4,
    area: '450 m²',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
  {
    id: 6,
    title: 'Terreno com Vista para o Mar',
    type: 'Terreno',
    purpose: 'Comprar',
    location: 'Guarujá, Litoral Paulista',
    price: 'R$ 2.100.000',
    bedrooms: 0,
    bathrooms: 0,
    area: '1.200 m²',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ana Beatriz Oliveira',
    city: 'Jardins, São Paulo',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
    rating: 5,
    text: 'A equipe da Imobs foi excepcional na venda do nosso apartamento. Desde a avaliação até a assinatura do contrato, tudo foi conduzido com profissionalismo e transparência. Superaram todas as nossas expectativas.',
  },
  {
    id: 2,
    name: 'Ricardo Almeida Mendes',
    city: 'Alphaville, Barueri',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
    rating: 5,
    text: 'Adquiri minha casa dos sonhos através da Imobs. O consultor Marcos nos acompanhou em cada visita e nos deu toda a segurança necessária para tomar a melhor decisão. Recomendo de olhos fechados.',
  },
  {
    id: 3,
    name: 'Juliana Costa e Silva',
    city: 'Itaim Bibi, São Paulo',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    rating: 5,
    text: 'Profissionais incríveis! Me ajudaram a encontrar o imóvel perfeito para minha família, respeitando nosso orçamento e necessidades. O suporte pós-compra também foi impecável.',
  },
  {
    id: 4,
    name: 'Fernando Henrique Barbosa',
    city: 'Moema, São Paulo',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
    rating: 4,
    text: 'Ótima experiência na venda do meu apartamento. Avaliação precisa, divulgação profissional e negociação ágil. Vender meu imóvel foi muito mais tranquilo do que imaginei.',
  },
]

export const services: Service[] = [
  {
    icon: 'BsHouseHeart',
    title: 'Compra de Imóveis',
    description: 'Encontramos o imóvel ideal para você com assessoria completa em todas as etapas da negociação.',
  },
  {
    icon: 'BsCashCoin',
    title: 'Venda de Imóveis',
    description: 'Maximizamos o valor do seu imóvel com estratégias de marketing e negociação profissional.',
  },
  {
    icon: 'BsClipboardCheck',
    title: 'Consultoria Imobiliária',
    description: 'Análise de mercado, viabilidade de investimentos e orientação especializada para suas decisões.',
  },
  {
    icon: 'BsGraphUpArrow',
    title: 'Avaliação de Imóveis',
    description: 'Avaliação precisa e detalhada do seu imóvel com base em metodologias atualizadas de mercado.',
  },
  {
    icon: 'BsBank',
    title: 'Financiamento',
    description: 'Facilitamos todo o processo de financiamento imobiliário com as melhores condições do mercado.',
  },
  {
    icon: 'BsPieChart',
    title: 'Investimentos Imobiliários',
    description: 'Identificamos oportunidades de investimento com alto potencial de valorização e rentabilidade.',
  },
]

export const faqItems: FAQItem[] = [
  {
    question: 'Como funciona a compra de um imóvel pela Imobs?',
    answer: 'Nosso processo é simples e transparente: iniciamos com uma consulta gratuita para entender suas necessidades, apresentamos opções personalizadas, acompanhamos as visitas e oferecemos suporte completo na negociação, documentação e financiamento até a entrega das chaves.',
  },
  {
    question: 'Vocês auxiliam no financiamento imobiliário?',
    answer: 'Sim! Trabalhamos com as principais instituições financeiras do país e auxiliamos nossos clientes em todo o processo de financiamento, desde a simulação até a aprovação do crédito, garantindo as melhores taxas e condições.',
  },
  {
    question: 'Posso anunciar meu imóvel com a Imobs?',
    answer: 'Com certeza. Oferecemos um plano completo de divulgação que inclui fotografia profissional, tour virtual, anúncios em portais especializados, redes sociais e nossa base de clientes qualificados.',
  },
  {
    question: 'Quais documentos são necessários para comprar um imóvel?',
    answer: 'Os documentos básicos incluem RG, CPF, comprovante de residência, comprovante de renda e declaração de imposto de renda. Para imóveis em condomínio, também solicitamos a certidão de ônus reais e documentos do imóvel.',
  },
  {
    question: 'Como funciona a avaliação do meu imóvel?',
    answer: 'Nossa avaliação considera localização, metragem, estado de conservação, padrão de acabamento, valor de mercado da região e comparativos de vendas recentes. O laudo é detalhado e gratuito.',
  },
  {
    question: 'Quanto tempo leva para vender um imóvel?',
    answer: 'O prazo médio varia de 3 a 6 meses, dependendo da localização, preço e condições do mercado. Com nossa estratégia de marketing e precificação correta, conseguimos acelerar significativamente esse processo.',
  },
  {
    question: 'Vocês atendem em toda a região metropolitana?',
    answer: 'Sim! Atuamos em São Paulo capital, Grande São Paulo, Alphaville, litoral paulista e regiões nobres do interior. Cada região conta com consultores especializados e conhecimento aprofundado do mercado local.',
  },
  {
    question: 'Quais são as taxas de corretagem?',
    answer: 'Nossas taxas seguem o mercado e são transparentes, sem surpresas. A comissão de corretagem é definida no contrato de prestação de serviços e só é devida mediante a conclusão do negócio.',
  },
]

export const benefits: Benefit[] = [
  {
    icon: 'BsPersonCheck',
    title: 'Atendimento Personalizado',
    description: 'Cada cliente recebe um consultor dedicado que acompanha toda a jornada de perto.',
  },
  {
    icon: 'BsStar',
    title: 'Imóveis Selecionados',
    description: 'Curadoria rigorosa com apenas propriedades que atendem nossos padrões de qualidade.',
  },
  {
    icon: 'BsAward',
    title: 'Consultores Especializados',
    description: 'Equipe com certificações e profundo conhecimento do mercado imobiliário premium.',
  },
  {
    icon: 'BsShieldCheck',
    title: 'Segurança na Negociação',
    description: 'Due diligence completa em todas as transações para sua tranquilidade.',
  },
  {
    icon: 'BsHeadset',
    title: 'Suporte Completo',
    description: 'Acompanhamento antes, durante e depois da compra ou venda do seu imóvel.',
  },
]

export const neighborhoods: Neighborhood[] = [
  {
    name: 'Jardins',
    description: 'Um dos bairros mais nobres de São Paulo, com excelente infraestrutura, comércio de luxo e áreas verdes.',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80',
    properties: 48,
  },
  {
    name: 'Itaim Bibi',
    description: 'Bairro sofisticado que combina residências de alto padrão com os melhores restaurantes e centros empresariais.',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80',
    properties: 36,
  },
  {
    name: 'Alphaville',
    description: 'Condomínio de luxo em Barueri com mansões, segurança 24h e completa infraestrutura de lazer.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    properties: 52,
  },
  {
    name: 'Vila Nova Conceição',
    description: 'Bairro premium com ruas arborizadas, próximo ao Parque do Ibirapuera e com imóveis de altíssimo padrão.',
    image: 'https://images.unsplash.com/photo-1448630360428-65456585c7d2?w=600&q=80',
    properties: 29,
  },
]
