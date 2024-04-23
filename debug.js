function startTimer() {
  
    setInterval(function () {
		//pega os minutos e segundos, apartir dos segundos brutos
        minutes = parseInt(timer/60 ,10);
        seconds = parseInt (timer%60,10);
		
		//converte numeros de uma casa para duas, adicionando o 0
		minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
		
        display.textContent = minutes + ":" + seconds; //mostra o timer na tela
		
		//pausar o timer
		if (pausado === false){
        //mostra as pausas 
		document.getElementById("Marcaçoes").innerHTML = "Pausas: " + marcacoes;
		
		timer -= 1;
		//todo o processo de alterar de timer
		if (timer <0){
			
			if (tempo === 0.08){
				marcacoes+=1;
				if (marcacoes === 4){
					Blonga();
					marcacoes = 0;
				}else {
					Bcurta();
			}
			}
			else if (tempo > 0 && tempo < 25){
				Pomodoro();
			}
		timer = duration;
		}
		
		}
    }, 1000);
}
var timer=0;
var minutes;
var seconds; 
var pausado = true;
var tempo = 5;
var marcacoes=0;

function updateButton() {
  if (pausado === true) {
    pausado = false;
	document.getElementById("textoTimer").innerHTML = "Pausar";
	document.getElementById("pause").style.border = "5px solid gray";
  } else {
    pausado = true;
	document.getElementById("textoTimer").innerHTML = "Iniciar";
	document.getElementById("pause").style.border = "5px solid green";
  }
}

function Pomodoro(){
	tempo = 0.08;
	duration = 60 * tempo;
	timer = duration;
	document.getElementById("front").style.border = "15px solid red";
	document.getElementById("pomodoro").style.border = "5px solid red";
	document.getElementById("pl").style.border = "5px solid white";
	document.getElementById("pc").style.border = "5px solid white";
	//alterar a cor de fundo pra vermelha ou outra cor ai e deixar o botao do pomodoro apagado
}

function Bcurta(){
	tempo = 0.04;
	duration = 60 * tempo;
	timer=duration;
	document.getElementById("front").style.border = "15px solid cyan";
	document.getElementById("pomodoro").style.border = "5px solid white";
	document.getElementById("pl").style.border = "5px solid white";
	document.getElementById("pc").style.border = "5px solid cyan";
	//alterar a cor de fundo pra vermelha ou outra cor ai e deixar o botao do pomodoro apagado
}
function Blonga(){
	tempo = 0.1;
	duration = 60 * tempo;
	timer=duration;
	document.getElementById("front").style.border = "15px solid blue";
	document.getElementById("pomodoro").style.border = "5px solid white";
	document.getElementById("pl").style.border = "5px solid blue";
	document.getElementById("pc").style.border = "5px solid white";
}

function Clear (){
marcacoes = 0;
}

window.onload = function inicializador() {
    var duration = 60 * tempo; // alterar a quantidade de minutos, Converter para segundos
        display = document.querySelector('#timer'); // selecionando o timer
    startTimer(); // iniciando o timer
};

