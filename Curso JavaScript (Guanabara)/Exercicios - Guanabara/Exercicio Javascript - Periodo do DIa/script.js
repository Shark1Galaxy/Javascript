const tituloContagem = document.querySelector('div#horarioMudar');
tituloContagem.addEventListener('load',load());


function load(){
    const agora = new Date();
    const horarioAgora = agora.getHours();
    const imagemBackground = document.getElementById
    ('imagem');
    tituloContagem.innerHTML = horarioAgora;
    tituloContagem.innerHTML = `Agora são ${horarioAgora} horas`

    if(horarioAgora > 6 && horarioAgora < 12){
        document.body.style.backgroundColor = '#1da2d6ff';
        imagemBackground.src = 'img/dia.png'
    } else if( horarioAgora >= 12 && horarioAgora < 18){
        document.body.style.backgroundColor = '#9D3F36';
        imagemBackground.src = 'img/tarde.png'
    } else if(horarioAgora >=0 && horarioAgora < 6){
        document.body.style.backgroundColor = '#000000ff';
    imagemBackground.src = 'img/madrugada.png'
    } else if(horarioAgora == 6){
        document.body.style.backgroundColor = '#cca700ff';
        imagemBackground.src = 'img/Manha.png'
    } else {
        document.body.style.backgroundColor = '#002E5B';
        imagemBackground.src = 'img/noite.png'
    }
}
