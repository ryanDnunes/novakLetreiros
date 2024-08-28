// Seleciona o botão de alternância e o menu
const menuToggle = document.getElementById('menu_botao');
const menu = document.getElementById('menu');

// Adiciona um ouvinte de eventos para o botão de alternância
menuToggle.addEventListener('click', () => {
    // Alterna a classe 'open' no menu para mostrar ou ocultar
    menu.classList.toggle('open');
});

// CSS adicional para quando o menu estiver aberto
const css = `
    @media (max-width: 767px) {
        .menu.open {
            display: flex;
        }
    }
`;

// Adiciona o CSS adicional ao documento
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = css;
document.head.appendChild(styleSheet);




document.addEventListener('DOMContentLoaded', function() {
    const imagensContainer = document.querySelector('.conjunto_de_imagens');
    const verMaisBtn = document.getElementById('verMais');
    const voltarBtn = document.getElementById('voltar');

    // Exibir apenas as primeiras 4 imagens
    const mostrarImagens = (inicio, fim) => {
        const imagens = imagensContainer.querySelectorAll('img');
        imagens.forEach((imagem, index) => {
            if (index >= inicio && index < fim) {
                imagem.style.display = 'block';
            } else {
                imagem.style.display = 'none';
            }
        });
    };

    // Inicialmente mostrar 4 imagens
    mostrarImagens(0, 4);

    // Aumentar ou reduzir o painel de imagens
    verMaisBtn.addEventListener('click', () => {
        imagensContainer.classList.add('expanded');
        mostrarImagens(0, 21); // Mostra todas as imagens
        verMaisBtn.style.display = 'none';
        voltarBtn.style.display = 'inline-block';
    });

    voltarBtn.addEventListener('click', () => {
        imagensContainer.classList.remove('expanded');
        mostrarImagens(0, 4); // Volta para as primeiras 4 imagens
        verMaisBtn.style.display = 'inline-block';
        voltarBtn.style.display = 'none';
    });
});




function vai(element) {
    element.style.color = "#0073e6"; // Volta a cor do texto para a cor original
}

function volta(element) {
    element.style.color = ""; // Volta a cor do texto para a cor original
}



document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('#menu a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o comportamento padrão do link

            // Remove a classe 'active' de todos os links
            menuLinks.forEach(link => link.classList.remove('active'));

            // Adiciona a classe 'active' ao link clicado
            this.classList.add('active');

            // Obtém o id da seção correspondente
            const sectionId = this.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);

            // Faz o scroll suave até a seção
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
