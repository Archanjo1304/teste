const imagens = document.querySelector('.carousel-images');
const anteriorBtn = document.getElementById('Anterior');
const proximoBtn = document.getElementById('Próximo');

let index = 0;

function mostrarImagem() {
  const msg = document.getElementById('mensagem');
  msg.style.display = msg.style.display === 'none' ? 'block' : 'none';
}

anteriorBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
  } else {
    index = imagens.children.length - 1;
  }
  atualizarCarrossel();
});

proximoBtn.addEventListener('click', () => {
  if (index < imagens.children.length - 1) {
    index++;
  } else {
    index = 0;
  }
  atualizarCarrossel();
});

function atualizarCarrossel() {
  const largura = imagens.clientWidth;
  imagens.style.transform = `translateX(-${index * 100}%)`;
}
