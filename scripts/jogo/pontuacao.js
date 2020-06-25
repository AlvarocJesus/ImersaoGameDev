class Pontuacao{
    constructor(){
      this.pontos = 0;
    }
    
    exibePonto(){
      textAlign(RIGHT);
      fill('#fff');
      textSize(50);
      text(parseInt(this.pontos), width-30, 50);
    }
    
    adicionarPonto(){
      this.ponto = this.ponto + 0.2;
    }
  }