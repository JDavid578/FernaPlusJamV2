const perguntas = [
  {
    texto: "Qual o nome da musica que você me mostrou quando a gente se conheceu?",
    correta: "Memories",
    alternativas: ["heather", "Memories", "ocean eyes", "Astronomy"]
  },
  {
    texto: "Qual a hora aproximada que a gente se beijou?",
    correta: "13:00",
    alternativas: ["13:00", "12:00", "14:00", "11:00"]
  },
  {
    texto: "O que a gente comeu quando assistiu 'Ainda estou aqui'?",
    correta: "Lays Sour Cream",
    alternativas: ["Lays Classic", "Lays Churrasco", "Lays Cheese", "Lays Sour Cream"]
  },
  {
    texto: "Qual era o sabor do milkshake que a gente dividiu na milkmoo?",
    correta: "Malhada",
    alternativas: ["Mimosa", "Lolita", "Malhada", "Manhosa"]
  },
  {
    texto: "Quantas flores eu te dei no dia da Jaqueira?",
    correta: "5",
    alternativas: ["4", "5", "6", "7"]
  },
  {
    texto: "qual foi o primeiro apelido que eu te dei?",
    correta: "Bonitinha",
    alternativas: ["Bonitinha", "Nanda", "Meu anjo", "Meu amor"]
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
  if (pontuacao > 2 && pontuacao < 6){
  resultadoTexto.textContent = `É, podia ser melhor... mas você acertou ${pontuacao} de ${perguntas.length}, parabéns`;
  }
  if (pontuacao > 5){
  resultadoTexto.textContent = `OWWWNNNNN, ela acertou todas as ${pontuacao} perguntas. To mt feliz, te amo, continue assim, bjss, agora pode receber seu presente❤`;
  }
}

reiniciarBtn.onclick = () => {
  indiceAtual = 0;
  pontuacao = 0;
  mostrarPergunta();
};

mostrarPergunta();
