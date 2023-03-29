//create a new scene
let gameScene =new Phaser.Scene('Game');

gameScene.init =function(){

}
gameScene.preload = function (){
    this.load.image('ground', 'assets/ground.png');
    this.load.image('platform', 'assets/platform.png');
    this.load.image('block','assets/block.png');
    this.load.image('goal','assets/gorilla3.png');
    this.load.image('barrel','assets/barrel.png');

    //load spritesheets
    this.load.spritesheet('player', 'assets/player_spritesheet.png', {
        frameWidth:28,
        frameHeight: 30,
        margin:1,
        spacing:1
    })
    this.load.spritesheet('fire','assets/fire_spritesheet.png',{
        frameWidth:20,
        frameHeight:21,
        margin:1,
        spacing: 1
    })
};
gameScene.create=function(){
    //1) adding exisiting sprites to the physics system
    //sprite creation
    let ground = this.add.sprite(180 , 400, 'ground')
    //add sprite to the physics system
    this.physics.add.existing(ground, true);
    //disabling gravity
    //ground.body.allowGravity=false;
    //make the ground immoveable
    //ground.body.immovable=true;
    //2) creating and adding sprites to the physics system
    let ground2 = this.physics.add.sprite(180,200,'ground')

    //collision detection
    this.physics.add.collider(ground,ground2);



}
let config={
    type: Phaser.Auto,
    width: 360,
    height:640,
    scene: gameScene,
    title: 'Monster Kong',
    pixelArt: false,
    physics:{
        default: 'arcade',
        arcade:{
            //will most likely change this value
            gravity:{y: 1000},
            //give us a visual information about the physical bodies we are creating
            debug:true
        }
    }
};
let game = new Phaser.Game(config)
