
var largura = 0;
var altura = 0;
var vidas = 1;
var tempo = 5;






function calculoDeTempo(){

var cronometro = setInterval(function(){

        tempo -= 1;
        console.log(tempo)
        if(tempo <= 0){
            clearInterval(cronometro)
        
            alert('vitoria')

        } else {
            document.getElementById('cronometro').innerHTML = tempo;}
        
        }, 1000) 
    
        
    }
    
calculoDeTempo()

   

function ajustaTamanhoPalcoJogo(){

   largura = window.innerHeight;
   altura = window.innerWidth;
   console.log(altura, largura)
}

    ajustaTamanhoPalcoJogo();

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random()*3);
    switch(classe){
        case 0: 
            return 'mosquito1'
        case 1: 
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}
    tamanhoAleatorio()

function ladoAleatorio(){
    var lado = Math.floor(Math.random()*2);
        switch(lado){
            case 0: 
                return 'ladoA'
            case 1: 
                return 'ladoB'          
        }
}

function remover(){
    this.remove();
}

function posicaoaleatoria(){

    //remover mosquito caso exista algum antes de criar um novo:
   if(document.getElementById('mosquito')){
    document.getElementById('mosquito').remove();
    


   if(vidas > 3){

        window.location.href = '../html/gameOver.html'
    
   }else{
        document.getElementById('v'+vidas).src = "../imagens/coracao_vazio.png";
        vidas++
   }
    console.log('v'+vidas)
   }

   

    var posicaoX = Math.floor(Math.random()*altura) - 90;
    var posicaoY = Math.floor(Math.random()*largura) - 90;

        posicaoX = posicaoX < 0 ? 0 :posicaoX;
        posicaoY = posicaoY < 0 ? 0 :posicaoY;

    var mosquito = document.createElement('img');
        mosquito.src = '../imagens/mosca.png';
        mosquito.className = tamanhoAleatorio() +' '+ladoAleatorio();
        mosquito.style.left = posicaoX + 'px';
        mosquito.style.top = posicaoY + 'px';
        mosquito.style.position = 'absolute'
        mosquito.id = 'mosquito'
        mosquito.onclick = remover;

        document.body.appendChild(mosquito);
}

    posicaoaleatoria();

    setInterval(function(){
        posicaoaleatoria();
    }, 1000);
