class Sounds {

  constructor (){

    this.bomb =  document.createElement("audio");
    this.bomb.src = ("./sound/sound-bomb.mp3");

    this.powerUp =  document.createElement("audio");
    this.powerUp.src = ("./sound/sound-powerup.wav");

    this.dead =  document.createElement("audio");
    this.dead.src = ("./sound/sound-died.wav");

    this.speed =  document.createElement("audio");
    this.speed.src = ("./sound/sound-speed.wav");

    this.enemyDies =  document.createElement("audio");
    this.enemyDies.src = ("./sound/sound-enemyDies.mp3");
    
    this.plant =  document.createElement("audio");
    this.plant.src = ("./sound/sound-plant.wav");
  }


  play (event){

    switch (event){
  
      case 'explosion': this.bomb.play(); this.bomb.volume = 0.9;
                        break;
      case 'powerUp':   this.powerUp.play(); this.powerUp.volume = 0.7;
                        break;
      case 'dead':      this.dead.play();
                        break;
      case 'speed':     this.speed.play();
                        break;
      case 'enemyDies': this.enemyDies.play();
                        break;
      case 'plant':     this.plant.play();
                        break;
    }   
  }

}

