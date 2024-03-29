class Form {
  constructor() {
      this.input = createInput("Enter your name");
      this.button = createButton('PLAY');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
  }

  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Scooter Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/1 - 920 , displayHeight/2 - 70);
    this.button.position(displayWidth/2 + 30, displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
    
  }
}