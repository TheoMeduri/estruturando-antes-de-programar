class Form {
  constructor() {
//     Crie uma caixa de entrada usando createInput(‘Name’). Isso exibirá uma caixa vazia com o texto fornecido no
// atributo placeholder
   this.input = createInput("").attribute("placeholder", "Digite seu nome")
   

//     Crie um botão usando createButton(“Play”), que pode ser
// clicado com o texto Play nele.
   this.playButton = createButton("Play");

  
    // Crie um título usando createElement(“h2”), que será exibido
    // para dar as boas-vindas ao jogador.
    this.titleImg = createImg("./assets/title.png", "título do jogo");
    this.greeting = createElement("h2");
  }


//   Adicione a posição para a classe form: Lembrando que, a ordem em que você
// atribui a posição aos objetos é variável.

  setElementsPosition() {
    this.titleImg.position(120, 100);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

 /* setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  } */



//   desaparecer o botão e a caixa de entrada quando o botão for
// pressionado
  hide() {
   this.greeting.hide();
   this.playButton.hide();
   this.input.hide();  
  }


//   escrever o código para exibir uma
// saudação quando o botão for pressionado.
  handleMousePressed() {
    this.playButton.mousePressed(() => {

      // Esconder as entradas e os botões
   this.input.hide();
   this.playButton.hide();
//       Criar um elemento h2 e usá-lo para
// cumprimentar o jogador quando ele fizer o login.
      var message = `
      Olá ${this.input.value()}
      </br>espere outro jogador entrar...`;
      this.greeting.html(message);
      player.name = this.input.value();
      player.index = 1;
      //player.addPlayer();
    });
  }

  display() {
   this.setElementsPosition();
    //this.setElementsStyle();
    this.handleMousePressed();
  }
}
