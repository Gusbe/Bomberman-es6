'use scrict'

class Enemy {

  constructor (canvas, initX, initY) {
    this.posX = initX;
    this.posY = initY;
    this.speed = 550; //milliSeconds by square;
    this.lastMove = Date.now();
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.enemyImage = new Image();
    this.enemyImage.src = "./img/enemy.png";
  }

  
  canIMoveNow (){

    if(this.lastMove + this.speed < Date.now()){
  
      this.lastMove = Date.now();
  
      return true;
    }
    else{
  
      return false;
    }
  }


  move (x, y) {

    this.posX = x;
    this.posY = y;
  }


  NextPosition (direction) {

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


  incrementSpeed () {

    this.speed -= 100;
  }


  print () {

    this.ctx.drawImage(this.enemyImage, this.posX*32, this.posY*32, 32, 32);
  }


  kills (x, y) {

    if(this.posX === x && this.posY === y){
  
      return true;
    }
    else{
  
      return false;
    }
    
  }


  GenerateRandomMovement (grid) {

    //Erratic movement
    let options = [];
  
    if(grid.getCellElement(this.posX,this.posY-1) !== 'S' && grid.getCellElement(this.posX,this.posY-1) !== 'W' && grid.getCellElement(this.posX,this.posY-1) !== 'B' && grid.getCellElement(this.posX,this.posY-1) !== 'E'){ options.push('U'); }
    if(grid.getCellElement(this.posX+1,this.posY) !== 'S' && grid.getCellElement(this.posX+1,this.posY) !== 'W' && grid.getCellElement(this.posX+1,this.posY) !== 'B' && grid.getCellElement(this.posX+1,this.posY) !== 'E'){ options.push('R'); }
    if(grid.getCellElement(this.posX,this.posY+1) !== 'S' && grid.getCellElement(this.posX,this.posY+1) !== 'W' && grid.getCellElement(this.posX,this.posY+1) !== 'B' && grid.getCellElement(this.posX,this.posY+1) !== 'E'){ options.push('D'); }
    if(grid.getCellElement(this.posX-1,this.posY) !== 'S' && grid.getCellElement(this.posX-1,this.posY) !== 'W' && grid.getCellElement(this.posX-1,this.posY) !== 'B' && grid.getCellElement(this.posX-1,this.posY) !== 'E'){ options.push('L'); }
  
    let nextCoordinates = [];
    nextCoordinates = this.NextPosition(options[Math.floor(Math.random()*options.length)]);
  
    this.move(nextCoordinates[0],nextCoordinates[1]);
  }

}













