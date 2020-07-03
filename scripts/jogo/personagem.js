class Personagem extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
      
      this.yInicial = height - this.altura - variacaoY;
      this.y = this.yInicial;
      this.velocidadeDoPulo = 0;
      this.gravidade = 2;
      this.quantidadePulos = 0;
      this.invencivel = false;
  }
  
  
  verificaDoubleJump(quantidadePulos){
    if (quantidadePulos >= 2){
      return false;
    }
    else{
     return true; 
    }
  }
  
  pula(){
    if (this.verificaDoubleJump(this.quantidadePulos)){
      this.velocidadeDoPulo = -30;
      this.quantidadePulos++;
    }
  }
  
  aplicaGravidade(){
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    if(this.y > this.yInicial){
        this.y = this.yInicial
        this.quantidadePulos = 0;
    }
  }
  
  tornarInvencivel(){
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false
    }, 1000);
  }
  
  estaColidindo(inimigo){
    if (this.invencivel){
     return false; 
    }
    const precisao = 0.7;
    const colisao = collideRectRect(
     this.x, 
     this.y, 
     this.largura * precisao, 
     this.altura * precisao, 
     inimigo.x, 
     inimigo.y, 
     inimigo.largura * precisao, 
     inimigo.altura * precisao);
    return colisao;
  }
}