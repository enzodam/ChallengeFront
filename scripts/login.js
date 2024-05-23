document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('loginButton');
    const registerButton = document.getElementById('registerButton');
    const loginInput = document.getElementById('login');
    const passwordInput = document.getElementById('password');
    const errorMessagesDiv = document.getElementById('errorMessages');

    function checkInputs() {
        const loginValue = loginInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        if (loginValue && passwordValue) {
            loginButton.disabled = false; 
        } else {
            loginButton.disabled = true;
        }
    }

    loginInput.addEventListener('input', checkInputs);
    passwordInput.addEventListener('input', checkInputs);

    loginButton.addEventListener('click', function(event) {
        event.preventDefault();

        const loginValue = loginInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        if (!loginValue || !passwordValue) {
            errorMessagesDiv.innerHTML = '<p>Por favor, preencha todos os campos.</p>';
            return; 
        }

        window.location.href = 'menu.html';
    });

    registerButton.addEventListener('click', function(event) {
        console.log('Botão Cadastrar-se clicado');
        window.location.href = 'cadastro.html';
    });
});