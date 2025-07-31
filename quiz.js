const perguntas = [
  {
    texto: "Qual a cor do céu em um dia claro?",
    correta: "Azul",
    alternativas: ["Azul", "Verde", "Vermelho", "Amarelo"]
  },
  {
    texto: "Quantos dias tem uma semana?",
    correta: "7",
    alternativas: ["5", "7", "10", "3"]
  },
  {
    texto: "Qual animal é conhecido como 'rei da selva'?",
    correta: "Leão",
    alternativas: ["Elefante", "Tigre", "Leão", "Cavalo"]
  },
  {
    texto: "Quantos meses tem um ano?",
    correta: "12",
    alternativas: ["10", "11", "12", "13"]
  },
  {
    texto: "Qual é a capital do Brasil?",
    correta: "Brasília",
    alternativas: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"]
  }
];

let indiceAtual = 0;
let pontuacao = 0;

const quizContainer = document.getElementById("quiz-container");
const perguntaDiv = quizContainer.querySelector(".pergunta");
const alternativasDiv = quizContainer.querySelector(".alternativas");
const resultadoSection = document.getElementById("resultado");
const resultadoTexto = resultadoSection.querySelector(".resultado-texto");
const reiniciarBtn = document.getElementById("reiniciarBtn");

function mostrarPergunta() {
  const perguntaAtual = perguntas[indiceAtual];
  perguntaDiv.textContent = perguntaAtual.texto;

  alternativasDiv.innerHTML = "";

  perguntaAtual.alternativas.forEach(alt => {
    const btn = document.createElement("button");
    btn.textContent = alt;
    btn.onclick = () => verificarResposta(alt);
    alternativasDiv.appendChild(btn);
  });

  quizContainer.style.display = "flex";
  resultadoSection.style.display = "none";
}

function verificarResposta(respostaSelecionada) {
  if (respostaSelecionada === perguntas[indiceAtual].correta) {
    pontuacao++;
  }

  indiceAtual++;

  if (indiceAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  quizContainer.style.display = "none";
  resultadoSection.style.display = "flex";

  if (pontuacao < 3){
  resultadoTexto.textContent = `Ihhhhhh, esperava mais em... acertar só ${pontuacao} de ${perguntas.length} perguntas ta fraco, tente dnv`;
  }
  if (pontuacao > 2 && pontuacao < 5){
  resultadoTexto.textContent = `É, podia ser melhor... mas você acertou ${pontuacao} de ${perguntas.length}, parabéns`;
  }
  if (pontuacao > 4){
  resultadoTexto.textContent = `OWWWNNNNN, ela acertou todas as ${pontuacao} perguntas. To mt feliz, te amo, continue assim, bjss, agora pode receber seu presente❤`;
  }
}

reiniciarBtn.onclick = () => {
  indiceAtual = 0;
  pontuacao = 0;
  mostrarPergunta();
};

mostrarPergunta();
