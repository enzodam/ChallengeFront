document.addEventListener('DOMContentLoaded', function() {
  const voltarButton = document.getElementById('voltarButton');
  const form = document.getElementById('form');
  const errorMessages = document.getElementById('errorMessages');

  voltarButton.addEventListener('click', function() {
      window.location.href = 'menu.html';
  });

  form.addEventListener('submit', function(event) {
      event.preventDefault();

      errorMessages.innerHTML = '';

      const nameOficina = document.getElementById('name__oficina').value.trim();
      const local = document.getElementById('local').value.trim();
      const telefone = document.getElementById('telefone').value.trim();
      const cnpj = document.getElementById('cnpj').value.trim();
      const hora = document.getElementById('hora').value.trim();
      const servicos = document.getElementById('servicos').value.trim();

      if (!nameOficina || !local || !telefone || !cnpj || !hora || !servicos) {
          errorMessages.textContent = 'Por favor, preencha todos os campos.';
          errorMessages.style.color = 'red';
          return;
      }

      alert('Cadastro realizado com sucesso!');
      console.log('Cadastro realizado: ', {
          nameOficina,
          local,
          telefone,
          cnpj,
          hora,
          servicos
      });

      window.location.href = 'menu.html';
  });
});
