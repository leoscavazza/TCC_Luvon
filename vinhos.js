// Espera o DOM ser carregado
document.addEventListener("DOMContentLoaded", () => {
    const vinhoTintoImg = document.getElementById("vinhoTinto");

    // Ativa a animação com um pequeno atraso
    setTimeout(() => {
        vinhoTintoImg.classList.add("animate");
    }, 10); // Aguarda 500ms para iniciar a animação
});
