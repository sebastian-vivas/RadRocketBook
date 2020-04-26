import Phaser from "phaser";
import config from './config';
import GameScene from './Scenes/Game';
import BootScene from './Scenes/Boot';
import TitleScene from "./Scenes/TitleScene";
import UIScene from "./Scenes/UI";

class Game extends Phaser.Game {
  constructor () {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Game', GameScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('UI', UIScene);
    this.scene.start('Boot');
  };
};

window.game = new Game();
window.addEventListener('resize', (event) => {
  game.scale.resize(window.innerWidth, window.innerHeight);
});
