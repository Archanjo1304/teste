// Carrossel de fotos
const carousel = document.querySelector('.carousel-images');
const btnAnterior = document.getElementById('Anterior');
const btnProximo = document.getElementById('Próximo');
let index = 0;

btnAnterior.addEventListener('click', () => {
  index = (index <= 0) ? carousel.children.length - 1 : index - 1;
  carousel.style.transform = `translateX(-${index * 100}%)`;
});

btnProximo.addEventListener('click', () => {
  index = (index >= carousel.children.length - 1) ? 0 : index + 1;
  carousel.style.transform = `translateX(-${index * 100}%)`;
});

// Carrossel de vídeos (igual ao de fotos)
const videoCarousel = document.querySelector('.video-carousel');
const videoAnterior = document.getElementById('video-anterior');
const videoProximo = document.getElementById('video-proximo');
let videoAtual = 0;

videoAnterior.addEventListener('click', () => {
  videoAtual = (videoAtual <= 0) ? videoCarousel.children.length - 1 : videoAtual - 1;
  videoCarousel.style.transform = `translateX(-${videoAtual * 100}%)`;
});

videoProximo.addEventListener('click', () => {
  videoAtual = (videoAtual >= videoCarousel.children.length - 1) ? 0 : videoAtual + 1;
  videoCarousel.style.transform = `translateX(-${videoAtual * 100}%)`;
});

// Mensagem surpresa
function mostrarMensagem() {
  const msg = document.getElementById('mensagem');
  msg.style.display = msg.style.display === 'none' ? 'block' : 'none';
}

function criarCorações() {
    const quantidade = 30; // Quantidade de corações
    const heartsContainer = document.querySelector('.hearts');
  
    for (let i = 0; i < quantidade; i++) {
      const heart = document.createElement('span');
      heart.innerText = '💖';
      
      // Posição aleatória horizontal
      const leftPosition = Math.random() * 100; // Vai de 0 a 100
      heart.style.left = `${leftPosition}vw`;
      
      // Duração aleatória da animação
      const animationDuration = Math.random() * 2 + 3; // Entre 3 e 5 segundos
      heart.style.animationDuration = `${animationDuration}s`;
      
      // Delay aleatório da animação
      const animationDelay = Math.random() * 1; // Até 5 segundos de atraso
      heart.style.animationDelay = `${animationDelay}s`;
  
      heartsContainer.appendChild(heart);
    }
  }
  
  // Chamar a função para criar os corações
  criarCorações();

// Função para o botão de coração
document.querySelector('.heart').addEventListener('click', function() {
  window.open ('https://www.terrazza40.com'); // Coloque aqui o site que você quer
});

function mostrarPopup() {
  document.getElementById('popup').style.display = 'flex';
}

// Fechar o popup
function fecharPopup() {
  document.getElementById('popup').style.display = 'none';
}