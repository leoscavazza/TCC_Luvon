// script.js

// Função para alternar entre login e cadastro
function showForm(containerId) {
    const loginContainer = document.getElementById('login-container');
    const signupContainer = document.getElementById('signup-container');

    if (containerId === 'signup-container') {
        loginContainer.classList.add('hidden');
        signupContainer.classList.remove('hidden');
    } else {
        signupContainer.classList.add('hidden');
        loginContainer.classList.remove('hidden');
    }
}

// Função para mostrar/ocultar senha
function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
}
