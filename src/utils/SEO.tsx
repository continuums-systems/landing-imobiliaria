import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
}

export default function SEO({ title, description, canonical }: SEOProps) {
  const siteName = 'Imobs Imobiliaria'
  const fullTitle = title ? `${title} | ${siteName}` : siteName
  const desc = description || 'Imobiliária de luxo especializada em compra, venda e aluguel de imóveis residenciais e comerciais em São Paulo.'
  const url = canonical || 'https://imobs.com.br'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="pt_BR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />

      <meta name="robots" content="index, follow" />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'RealEstateAgent',
          name: siteName,
          description: desc,
          url,
          areaServed: 'São Paulo, Brasil',
          priceRange: 'R$ 500.000 - R$ 15.000.000',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Alameda dos Sonhos, 500',
            addressLocality: 'São Paulo',
            addressRegion: 'SP',
            postalCode: '01000-000',
            addressCountry: 'BR',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+55-11-3500-1234',
            contactType: 'customer service',
            areaServed: 'BR',
            availableLanguage: ['Portuguese'],
          },
          sameAs: [
            'https://instagram.com/imobs',
            'https://facebook.com/imobs',
            'https://linkedin.com/company/imobs',
          ],
        })}
      </script>
    </Helmet>
  )
}
