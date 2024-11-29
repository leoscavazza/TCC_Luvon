let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;
const indicatorsContainer = document.getElementById('carousel-indicators');

// Função para mostrar o slide atual
function showSlide(index) {
    if (index < 0) {
        currentIndex = totalImages - 1;
    } else if (index >= totalImages) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const translateX = -currentIndex * 100;
    document.getElementById('carousel-images').style.transform = `translateX(${translateX}%)`;

    updateIndicators(); // Atualizar as bolinhas
}

// Função para ir para o próximo slide
function nextSlide() {
    showSlide(currentIndex + 1);
}

// Função para ir para o slide anterior
function prevSlide() {
    showSlide(currentIndex - 1);
}

// Função para criar e atualizar as bolinhas (indicadores)
function createIndicators() {
    for (let i = 0; i < totalImages; i++) {
        const indicator = document.createElement('div');
        if (i === 0) indicator.classList.add('active'); // Marcar o primeiro slide como ativo
        indicator.addEventListener('click', () => showSlide(i)); // Evento para clicar na bolinha
        indicatorsContainer.appendChild(indicator);
    }
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.carousel-indicators div');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

// Iniciar o autoplay (passa automaticamente)
function startAutoplay() {
    setInterval(nextSlide, 5000); // Muda de slide a cada 5 segundos
}

// Inicialização
createIndicators();
showSlide(currentIndex); // Mostrar o primeiro slide
startAutoplay();

// Eventos para os botões de navegação
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);
