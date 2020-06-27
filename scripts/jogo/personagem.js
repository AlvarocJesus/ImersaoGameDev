class Personagem extends Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
      super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    
      this.variacaoY = variacaoY;
      this.yInicial = height - this.altura - this.variacaoY;
      this.y = this.yInicial;
      
      this.velocidadeDoPulo = 0;
      this.gravidade = 6;
      this.alturaDoPulo = -50;
      this.pulos = 0;
  }

  pula(){
      if(this.pulos < 2){
        this.velocidadeDoPulo = this.alturaDoPulo;
        this.pulos++
      }
    }

  aplicaGravidade(){
      this.y = this.y + this.velocidadeDoPulo
      this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
      
      if(this.y > this.yInicial){
        this.y = this.yInicial;
        this.pulos = 0;
      }
    }    
  
  estaColidindo(inimigo){
    const precisao = .7;
    const colisao =  collideRectRect(
    this.x, 
    this.y, 
    this.altura * precisao, 
    this.largura * precisao,
    inimigo.x,
    inimigo.y,
    inimigo.altura * precisao,
    inimigo.largura * precisao
  )
    
    return colisao;
  }
}