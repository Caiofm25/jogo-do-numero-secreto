let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNatela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  // Usando a biblioteca Responsive Voice:
  // responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });

  // Usando a biblioteca Web Speech API, que é uma biblioteca nativa de vários navegadores:
  // if ("speechSynthesis" in window) {
  //   let utterance = new SpeechSynthesisUtterance(texto);
  //   utterance.lang = "pt-BR";
  //   utterance.rate = 1.2;
  //   window.speechSynthesis.speak(utterance);
  // } else {
  //   console.log("Web Speech API não suportada neste navegador.");
  // }
}

function exibirMensagemInicial() {
  exibirTextoNatela("h1", "Jogo do número secreto");
  exibirTextoNatela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial();

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementoNaLista = listaDeNumerosSorteados.length;
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    if (quantidadeDeElementoNaLista == numeroLimite) {
      listaDeNumerosSorteados = [];
    }
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function verificarChute() {
  let chute = document.querySelector("input").value;
  let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
  let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
  if (chute == numeroSecreto) {
    exibirTextoNatela("h1", "Acertou");
    exibirTextoNatela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNatela("p", "O número secreto é menor");
    } else {
      exibirTextoNatela("p", "O número secreto é maior");
    }
    tentativas++;
    limparCampo();
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
  tentativas = 1;
}
