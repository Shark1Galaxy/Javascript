function carregar() {
  let mensagem = document.getElementById("msg");
  let imagem = document.getElementById("imagem");
  let now = new Date();
  let hour = now.getHours();
  let minutos = now.getMinutes();
  mensagem.innerHTML = `Agora são ${hour}:${minutos} Minutos`;

  if (hour >= 0 && hour < 12) {
    imagem.src = "imagens/Manhã.png";
    document.body.style.background = "#F4D2A3";
    imagem.style.transform = "opacity 0.5s ease-in-out";
    document.body.style.transform = "opacity 0.5s ease-in-out";
  } else if (hour >= 12 && hour < 17) {
    imagem.src = "imagens/Tarde.png";
    document.body.style.background = "#7C351A";
    imagem.style.transform = "opacity 0.5s ease-in-out";
    document.body.style.transform = "opacity 0.5s ease-in-out";
  } else {
    imagem.src = "imagens/Noite.png";
    document.body.style.background = "#00264E";
    imagem.style.transform = "opacity 0.5s ease-in-out";
    document.body.style.transform = "opacity 0.5s ease-in-out";
  }
}
