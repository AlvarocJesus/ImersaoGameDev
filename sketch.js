function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(40);
	somDoJogo.loop();
	jogo = new Jogo();
	jogo.setup();
	telaInicial = new TelaInicial();
	cenas = {
		jogo,
		telaInicial
	};
	botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
}

function keyPressed(){
	jogo.keyPress(key);
}

function draw() {
	cenas[cenaAtual].draw();
}