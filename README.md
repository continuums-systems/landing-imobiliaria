# Imobs Imobiliaria

Landing page premium para uma imobiliária fictícia, desenvolvida como parte do portfólio do Continuums.

## Tecnologias

- React 19 + TypeScript
- Vite
- Tailwind CSS 3
- Framer Motion
- React Icons
- react-helmet-async (metadados e SEO)

## Seções

- Hero com busca integrada
- Imóveis em destaque com filtros (tipo/finalidade)
- Sobre Nós
- Serviços
- Diferenciais
- Contadores animados
- Bairros e regiões
- Depoimentos
- FAQ (8 perguntas)
- Contato com formulário e canais
- Footer completo

## Como rodar

```bash
npm install --legacy-peer-deps
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
  components/
    ui/          # Componentes reutilizáveis
    sections/    # Seções da landing page
  hooks/         # Custom hooks
  utils/         # Dados, tipos, SEO
```

## Design

- Cores: verde escuro, bege, dourado, cinza escuro
- Fonte: Inter (corpo) + Playfair Display (títulos)
- Fully responsive (mobile-first)
- Animações suaves com Framer Motion
- SEO completo (JSON-LD, OG, Twitter Cards)
