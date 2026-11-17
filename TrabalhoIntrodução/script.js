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


// Botão de copiar pix
const botaoCopiar = document.getElementById("botao-copiar");
const chavePix = document.getElementById("chave-pix");

botaoCopiar.addEventListener("click", function () {
  navigator.clipboard.writeText(chavePix.textContent).then(function () {
    botaoCopiar.textContent = "Copiado com Sucesso!";
    setTimeout(function () {
      botaoCopiar.textContent = "Copiar chave";
    }, 2000);
  });
});



// Contagem dos impactos da ong
function contar(id, valorFinal, velocidade) {
  const elemento = document.getElementById(id);
  let atual = 0;

  const intervalo = setInterval(function () {
    atual = atual + 1;
    elemento.textContent = atual;

    if (atual === valorFinal) {
      clearInterval(intervalo);
    }
  }, velocidade);
}

contar("num-pessoas", 1534, 15);
contar("num-trilhas", 32, 550);
contar("num-cadeiras", 70, 320);
contar("num-voluntarios", 1083, 25);