class Jogo {
    constructor(){
      this.inimigoAtual = 0;
    }
    
    setup(){
      cenario = new Cenario(imagemCenario, 3);
      pontuacao = new Pontuacao();
    
      personagem = new Personagem(matrizPersonagem, imagemPersonagens, 0, 30, 110, 135, 220, 270);
    
      const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10, 100);
      const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 52, 52, 200, 150, 10, 100);
      const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10, 100);
    
      inimigos.push(inimigo);
      inimigos.push(inimigoVoador);
      inimigos.push(inimigoGrande);
      
      
    }
    
    keypress(key){
      if(key === 'ArrowUp'){
        personagem.pula();
        somDoPulo.play();
      }
    }

    draw(){
		cenario.exibe();
		cenario.move();
		
		pontuacao.exibePonto();
		pontuacao.adicionarPonto();
		
		personagem.exibe();
		personagem.aplicaGravidade();
		
		const inimigo = inimigos[this.inimigoAtual];
		const inimigoVisivel = inimigo.x < -inimigo.largura;
		
		if(inimigoVisivel){
			this.inimigoAtual++;
			if(this.inimigoAtual > 2){
				this.inimigoAtual = 0;
			}
			inimigo.velocidade = parseInt(random(10, 30));
		}
		inimigo.exibe();
		inimigo.move();
			
		if(personagem.estaColidindo(inimigo)){
			image(imagemGameOver, width/2 - 200, height/3);
			noLoop();
		}
    }
}