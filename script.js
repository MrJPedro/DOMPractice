// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

const changeTextBtn = document.getElementById("btn-mudar-frases");

const frase1 = document.getElementById("mensagem1");
      frase2 = document.getElementById("mensagem2");
      frase3 = document.getElementById("mensagem3");
      frase4 = document.getElementById("mensagem4");


// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
}); 

changeTextBtn.addEventListener("click", function () {
  frase1.textContent = "Essa frase foi modificada utilizando JS!";
  frase2.textContent = "Essa frase foi modificada utilizando JS!";
  frase3.textContent = "Essa frase foi modificada utilizando JS!";
  frase4.textContent = "Essa frase foi modificada utilizando JS!";
});
