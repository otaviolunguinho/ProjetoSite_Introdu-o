const form = document.getElementById("form-agendar");
const passaporte = document.getElementById("passaporte");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();


  document.getElementById("pass-nome").textContent = "Trilheiro: " + document.getElementById("agenda-nome").value;
  document.getElementById("pass-trilha").textContent = "Trilha: " + document.getElementById("agenda-trilha").value;
  document.getElementById("pass-data").textContent = "Data: " + document.getElementById("agenda-data").value;
  document.getElementById("pass-dias").textContent = "Agendado com sucesso! 🎉";
  document.getElementById("pass-dica").textContent = "Dica: Divirta-se na trilha!";

  
  passaporte.classList.add("aberto");
  form.reset();
});