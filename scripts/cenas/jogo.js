
class Jogo {
  constructor() {
    this.inimigoAtual = 0;
    console.log('entrou no constructor')
  }

  setup() {
    cenario = new Cenario(imagemCenario, 4);
    pontuacao = new Pontuacao();
    
    vida = new Vida(3, 3);
    
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
    
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 15, 100);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 15, 100);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 15, 100);
    
    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula();
      somDoPulo.play();
    }
  }

  // Tem um while(true) nesse método
  draw() {
    cenario.exibe();
    cenario.move();
    
    vida.draw();

    pontuacao.exibe();
    pontuacao.adicionarPonto();

    personagem.exibe();
    personagem.aplicaGravidade();
    
    const inimigo = inimigos[this.inimigoAtual]
    const inimigoVisivel = inimigo.x < -inimigo.largura 

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.inimigoAtual = parseInt(random(0, 3))
      //inimigoAtual++;
      //if (inimigoAtual > 2){
      //  inimigoAtual = 0; 
      //}

      inimigo.velocidade = parseInt(random(8, 30));
    }

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida();
      personagem.tornarInvencivel();
      if (vida.vidas === 0){
        image(imagemGameOver, width / 2 - 200, height / 3);
        somDoJogo.stop();
        noLoop();
      }
    }


    // inimigos.forEach(inimigo => {
    // inimigo.exibe();
    // inimigo.move();  
    //   if (personagem.estaColidindo(inimigo)){
    //     image(imagemGameOver, width / 2 - 200, height / 3)
    //     somDoJogo.stop()
    //     noLoop();
    //   }
    // })

    // background(200,100,5);
    // circle(mouseX, mouseY, 200)

  }
}