var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace("?", "")

if (nivel === "normal") {
  criaMosquitoTempo = 1500
} else if(nivel === "dificil") {
  criaMosquitoTempo = 1000
} else if(nivel === "chucknorris") {
  criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo() {
   altura = window.innerHeight
   largura = window.innerWidth
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
  tempo -= 1
  if(tempo < 0) {
    clearInterval(cronometro)
    clearInterval(criaMosquito)
    document.location.href = "win.html"

  } else {
    document.getElementById("cronometro").innerHTML = tempo

  }
}, 1000)

/*=====CRIAR ELEMENTO HTML=====*/

function posicaoRondomica() {
  
  /*Remover o mosquito anterior (caso exista)*/
  if(document.getElementById('mosquito')) {
  document.getElementById('mosquito').remove()

  if(vidas > 3) {

    document.location.href = "gameover.html"

  } else {

    document.getElementById("v" + vidas).src = "imagens/coracao_vazio.png"
    vidas++
  }
    
  }
  var posicaoX = Math.floor(Math.random() * largura) - 90
  var posicaoY = Math.floor(Math.random() * altura) - 90

  /* Operador ternário..

  Se x for menor < 0 se for(?) recebe 0: x

  */
  posicaoX = posicaoX < 0 ? 0: posicaoX
  posicaoY = posicaoX < 0 ? 0: posicaoY

  /*=====CRIANDO ELEMENTO HTML=====*/ 
  
  var mosquito = document.createElement('img')
  mosquito.src = "imagens/mosca.png"
  
  document.body.appendChild(mosquito)
  mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio()
  mosquito.style.left = posicaoX + "px"
  mosquito.style.top = posicaoY + "px"
  mosquito.style.position = "absolute"
  mosquito.id = "mosquito"
  mosquito.onclick = function() {
    this.remove()
  }
}

function tamanhoAleatorio() {
  let classe = Math.floor(Math.random() *3)

  switch(classe) {
    case 0:
      return "mosquito1"

    case 1:
      return "mosquito2"

    case 2:
      return "mosquito3"
      
  }
}

function ladoAleatorio() {
  let classe = Math.floor(Math.random() *2)

  switch(classe) {
    case 0:
      return "ladoA"

    case 1:
      return "ladoB"
      
  }
}