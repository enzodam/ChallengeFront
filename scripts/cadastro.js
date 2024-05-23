document.addEventListener('DOMContentLoaded', function() {
    const cadastroForm = document.getElementById('cadastroForm');
    const voltarButton = document.getElementById('voltarButton');

    function validarCadastro(event) {
        event.preventDefault();

        const fullname = document.getElementById('fullname').value.trim();

        if (!fullname) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        cadastroForm.submit();
        alert('Cadastro realizado com sucesso!');
        window.location.href = 'login.html';
    }

    voltarButton.addEventListener('click', function() {
        window.location.href = 'login.html';
    });

    cadastroForm.addEventListener('submit', validarCadastro);
});
