document.addEventListener('DOMContentLoaded', function() {
    // Elementos do menu
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const header = document.querySelector('.header');
    const body = document.body;
    const menuOverlay = document.querySelector('.menu-overlay');

    // Verificar se os elementos existem antes de prosseguir
    if (!menuToggle || !mainNav || !header || !menuOverlay) {
        console.error('Elementos do menu não encontrados:', {
            menuToggle: !!menuToggle,
            mainNav: !!mainNav,
            header: !!header,
            menuOverlay: !!menuOverlay
        });
        return;
    }

    let lastScrollTop = 0;
    let isMenuOpen = false;

    // Função para ajustar o layout baseado no tamanho da tela
    function adjustLayout() {
        try {
            const windowWidth = window.innerWidth;
            const sections = document.querySelectorAll('section');
            const containers = document.querySelectorAll('.container');
            const grids = document.querySelectorAll('.grid, .about-grid, .contact-grid, .blog-grid, .projects-grid, .formations-grid, .social-grid');

            // Ajustar padding dos containers
            containers.forEach(container => {
                if (!container) return;
                
                if (windowWidth <= 480) {
                    container.style.padding = '0 1rem';
                } else if (windowWidth <= 768) {
                    container.style.padding = '0 1.5rem';
                } else if (windowWidth <= 1024) {
                    container.style.padding = '0 2rem';
                } else {
                    container.style.padding = '0 2.5rem';
                }
            });

            // Ajustar grid layouts
            grids.forEach(grid => {
                if (!grid) return;
                
                if (windowWidth <= 480) {
                    grid.style.gridTemplateColumns = '1fr';
                    grid.style.gap = '1rem';
                } else if (windowWidth <= 768) {
                    if (grid.classList.contains('projects-grid') || grid.classList.contains('formations-grid')) {
                        grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
                    } else {
                        grid.style.gridTemplateColumns = '1fr';
                    }
                    grid.style.gap = '1.5rem';
                } else if (windowWidth <= 1024) {
                    if (grid.classList.contains('projects-grid') || grid.classList.contains('formations-grid')) {
                        grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
                    } else if (grid.classList.contains('about-grid') || grid.classList.contains('contact-grid')) {
                        grid.style.gridTemplateColumns = '1.5fr 1fr';
                    } else if (grid.classList.contains('social-grid')) {
                        grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
                    }
                    grid.style.gap = '2rem';
                } else {
                    if (grid.classList.contains('projects-grid') || grid.classList.contains('formations-grid')) {
                        grid.style.gridTemplateColumns = 'repeat(4, 1fr)';
                    } else if (grid.classList.contains('about-grid') || grid.classList.contains('contact-grid')) {
                        grid.style.gridTemplateColumns = '1.5fr 1fr';
                    } else if (grid.classList.contains('social-grid')) {
                        grid.style.gridTemplateColumns = 'repeat(4, 1fr)';
                    }
                    grid.style.gap = '2.5rem';
                }
            });

            // Ajustar tamanho das fontes
            const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
            headings.forEach(heading => {
                if (!heading) return;
                
                if (windowWidth <= 480) {
                    heading.style.fontSize = '1.5rem';
                } else if (windowWidth <= 768) {
                    heading.style.fontSize = '1.8rem';
                } else if (windowWidth <= 1024) {
                    heading.style.fontSize = '2rem';
                } else {
                    heading.style.fontSize = '2.2rem';
                }
            });

            // Ajustar padding das seções
            sections.forEach(section => {
                if (!section) return;
                
                if (windowWidth <= 480) {
                    section.style.padding = '2rem 0';
                } else if (windowWidth <= 768) {
                    section.style.padding = '3rem 0';
                } else {
                    section.style.padding = '4rem 0';
                }
            });
        } catch (error) {
            console.error('Erro ao ajustar layout:', error);
        }
    }

    // Função para ajustar imagens responsivas
    function adjustImages() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.classList.contains('logo')) {
                img.style.maxWidth = '100%';
                img.style.height = 'auto';
            }
        });
    }

    // Função para ajustar textos longos
    function adjustTextContent() {
        const paragraphs = document.querySelectorAll('p');
        paragraphs.forEach(p => {
            const words = p.textContent.split(' ');
            if (words.length > 20) {
                p.style.maxWidth = '100%';
                p.style.wordWrap = 'break-word';
            }
        });
    }

    // Função para abrir o menu
    function openMenu() {
        isMenuOpen = true;
        mainNav.classList.add('active');
        menuToggle.classList.add('active');
        menuOverlay.classList.add('active');
        body.classList.add('menu-open');
        menuToggle.setAttribute('aria-expanded', 'true');
        
        // Prevenir scroll do body
        body.style.overflow = 'hidden';
    }

    // Função para fechar o menu
    function closeMenu() {
        isMenuOpen = false;
        mainNav.classList.remove('active');
        menuToggle.classList.remove('active');
        menuOverlay.classList.remove('active');
        body.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        
        // Restaurar scroll do body
        body.style.overflow = '';
    }

    // Toggle do menu
    menuToggle.addEventListener('click', () => {
        if (isMenuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Fechar menu ao clicar no overlay
    menuOverlay.addEventListener('click', closeMenu);

    // Fechar menu ao clicar em um link
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 900) {
                closeMenu();
            }
        });
    });

    // Fechar menu ao redimensionar a janela
    window.addEventListener('resize', () => {
        if (window.innerWidth > 900 && isMenuOpen) {
            closeMenu();
        }
    });

    // Controle de scroll do header
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Adicionar sombra quando rolar
        if (scrollTop > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Esconder/mostrar header baseado na direção do scroll
        if (scrollTop > lastScrollTop && scrollTop > 80) {
            header.classList.add('scroll-down');
            header.classList.remove('scroll-up');
        } else {
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        
        lastScrollTop = scrollTop;
    });

    // Prevenir scroll quando o menu estiver aberto
    mainNav.addEventListener('touchmove', (e) => {
        if (isMenuOpen) {
            e.preventDefault();
        }
    }, { passive: false });

    // Marcar link ativo
    function setActiveLink() {
        const currentPath = window.location.pathname;
        const links = mainNav.querySelectorAll('a');
        
        links.forEach(link => {
            if (link.getAttribute('href') === currentPath.split('/').pop()) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Inicializar
    try {
        adjustLayout();
        adjustImages();
        adjustTextContent();
        setActiveLink();
        
        // Adicionar event listeners
        window.addEventListener('resize', () => {
            if (window.innerWidth > 900 && isMenuOpen) {
                closeMenu();
            }
            adjustLayout();
        });
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 0) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            if (scrollTop > lastScrollTop && scrollTop > 80) {
                header.classList.add('scroll-down');
                header.classList.remove('scroll-up');
            } else {
                header.classList.remove('scroll-down');
                header.classList.add('scroll-up');
            }
            
            lastScrollTop = scrollTop;
        });
    } catch (error) {
        console.error('Erro na inicialização:', error);
    }
});

