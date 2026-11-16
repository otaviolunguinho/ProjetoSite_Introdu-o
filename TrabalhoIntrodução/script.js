const form = document.querySelector(".form");
const aviso = document.getElementById("aviso");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (mensagem.length < 10) {
    aviso.textContent = "Escreva uma mensagem com pelo menos 10 caracteres.";
    aviso.style.color = "red";
    return;
  }

  aviso.textContent = "Obrigado, " + nome + "! Sua mensagem foi enviada para o Suporte.";
  aviso.style.color = "#285738";
  form.reset();
});