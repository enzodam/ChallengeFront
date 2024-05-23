document.addEventListener('DOMContentLoaded', function() {
    const voltarButton = document.getElementById('voltarButton');

    voltarButton.addEventListener('click', function() {
        window.location.href = 'menu.html';
    });
});