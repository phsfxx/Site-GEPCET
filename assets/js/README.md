# Diretório de JavaScript

Este diretório contém todos os scripts JavaScript do site do GEPCET.

## Estrutura

```
📁 js/
├── 📁 modules/         # Módulos principais
│   ├── 📄 menu.js     # Funcionalidades do menu
│   ├── 📄 layout.js   # Ajustes de layout
│   └── 📄 scroll.js   # Controle de scroll
│
├── 📁 components/      # Componentes JavaScript
│   ├── 📄 header.js   # Funcionalidades do header
│   └── 📄 footer.js   # Funcionalidades do footer
│
├── 📁 utils/          # Utilitários
│   ├── 📄 dom.js     # Manipulação do DOM
│   ├── 📄 events.js  # Gerenciamento de eventos
│   └── 📄 helpers.js # Funções auxiliares
│
├── 📄 main.js         # Arquivo principal
└── 📄 README.md       # Este arquivo
```

## Módulos

### Menu (menu.js)
- Controle do menu mobile
- Overlay do menu
- Navegação responsiva

### Layout (layout.js)
- Ajustes de layout
- Responsividade
- Grid system

### Scroll (scroll.js)
- Controle de scroll
- Animações no scroll
- Lazy loading

## Componentes

### Header (header.js)
- Funcionalidades do cabeçalho
- Menu de navegação
- Responsividade

### Footer (footer.js)
- Funcionalidades do rodapé
- Links e contatos
- Redes sociais

## Utilitários

### DOM (dom.js)
- Seletores
- Manipulação de elementos
- Criação de elementos

### Events (events.js)
- Gerenciamento de eventos
- Event delegation
- Custom events

### Helpers (helpers.js)
- Funções auxiliares
- Formatação
- Validação

## Boas Práticas

1. Use ES6+ features
2. Mantenha funções puras
3. Documente funções
4. Use async/await
5. Trate erros
6. Otimize performance
7. Siga padrões de código
8. Teste suas funções

## Implementação

### Carregamento
```html
<script src="assets/js/utils/dom.js"></script>
<script src="assets/js/utils/events.js"></script>
<script src="assets/js/utils/helpers.js"></script>
<script src="assets/js/modules/menu.js"></script>
<script src="assets/js/modules/layout.js"></script>
<script src="assets/js/modules/scroll.js"></script>
<script src="assets/js/components/header.js"></script>
<script src="assets/js/components/footer.js"></script>
<script src="assets/js/main.js"></script>
```

## Performance

### Otimizações
- Minificação
- Bundle
- Lazy loading
- Code splitting
- Tree shaking

## Manutenção

### Checklist
1. Verificar dependências
2. Atualizar documentação
3. Testar funcionalidades
4. Otimizar código
5. Revisar performance 