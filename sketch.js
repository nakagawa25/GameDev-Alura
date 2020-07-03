function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60); 
  somDoJogo.loop();
  telaInicial = new TelaInicial();
  jogo = new Jogo();
  cenas = {
    telaInicial,
    jogo
   };
  jogo.setup();
  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
   cenas[cenaAtual].draw()
  // jogo.draw();
}
