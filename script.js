/*  Students: Please use this week's project for Week 13: Assignment 16: Prototype. 
     You will need to replace the contents of this JavaScript file with your own work, 
     and create any other files, if any, required for the assignment.
     When you are done, be certain to submit the assignment in Canvas to be graded. */

var g_grid;

let scene1 = {
  key: 'scene1',
  active: true,
  preload: titlePreload,
  create: titleCreate,
  update: titleUpdate
};

let scene2 = {
  key: 'scene2',
  active: false,
  preload: gamePreloadFunction,
  create: GameStartFunction,
  update: myGameUpdateCode
};

let config = {
  //list of property names and there associated values.
  width: 900,
  height: 900,
  //3200 w by 1920 h for world borders
  type: Phaser.WEBGL,
  physics: {
    default: 'arcade',
    arcade: {
      //gravity:{y:300},
      debug: true
    }
  },
  scene: [scene1, scene2],//multiple scenes
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  } // scale manager used to scale game up to fit display 
};

let Game = new Phaser.Game(config);