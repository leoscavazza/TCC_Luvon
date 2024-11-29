// Função para verificar a idade do usuário
function confirmAge(isAdult) {
    const modal = document.getElementById("ageModal");
    const warningMessage = document.getElementById("warningMessage");
    const buttons = document.getElementById("buttons");

    if (isAdult) {
        // Usuário confirmou que tem mais de 18 anos
        modal.style.display = "none";  // Oculta o modal
        document.body.style.overflow = "auto";  // Permite rolar a página
    } else {
        // Usuário não tem mais de 18 anos
        warningMessage.style.display = "block";  // Mostra mensagem de aviso
        buttons.style.display = "none";  // Oculta os botões
    }
}
