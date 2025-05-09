# Diretório de CSS

Este diretório contém todos os estilos do site do GEPCET.

## Estrutura

```
📁 css/
├── 📁 base/           # Estilos base
│   ├── 📄 reset.css  # Reset CSS
│   ├── 📄 vars.css   # Variáveis CSS
│   └── 📄 typo.css   # Tipografia
│
├── 📁 components/     # Estilos de componentes
│   ├── 📄 header.css # Estilos do header
│   ├── 📄 footer.css # Estilos do footer
│   └── 📄 menu.css   # Estilos do menu
│
├── 📁 layouts/        # Layouts
│   ├── 📄 grid.css   # Sistema de grid
│   └── 📄 page.css   # Layouts de página
│
├── 📁 utils/          # Utilitários
│   ├── 📄 flex.css   # Classes flexbox
│   └── 📄 spacing.css # Espaçamentos
│
├── 📄 style.css       # Arquivo principal
└── 📄 README.md       # Este arquivo
```

## Base

### Reset (reset.css)
- Normalização
- Reset de estilos
- Box-sizing

### Variáveis (vars.css)
- Cores
- Fontes
- Breakpoints
- Espaçamentos

### Tipografia (typo.css)
- Fontes
- Tamanhos
- Pesos
- Espaçamentos

## Componentes

### Header (header.css)
- Logo
- Menu
- Navegação
- Responsividade

### Footer (footer.css)
- Links
- Contatos
- Redes sociais
- Copyright

### Menu (menu.css)
- Menu mobile
- Overlay
- Animações
- Responsividade

## Layouts

### Grid (grid.css)
- Sistema de grid
- Containers
- Colunas
- Responsividade

### Page (page.css)
- Layouts de página
- Seções
- Espaçamentos
- Responsividade

## Utilitários

### Flex (flex.css)
- Classes flexbox
- Alinhamentos
- Distribuição
- Responsividade

### Spacing (spacing.css)
- Margens
- Paddings
- Gaps
- Responsividade

## Metodologia

### BEM
```css
.block {}
.block__element {}
.block--modifier {}
```

### Exemplo
```css
.header {}
.header__logo {}
.header__nav {}
.header__menu {}
.header__menu--active {}
```

## Boas Práticas

1. Use BEM
2. Mantenha especificidade baixa
3. Evite !important
4. Use variáveis CSS
5. Organize por componentes
6. Documente classes
7. Mantenha responsividade
8. Otimize performance

## Implementação

### Carregamento
```html
<link rel="stylesheet" href="assets/css/base/reset.css">
<link rel="stylesheet" href="assets/css/base/vars.css">
<link rel="stylesheet" href="assets/css/base/typo.css">
<link rel="stylesheet" href="assets/css/utils/flex.css">
<link rel="stylesheet" href="assets/css/utils/spacing.css">
<link rel="stylesheet" href="assets/css/layouts/grid.css">
<link rel="stylesheet" href="assets/css/layouts/page.css">
<link rel="stylesheet" href="assets/css/components/header.css">
<link rel="stylesheet" href="assets/css/components/footer.css">
<link rel="stylesheet" href="assets/css/components/menu.css">
<link rel="stylesheet" href="assets/css/style.css">
```

## Performance

### Otimizações
- Minificação
- PurgeCSS
- Critical CSS
- Lazy loading
- Cache

## Manutenção

### Checklist
1. Verificar especificidade
2. Remover código não usado
3. Otimizar seletores
4. Atualizar documentação
5. Testar responsividade 