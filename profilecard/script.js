const botao = document.querySelector('.theme-button');
const conteudo = document.querySelector('.container');

const audio = new Audio('https://api-v6.soundbuttons.com/media/sounds/1745310609-notification_o14egLP.mp39');

botao.onclick = () => {
  conteudo.classList.toggle('dark');
  audio.pause();
  audio.currentTime=0;
  audio.play();
};


/* ---------------------------------------------------- */
/* TYPEWRITER - MÁQUINA DE ESCREVER ------------------- */

const elemento = document.getElementById("typewriter");
const texto = "Estudante de programação Analise e desenvolvimento de sistemas";
let i = 0;
let apagando = false;
// limpa o texto da página
elemento.innerText = "";
function typeWriter() {
  //console.log(i);

  // afirmacao ? se_verdadeiro_retorne_isso : se_falso_retorne_aquilo
  const velocidade = apagando ? 25 : 50; // Apaga mais rápido do que digita

  if (!apagando && i < texto.length) {
    // Adicionando letras
    elemento.innerHTML += texto.charAt(i);
    // elemento.innerHTML = elemento.innerHTML + texto.charAt(i);
    i++;
  } else if (apagando && i > 0) {
    // Removendo letras
    elemento.innerHTML = texto.substring(0, i - 1);
    i--;
  }

  // Lógica de inversão <---
  if (i === texto.length) {
    apagando = true;
    setTimeout(typeWriter, 1000); // Pausa quando termina de escrever
  } else if (i === 0 && apagando) {
    apagando = false;
    setTimeout(typeWriter, 500); // Pausa antes de começar a escrever de novo
  } else {
    setTimeout(typeWriter, velocidade);
  }
}

typeWriter();