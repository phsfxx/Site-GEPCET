# Diretório de Componentes

Este diretório contém os componentes reutilizáveis do site do GEPCET.

## Estrutura

```
📁 components/
├── 📄 header.html      # Cabeçalho
├── 📄 footer.html      # Rodapé
└── 📄 README.md        # Este arquivo
```

## Componentes Disponíveis

### Header (header.html)
- Logo e nome do GEPCET
- Menu de navegação
- Botão de menu mobile
- Overlay do menu

### Footer (footer.html)
- Logo e informações do GEPCET
- Links de navegação
- Informações de contato
- Redes sociais
- Copyright

## Boas Práticas

1. Mantenha os componentes modulares
2. Use classes BEM para estilização
3. Documente props e eventos
4. Mantenha acessibilidade
5. Siga o padrão de nomenclatura
6. Teste em diferentes dispositivos
7. Mantenha responsividade
8. Otimize performance

## Implementação

### Inclusão do Header
```html
<div id="header-container"></div>
<script src="assets/js/header.js"></script>
```

### Inclusão do Footer
```html
<div id="footer-container"></div>
<script src="assets/js/footer.js"></script>
```

## Estilização

### Classes BEM
```css
.header__logo {}
.header__nav {}
.header__menu-toggle {}
.footer__brand {}
.footer__links {}
.footer__social {}
```

## Acessibilidade

### ARIA Labels
```html
<nav aria-label="Menu principal">
<button aria-expanded="false" aria-controls="main-nav">
```

### Roles
```html
<header role="banner">
<footer role="contentinfo">
<nav role="navigation">
```

## Responsividade

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Media Queries
```css
@media (max-width: 768px) {
    .header__nav {
        display: none;
    }
}
```

## Performance

### Otimizações
- Lazy loading de imagens
- Minificação de CSS/JS
- Compressão de assets
- Cache de componentes

## Manutenção

### Checklist
1. Verificar links
2. Testar responsividade
3. Validar acessibilidade
4. Atualizar conteúdo
5. Otimizar performance
6. Revisar código
7. Atualizar documentação 