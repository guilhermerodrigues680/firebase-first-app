// https://phaser.io/tutorials/making-your-first-phaser-3-game-portuguese/part4

import Phaser from "phaser";

class TitleScene extends Phaser.Scene {
  // /**@type{Phaser.Types.Physics.Arcade.SpriteWithDynamicBody} */
  // _player = null;
  _score = 0;
  _gameOver = false;

  constructor() {
    super();
  }

  preload() {
    // this.load.image("logo", logoImg);
    console.debug("preload");
    const images = {
      sky: require("../../assets/phaser3-tutorial/img/sky.png"),
      ground: require("../../assets/phaser3-tutorial/img/platform.png"),
      star: require("../../assets/phaser3-tutorial/img/star.png"),
      bomb: require("../../assets/phaser3-tutorial/img/bomb.png"),
      dude: require("../../assets/phaser3-tutorial/img/dude.png"),
    };
    console.debug(images);
    this.load.image("sky", images.sky);
    this.load.image("ground", images.ground);
    this.load.image("star", images.star);
    this.load.image("bomb", images.bomb);
    this.load.spritesheet("dude", images.dude, {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create() {
    console.debug("create");
    this.add.image(400, 300, "sky"); // centro da imagem

    const platforms = this.physics.add.staticGroup();
    platforms.create(400, 568, "ground").setScale(2).refreshBody();
    platforms.create(600, 400, "ground");
    platforms.create(50, 250, "ground");
    platforms.create(750, 220, "ground");

    this._player = this.physics.add.sprite(100, 450, "dude");
    this._player.setBounce(0.2);
    this._player.setCollideWorldBounds(true);
    // this._player.body.setGravity(300);

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "turn",
      frames: [{ key: "dude", frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    // Estrelas
    this._stars = this.physics.add.group({
      key: "star",
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 },
    });

    this._stars.children.iterate(function (child) {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });

    // Texto score (fonte padrao Courier)
    this._scoreText = this.add.text(16, 16, "score: 0", { fontSize: "32px", fill: "#000" });

    // Bombas
    this._bombs = this.physics.add.group();

    // Cursors
    this._cursors = this.input.keyboard.createCursorKeys();
    console.debug(this._cursors);

    // Colisoes
    this.physics.add.collider(this._player, platforms);
    this.physics.add.collider(this._stars, platforms);
    this.physics.add.collider(this._bombs, platforms);
    this.physics.add.collider(this._player, this._bombs, this._hitBomb, null, this);

    // Sobreposicoes
    this.physics.add.overlap(this._player, this._stars, this._collectStar, null, this);
  }

  update() {
    // console.debug("update");
    if (this._cursors.left.isDown) {
      this._player.setVelocityX(-160);

      this._player.anims.play("left", true);
    } else if (this._cursors.right.isDown) {
      this._player.setVelocityX(160);

      this._player.anims.play("right", true);
    } else {
      this._player.setVelocityX(0);

      this._player.anims.play("turn");
    }

    // https://www.thepolyglotdeveloper.com/2020/09/include-touch-cursor-gesture-events-phaser-game/
    if (
      (this._cursors.up.isDown || this.input.activePointer.isDown) &&
      this._player.body.touching.down
    ) {
      this._player.setVelocityY(-330);
    }
  }

  /**
   * @param {Phaser.Types.Physics.Arcade.GameObjectWithBody} star
   */
  _collectStar(player, star) {
    player;
    this._score += 10;
    this._scoreText.setText(`Score: ${this._score}`);
    star.disableBody(true, true);

    // Se acabou as estrelas solta uma bomba
    if (this._stars.countActive(true) === 0) {
      this._stars.children.iterate((child) => {
        child.enableBody(true, child.x, 0, true, true);
      });

      const x = player.x < 400 ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
      const bomb = this._bombs.create(x, 16, "bomb");
      bomb.setBounce(1);
      bomb.setCollideWorldBounds(true);
      bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    }
  }

  _hitBomb(player, bomb) {
    bomb;
    this.physics.pause();
    player.setTint(0xff0000);
    player.anims.play("turn");
    this._gameOver = true;
  }
}

function newGame(parent, width, height) {
  const config = {
    type: Phaser.AUTO,
    parent,
    width,
    height,
    scene: TitleScene,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 300 },
        debug: false,
      },
    },
  };

  config.parent = parent;
  const game = new Phaser.Game(config);
  return game;
}

export default {
  newGame,
};
