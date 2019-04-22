'use scrict'

class Player {

  constructor (canvas){
    this.posX = 1;
    this.posY = 1;
    this.bombsAvailable = 2;
    this.rangeBombs = 3;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.bombermanImage = new Image();
    this.deadBombermanImage = new Image();
    this.groundImage = new Image();
    this.fireImage = new Image();

    this.bombermanImage.src = "./img/bomberman.gif";
    this.deadBombermanImage.src = "./img/deadBomberman.png";
    this.groundImage.src = "./img/ground.png";
    this.fireImage.src = "./img/fire.png";
  }


  move (x, y){

    this.posX = x;
    this.posY = y;
  }
  
  nextPosition (direction) {
  
    let nextPositionY = this.posY;
    let nextPositionX = this.posX;
  
    switch(direction){
  
      case 'U': nextPositionY--;  break;  //Up
      case 'D': nextPositionY++;  break;  //Down
      case 'R': nextPositionX++;  break;  //Rigth
      case 'L': nextPositionX--;  break;  //Left
    }
    
    return [nextPositionX , nextPositionY];
  }
  
  addBombsAvailable  (){
  
    this.bombsAvailable++;
  }
  
  reduceBombsAvailable  (){    //TODO: REMOVE IT?
  
    this.bombsAvailable--;
  }
  
  addBombsRange  (){
  
    this.rangeBombs++;
  }
  
  print  () {
  
    this.ctx.drawImage(this.bombermanImage, this.posX*32, this.posY*32, 32, 32);
  }
  
  printDead  (causeOfDeath) {
    
    if(causeOfDeath === 'fire'){
  
      this.ctx.drawImage(this.fireImage, this.posX*32, this.posY*32, 32, 32);
    }
    else{
  
      this.ctx.drawImage(this.groundImage, this.posX*32, this.posY*32, 32, 32);
    }
    
    this.ctx.drawImage(this.deadBombermanImage, this.posX*32, this.posY*32, 32, 32);
  }














}

