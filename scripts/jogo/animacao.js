class Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    this.matriz = matriz;
    this.imagem = imagem;
    this.x = x;
    this.variacaoY = variacaoY;
    this.y = height - altura - variacaoY;
    this.largura = largura;
    this.altura = altura;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    
    this.pontoMatriz = 0;
  }
  
    
  exibe(){
    image(this.imagem, this.x, this.y, this.largura, this.altura, 
          this.matriz[this.pontoMatriz][0], 
          this.matriz[this.pontoMatriz][1], 
          this.larguraSprite, this.alturaSprite);
    this.animaPersonagem();
  }
  
  animaPersonagem(){
    this.pontoMatriz++;
    
    if(this.pontoMatriz >= this.matriz.length - 1){
      this.pontoMatriz = 0;
    }
  }
}