// Função para controlar o menu mobile
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const menuOverlay = document.querySelector('.menu-overlay');
    const header = document.querySelector('.header');
    const body = document.body;

    // Verificar se os elementos existem antes de prosseguir
    if (!menuToggle || !mainNav || !menuOverlay || !header) {
        console.log('Elementos do menu não encontrados');
        return;
    }

    let isMenuOpen = false;
    let lastScrollTop = 0;

    // Função para abrir o menu
    function openMenu() {
        isMenuOpen = true;
        mainNav.classList.add('active');
        menuToggle.classList.add('active');
        menuOverlay.classList.add('active');
        body.classList.add('menu-open');
        menuToggle.setAttribute('aria-expanded', 'true');
        body.style.overflow = 'hidden';
    }

    // Função para fechar o menu
    function closeMenu() {
        isMenuOpen = false;
        mainNav.classList.remove('active');
        menuToggle.classList.remove('active');
        menuOverlay.classList.remove('active');
        body.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        body.style.overflow = '';
    }

    // Adicionar event listeners
    menuToggle.addEventListener('click', () => {
        if (isMenuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    menuOverlay.addEventListener('click', closeMenu);

    // Fechar menu ao clicar em um link
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 900) {
                closeMenu();
            }
        });
    });

    // Fechar menu ao redimensionar a janela
    window.addEventListener('resize', () => {
        if (window.innerWidth > 900 && isMenuOpen) {
            closeMenu();
        }
    });

    // Controle de scroll do header
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        if (scrollTop > lastScrollTop && scrollTop > 80) {
            header.classList.add('scroll-down');
            header.classList.remove('scroll-up');
        } else {
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        
        lastScrollTop = scrollTop;
    });
}

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
}); 