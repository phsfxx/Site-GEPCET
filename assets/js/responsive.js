// Configurações de breakpoints
const BREAKPOINTS = {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
    large: 1440,
    tv: 1920
};

// Configurações de fontes
const FONT_SIZES = {
    base: {
        mobile: 14,
        tablet: 15,
        desktop: 16,
        large: 18,
        tv: 20
    },
    scale: {
        h1: 2.5,
        h2: 2,
        h3: 1.75,
        h4: 1.5,
        h5: 1.25,
        h6: 1
    }
};

// Classe principal para gerenciar responsividade
class ResponsiveManager {
    constructor() {
        this.currentBreakpoint = this.getCurrentBreakpoint();
        this.init();
    }

    init() {
        // Inicializa os event listeners
        window.addEventListener('resize', this.debounce(this.handleResize.bind(this), 250));
        window.addEventListener('load', this.handleResize.bind(this));

        // Inicializa o menu responsivo
        this.initResponsiveMenu();

        // Aplica ajustes iniciais
        this.applyResponsiveStyles();
    }

    // Retorna o breakpoint atual baseado na largura da tela
    getCurrentBreakpoint() {
        const width = window.innerWidth;
        if (width >= BREAKPOINTS.tv) return 'tv';
        if (width >= BREAKPOINTS.large) return 'large';
        if (width >= BREAKPOINTS.desktop) return 'desktop';
        if (width >= BREAKPOINTS.tablet) return 'tablet';
        return 'mobile';
    }

    // Gerencia o redimensionamento da janela
    handleResize() {
        const newBreakpoint = this.getCurrentBreakpoint();

        if (newBreakpoint !== this.currentBreakpoint) {
            this.currentBreakpoint = newBreakpoint;
            this.applyResponsiveStyles();
        }

        this.updateFontSizes();
        this.updateLayout();
    }

    // Aplica estilos responsivos
    applyResponsiveStyles() {
        const body = document.body;
        body.className = ''; // Limpa classes existentes
        body.classList.add(`breakpoint-${this.currentBreakpoint}`);

        // Ajusta o container principal
        const containers = document.querySelectorAll('.container');
        containers.forEach(container => {
            container.style.maxWidth = this.getContainerWidth();
        });
    }

    // Retorna a largura máxima do container baseado no breakpoint
    getContainerWidth() {
        switch (this.currentBreakpoint) {
            case 'tv':
                return '1800px';
            case 'large':
                return '1400px';
            case 'desktop':
                return '1200px';
            case 'tablet':
                return '720px';
            default:
                return '100%';
        }
    }

    // Atualiza tamanhos de fonte
    updateFontSizes() {
        const baseSize = FONT_SIZES.base[this.currentBreakpoint];
        document.documentElement.style.fontSize = `${baseSize}px`;

        // Ajusta tamanhos de fonte para diferentes elementos
        Object.entries(FONT_SIZES.scale).forEach(([element, scale]) => {
            const elements = document.querySelectorAll(element);
            elements.forEach(el => {
                el.style.fontSize = `${baseSize * scale}px`;
            });
        });
    }

    // Atualiza layout
    updateLayout() {
        // Ajusta grid de projetos
        const projectsGrid = document.querySelector('.projects-grid');
        if (projectsGrid) {
            const columns = this.getGridColumns();
            projectsGrid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        }

        // Ajusta imagens
        this.updateImages();
    }

    // Retorna número de colunas para grid baseado no breakpoint
    getGridColumns() {
        switch (this.currentBreakpoint) {
            case 'tv':
                return 4;
            case 'large':
                return 3;
            case 'desktop':
                return 3;
            case 'tablet':
                return 2;
            default:
                return 1;
        }
    }

    // Atualiza imagens
    updateImages() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.classList.contains('logo')) {
                img.style.objectFit = 'cover';
                img.style.maxWidth = '100%';
                img.style.height = 'auto';
            }
        });
    }

    // Inicializa menu responsivo
    initResponsiveMenu() {
        const menuToggle = document.querySelector('.menu-toggle');
        const mainNav = document.querySelector('.main-nav');
        const body = document.body;

        // Cria o overlay
        const overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        body.appendChild(overlay);

        if (menuToggle && mainNav) {
            // Função para fechar o menu
            const closeMenu = () => {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
                overlay.classList.remove('active');
                body.classList.remove('menu-open');
            };

            // Função para abrir o menu
            const openMenu = () => {
                mainNav.classList.add('active');
                menuToggle.classList.add('active');
                overlay.classList.add('active');
                body.classList.add('menu-open');
            };

            // Toggle do menu
            menuToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                if (mainNav.classList.contains('active')) {
                    closeMenu();
                } else {
                    openMenu();
                }
            });

            // Fecha menu ao clicar no overlay
            overlay.addEventListener('click', closeMenu);

            // Fecha menu ao clicar em links
            const navLinks = mainNav.querySelectorAll('a');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (this.currentBreakpoint === 'mobile' || this.currentBreakpoint === 'tablet') {
                        closeMenu();
                    }
                });
            });

            // Fecha menu ao redimensionar para desktop
            window.addEventListener('resize', () => {
                if (this.currentBreakpoint === 'desktop' || this.currentBreakpoint === 'large' || this.currentBreakpoint === 'tv') {
                    closeMenu();
                }
            });

            // Previne scroll quando menu está aberto
            mainNav.addEventListener('touchmove', (e) => {
                if (mainNav.classList.contains('active')) {
                    e.preventDefault();
                }
            }, { passive: false });
        }
    }

    // Função debounce para otimizar performance
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Inicializa o gerenciador de responsividade
document.addEventListener('DOMContentLoaded', () => {
    window.responsiveManager = new ResponsiveManager();
});