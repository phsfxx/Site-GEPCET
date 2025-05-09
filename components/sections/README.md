# Seções do Site GEPCET

Este diretório contém as seções reutilizáveis do site do GEPCET.

## Estrutura

```
📁 sections/
├── 📁 header/          # Seções do cabeçalho
│   ├── 📄 hero.html    # Seção hero
│   └── 📄 nav.html     # Navegação
│
├── 📁 home/            # Seções da página inicial
│   ├── 📄 intro.html   # Seção de introdução
│   ├── 📄 projects.html # Projetos em destaque
│   └── 📄 social.html  # Redes sociais
│
├── 📁 about/           # Seções da página sobre
│   ├── 📄 mission.html # Missão e valores
│   ├── 📄 team.html    # Equipe
│   └── 📄 history.html # História
│
├── 📁 projects/        # Seções da página de projetos
│   ├── 📄 list.html    # Lista de projetos
│   └── 📄 card.html    # Card de projeto
│
├── 📁 materials/       # Seções da página de materiais
│   ├── 📄 list.html    # Lista de materiais
│   └── 📄 card.html    # Card de material
│
└── 📄 README.md        # Este arquivo
```

## Seções da Página Inicial

### Hero (hero.html)
```html
<section class="hero">
    <div class="container">
        <h2><i class="fas fa-flask"></i> Bem-vindo ao GEPCET</h2>
        <p>Grupo de Estudos e Pesquisas em Ciência, Educação e Tecnologia</p>
    </div>
</section>
```

### Introdução (intro.html)
```html
<section class="intro-section">
    <div class="container">
        <div class="intro-content">
            <h2><i class="fas fa-graduation-cap"></i> Nossa Missão</h2>
            <p>O GEPCET é dedicado ao desenvolvimento de pesquisas e estudos...</p>
            <a href="sobre.html" class="cta-button">
                <i class="fas fa-arrow-right"></i>
                Conheça Nossa História
            </a>
        </div>
    </div>
</section>
```

### Projetos em Destaque (projects.html)
```html
<section class="featured-projects">
    <div class="container">
        <h2><i class="fas fa-project-diagram"></i> Projetos em Destaque</h2>
        <div class="projects-grid">
            <!-- Cards de projeto -->
        </div>
    </div>
</section>
```

### Redes Sociais (social.html)
```html
<section class="social-section">
    <div class="container">
        <h2>Conecte-se Conosco</h2>
        <div class="social-grid">
            <!-- Cards de redes sociais -->
        </div>
    </div>
</section>
```

## Boas Práticas

1. Mantenha as seções modulares
2. Use classes BEM
3. Documente props e eventos
4. Mantenha acessibilidade
5. Siga o padrão de nomenclatura
6. Teste em diferentes dispositivos
7. Mantenha responsividade
8. Otimize performance

## Implementação

### Inclusão de Seção
```html
<div id="section-container"></div>
<script src="assets/js/sections/section.js"></script>
```

## Acessibilidade

### ARIA Labels
```html
<section aria-label="Seção de introdução">
<nav aria-label="Menu de navegação">
```

### Roles
```html
<main role="main">
<article role="article">
<aside role="complementary">
```

## Responsividade

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Performance

### Otimizações
- Lazy loading de imagens
- Minificação de HTML
- Compressão de assets
- Cache de seções

## Manutenção

### Checklist
1. Verificar links
2. Testar responsividade
3. Validar acessibilidade
4. Atualizar conteúdo
5. Otimizar performance
6. Revisar código
7. Atualizar documentação 