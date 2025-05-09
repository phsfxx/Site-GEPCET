# Diretório de Fontes

Este diretório contém as fontes personalizadas utilizadas no site do GEPCET.

## Estrutura

```
📁 fonts/
├── 📁 principal/       # Fontes principais
├── 📁 alternativas/   # Fontes alternativas
└── 📄 README.md       # Este arquivo
```

## Especificações

### Formatos Aceitos
- WOFF2: Formato preferencial (melhor compressão)
- WOFF: Suporte amplo
- TTF: Fallback básico
- EOT: Suporte legado IE

### Fontes Principais
- Roboto: Texto geral
- Open Sans: Títulos
- Montserrat: Elementos de UI
- Font Awesome: Ícones

### Fontes Alternativas
- Fontes de fallback
- Fontes específicas para projetos
- Fontes experimentais
- Fontes temporárias

## Boas Práticas

1. Use fontes web-otimizadas
2. Inclua fallbacks apropriados
3. Mantenha versões atualizadas
4. Documente licenças
5. Otimize para performance
6. Siga o padrão de nomenclatura
7. Mantenha backup das fontes originais

## Nomenclatura

### Padrão
- NomeDaFonte-Variante
- Exemplo: `roboto-regular.woff2`

### Variantes
- regular
- medium
- bold
- italic
- light

## Licenças

### Fontes Principais
- Google Fonts (Apache 2.0)
- Open Font License
- SIL Open Font License

### Fontes Alternativas
- Verificar licença individual
- Documentar restrições
- Manter registro de uso

## Implementação

### CSS
```css
@font-face {
    font-family: 'Roboto';
    src: url('principal/roboto-regular.woff2') format('woff2'),
         url('principal/roboto-regular.woff') format('woff'),
         url('principal/roboto-regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
```

### Fallbacks
```css
body {
    font-family: 'Roboto', 'Open Sans', Arial, sans-serif;
}
```

## Performance

### Otimização
- Use font-display: swap
- Preload fontes críticas
- Subset quando possível
- Compressão adequada

### Monitoramento
- Verificar carregamento
- Testar fallbacks
- Medir performance
- Ajustar conforme necessário 