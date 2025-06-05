// Função para carregar o footer
function loadFooter() {
    console.log('Iniciando carregamento do footer...');
    try {
        const footerContainer = document.getElementById('footer-container');
        if (!footerContainer) {
            console.error('Container do footer não encontrado!');
            return;
        }

        // Determina o caminho base baseado na localização atual
        const isInPages = window.location.pathname.includes('/pages/');
        const basePath = isInPages ? '../' : './';
        const logoPath = isInPages ? '../pages/assets/imagens/logo/logoGEPCET.jpg' : './pages/assets/imagens/logo/logoGEPCET.jpg';

        // HTML do footer
        const footerHTML = `
            <footer class="footer">
                <div class="footer-content">
                    <!-- Coluna da Marca -->
                    <div class="footer-brand">
                        <a href="${basePath}index.html" class="footer-logo">
                            <img src="${logoPath}" alt="Logo GEPCET" width="60" height="60" loading="lazy">
                            <div class="footer-logo-text">
                                <h2>GEPCET</h2>
                                <span>Grupo de Estudos e Pesquisas em Currículo, Ensino e Tecnologias – GEPCET</span>
                            </div>
                        </a>
                        <p class="footer-mission">Integrando ciência, educação e tecnologia para transformar realidades</p>
                    </div>

                    <!-- Links Úteis -->
                    <div class="footer-links">
                        <h3>Navegação</h3>
                        <ul>
                            <li><a href="${basePath}index.html">Quem Somos</a></li>
                            <li><a href="${basePath}pages/projetosInstitucionais.html">Projetos Institucionais</a></li>
                            <li><a href="${basePath}pages/membrosGEPCET.html">Membros do GEPCET</a></li>
                            <li><a href="${basePath}pages/contato.html">Contato</a></li>
                        </ul>
                    </div>

                    <!-- Contato -->
                    <div class="footer-contact">
                        <h3>Contato</h3>
                        <ul>
                            <li>
                                <i class="fas fa-envelope"></i>
                                <a href="mailto:gepcetuemgcarangola@gmail.com">gepcetuemgcarangola@gmail.com</a>
                            </li>
                            <li>
                                <i class="fas fa-map-marker-alt"></i>
                                <address>
                                    Universidade Estadual de Minas Gerais<br>
                                    Campus Carangola<br>
                                    Praça dos Estudantes, 23<br>
                                    Carangola - MG
                                </address>
                            </li>
                            <li>
                                <i class="fas fa-phone"></i>
                                <a href="tel:+553233211234">(32) 3321-1234</a>
                            </li>
                        </ul>
                    </div>

                    <!-- Redes Sociais -->
                    <div class="footer-social">
                        <h3>Redes Sociais</h3>
                        <div class="social-icons">
                            <a href="https://www.instagram.com/gepcet_uemg" class="social-icon-link" target="_blank" rel="noopener" aria-label="Instagram">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.youtube.com/@gepcet" class="social-icon-link" target="_blank" rel="noopener" aria-label="YouTube">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Rodapé Inferior -->
                <div class="footer-bottom">
                    <p>&copy; ${new Date().getFullYear()} GEPCET – Todos os direitos reservados</p>
                    <p>Desenvolvido por <a href="#" target="_blank" rel="noopener">Equipe GEPCET</a></p>
                </div>
            </footer>
        `;

        console.log('Inserindo footer no container...');
        footerContainer.innerHTML = footerHTML;
        console.log('Footer carregado com sucesso!');

        // Ajusta o posicionamento do footer
        adjustFooterPosition();
    } catch (error) {
        console.error('Erro ao carregar o footer:', error);
    }
}

// Função para ajustar o posicionamento do footer
function adjustFooterPosition() {
    try {
        const main = document.querySelector('main');
        const footer = document.querySelector('.footer');
        const header = document.querySelector('.header');

        if (!footer || !main || !header) {
            console.error('Elementos necessários não encontrados:', {
                footer: !!footer,
                main: !!main,
                header: !!header
            });
            return;
        }

        // Calcula as alturas
        const contentHeight = main.offsetHeight;
        const windowHeight = window.innerHeight;
        const headerHeight = header.offsetHeight;
        const footerHeight = footer.offsetHeight;

        // Verifica se o conteúdo é menor que a altura da janela
        const isContentShorter = contentHeight + headerHeight + footerHeight < windowHeight;

        // Ajusta o posicionamento do footer
        if (isContentShorter) {
            footer.style.position = 'fixed';
            footer.style.bottom = '0';
            footer.style.width = '100%';
            footer.style.zIndex = '100';
            console.log('Footer ajustado para posição fixa');
        } else {
            footer.style.position = 'relative';
            footer.style.zIndex = 'auto';
            console.log('Footer ajustado para posição relativa');
        }

        // Ajusta o padding do main para evitar sobreposição
        main.style.paddingBottom = isContentShorter ? `${footerHeight}px` : '0';
    } catch (error) {
        console.error('Erro ao ajustar posição do footer:', error);
    }
}

// Carrega o footer quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM carregado, iniciando carregamento do footer...');
    loadFooter();

    // Ajusta o footer quando a janela for redimensionada
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(adjustFooterPosition, 250);
    });
});