// create a new scene
let gameScene = new Phaser.Scene('Game');
// initiate scene parameters
gameScene.init = function() {
  // player speed
  this.playerSpeed = 3;
  // enemy speeds
  this.enemyMinSpeed = 2;
  this.enemyMaxSpeed = 4.5;
  // boundaries
  this.enemyMinY = 80;
  this.enemyMaxY = 280;
  // we are not terminating
  this.isTerminating = false;
};
// load assets
gameScene.preload = function(){
  // load images
  this.load.image('background', 'assets/background.png');
  this.load.image('player', 'assets/player.png');
  this.load.image('enemy', 'assets/dragon.png');
  this.load.image('goal', 'assets/treasure.png');
};
// called once after the preload ends
gameScene.create = function() {
  // create bg sprite
  let bg = this.add.sprite(0, 0, 'background');
  // change the origin to the top-left corner
  bg.setOrigin(0,0);
  // create the player
  this.player = this.add.sprite(40, this.sys.game.config.height / 2, 'player');
  // we are reducing the width and height by 50%
  this.player.setScale(0.5);
  // goal
  this.goal = this.add.sprite(this.sys.game.config.width - 80, this.sys.game.config.height / 2, 'goal');
  this.goal.setScale(0.6);

  this.enemy = this.add.sprite(this.sys.game.config.width/2, this.sys.game.config.height/2,'enemy')
  this.enemy.setScale(0.6);
 
  cursors = this.input.keyboard.createCursorKeys();
  keys=this.input.keyboard.addKeys("W,A,S,D");
};
// this is called up to 60 times per second
gameScene.update = function(){
  // don't execute if we are terminating
  if(this.isTerminating) return;


    // player uses WASD
    if (keys.A.isDown && this.player.x>20){
        this.player.x -= this.playerSpeed;
    }
    else if (keys.D.isDown && this.player.x<560)
    {
        this.player.x += this.playerSpeed;
    }
    else if (keys.S.isDown && this.player.y<285){
        this.player.y += this.playerSpeed;
    }
    else if (keys.W.isDown && this.player.y>70)
    {
        this.player.y-=this.playerSpeed;
    }
  // treasure overlap check
  let playerRect = this.player.getBounds();
  let treasureRect = this.goal.getBounds();

  if(Phaser.Geom.Intersects.RectangleToRectangle(playerRect, treasureRect)) {
    console.log('reached goal!');

    // end game
    return this.gameOver();
  }
    // enemy uses arrow key 
    if (cursors.left.isDown){
        this.enemy.x -= this.playerSpeed;
    }
    else if (cursors.right.isDown)
    {
        this.enemy.x += this.playerSpeed;
    }
    else if (cursors.down.isDown){
        this.enemy.y += this.playerSpeed;
    }
    else if (cursors.up.isDown)
    {
        this.enemy.y-=this.playerSpeed;
    }
//  check enemy overlap
    let enemyRect = this.enemy.getBounds();
    if(Phaser.Geom.Intersects.RectangleToRectangle(playerRect, enemyRect)) {
      console.log('Game over!');
      // end game
      return this.gameOver();
    }
};

gameScene.gameOver = function() {
  // initiated game over sequence
  this.isTerminating = true;
  // shake camera
  this.cameras.main.shake(1000);
  // listen for event completion
  this.cameras.main.on('camerashakecomplete', function(camera, effect){
    // fade out
    this.cameras.main.fade(500);
  }, this);
  this.cameras.main.on('camerafadeoutcomplete', function(camera, effect){
    // restart the Scene
    this.scene.restart();
  }, this);
};

// set the configuration of the game
let config = {
  type: Phaser.AUTO, // Phaser will use WebGL if available, if not it will use Canvas
  width: 640,
  height: 360,
  scene: gameScene
};

// create a new game, pass the configuration
let game = new Phaser.Game(config);