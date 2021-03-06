'use scrict';

function main(){
  
  const mainElement = document.querySelector('main');

  function buildDom(html){

    mainElement.innerHTML = html;

    return mainElement;
  }


  function buildSplashScreen(){

    buildDom(`
    <section>
      <img id="title" src="./img/menu.jpg">
      <a id="play" href="#">PLAY GAME</a>
      <p id="instructions-title">Instructions:</p>
      <p  id="instructions">Move the player with the arrows. Put a bomb with the space bar.</p>
      <p  id="instructions">Destroy all the enemies before the times up. Don't explode yourself :)</p>

      <audio src="./sound/title.mp3" controls autoplay loop>
    </section>`);

    const startButton = document.querySelector('#play');
    startButton.addEventListener('click', function () { buildGameScreen(3) });  //initial lives
  }


  function buildGameScreen(credits){

    const gameScreen = buildDom(`
    <section>
      <div id="top-info">
        <div id="lifes">Lifes: 3</div>
        <img src="./img/title-small.jpg" id="title-small">
        <div id="time"></div>
      </div>
      <canvas class="game-container"></canvas>
      <div id="bombs"></div>
      <audio src="./sound/game.mp3" controls autoplay>
    </section>
    `);
    
    //Size of the game board canvas.
    const gameContainerElement = document.querySelector('.game-container');
    width = 672;
    height = 416;
    const canvasElement = document.querySelector('canvas');
    canvasElement.setAttribute('width', width);
    canvasElement.setAttribute('height', height);

    //Here starts the game
    const game = new Game(canvasElement,credits); //Initial lives
    game.startLoop();

    game.setGameOverCallBack(buildGameOverScreen);
    game.setGameOverWithLifesCallBack(buildGameOverWithLifesScreen);
    game.setWinnerCallBack(buildWinnerScreen);
    
   
 
    document.addEventListener('keydown', function(event){
      
      switch(event.keyCode){
        
        case 32: game.plantBomb(); break;       //Space key
        case 37: game.movePlayer('L'); break;   //Left key
        case 38: game.movePlayer('U');  break;  //Up key
        case 39: game.movePlayer('R');  break;  //Right key
        case 40: game.movePlayer('D');  break;  //Down key
        default: break;
      }

      
    });
   
  }

  function buildGameOverScreen(){

    buildDom(`
    <section>
      <h1>Game Over :(</h1>
      <h2>Good luck next time!</h2>
      <a id="play" href="#">PLAY AGAIN?</a>
      <audio src="./sound/gameover.mp3" controls autoplay loop>
    </section>
    `);

    const startButton = document.querySelector('#play');
    startButton.addEventListener('click', function () { buildGameScreen(3) });
  }

  function buildGameOverWithLifesScreen(credits){
    
    buildDom(`
    <section>
      <h1>You are dead!</h1>
      <h2>You still have ${credits} lives!</h2>
      <a id="play" href="#">PLAY AGAIN?</a>
      <audio src="./sound/gameover.mp3" controls autoplay>
    </section>
    `);

    const startButton = document.querySelector('#play');
    startButton.addEventListener('click', function () { buildGameScreen(credits) });
  }

  function buildWinnerScreen(){
    
    buildDom(`
    <section>
      <h1>You win!</h1>
      <a id="play" href="#">PLAY AGAIN?</a>
      <audio src="./sound/complete.mp3" controls autoplay>
    </section>`);
    
    const startButton = document.querySelector('#play');
    startButton.addEventListener('click', function () { buildGameScreen(3) });  //Initial credits = 3.
  }

  buildSplashScreen();
}

window.addEventListener('load', main());