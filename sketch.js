function setup() {
	createCanvas(windowWidth, windowHeight);
	jogo = new Jogo();
	jogo.setup();
	frameRate(40);
	telaInicial = new TelaInicial();
	somDoJogo.loop();
	cenas = {
		jogo,
		telaInicial
	};
	botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
}

function keyPressed(){
	jogo.keypress(key);
}

function draw() {
	cenas[cenaAtual].draw();
}