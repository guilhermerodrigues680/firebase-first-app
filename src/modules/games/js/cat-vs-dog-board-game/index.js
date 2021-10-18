// const images = {
//   catFace: require("../../assets/cat-vs-dog-board-game/cat-face.svg"),
//   dogFace: require("../../assets/cat-vs-dog-board-game/dog-face.svg"),
// };
// console.debug(images);

// let img = new Image();
// img.addEventListener(
//   "load",
//   () => {
//     console.debug("load", img);
//   },
//   false
// );
// img.src = images.catFace;

class Game {
  static version = "v0";
  _lastTime = 0;
  _reqAnimationId = null;

  /**
   *
   * @param {HTMLCanvasElement} canvas
   * @param {Number} gameWidth
   * @param {Number} gameHeight
   * @param {Function} _onAnimateError
   */
  constructor(canvas, gameWidth, gameHeight, _onAnimateError = undefined, _onFPS = undefined) {
    if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
      throw new Error("É necessário um canvas para criar um game");
    }
    if (!gameWidth || !gameHeight) {
      throw new Error("É necessário informar as dimensoes do game");
    }

    // Armazenar propriedades
    this._canvas = canvas;
    this._gameWidth = gameWidth;
    this._gameHeight = gameHeight;
    this._onAnimateError = _onAnimateError;
    this._onFPS = _onFPS;

    // Iniciar componentes
    this._board = new Board(0, 0, this._gameWidth, this._gameHeight);

    // Sucesso
    console.info("Game.version", Game.version);
  }

  _gameLoop() {
    const ctx = this._canvas.getContext("2d");
    ctx.clearRect(0, 0, this._gameWidth, this._gameHeight);
    ctx.rect(0, 0, this._gameWidth, this._gameHeight);
    // ctx.fillStyle = "rgba(0,0,0,0.6)";
    ctx.fillStyle = "rgba(255,255,255,0.6)";
    ctx.fill();

    this._board.draw(ctx);
  }

  _animate(timestamp) {
    const deltaTime = timestamp - this._lastTime;
    this._lastTime = timestamp;

    this._onFPS && this._onFPS(Math.round(1000 / deltaTime), Math.round(deltaTime * 100) / 100);

    try {
      this._gameLoop();
      this._reqAnimationId = requestAnimationFrame((timestamp) => this._animate(timestamp));
    } catch (error) {
      console.error("_animate error:", error);
      this._onAnimateError && this._onAnimateError(error);
    }
  }

  start() {
    this._reqAnimationId = requestAnimationFrame((timestamp) => this._animate(timestamp));
    console.info("jogo iniciado");
  }

  stop() {
    cancelAnimationFrame(this._reqAnimationId);
    this._reqAnimationId = null;
    console.info("jogo encerrado");
  }

  print() {
    console.debug(this._canvas);
  }

  static printVersion() {
    return Game.version;
  }

  get gameVersion() {
    return Game.version;
  }
}

class Board {
  // path = null;

  constructor(x, y, width, height) {
    width, height;
    this._x = x;
    this._y = y;
  }

  /**
   * @param {CanvasRenderingContext2D} context
   */
  draw(context) {
    this.path = new Path2D();
    this.path.arc(this._x++, this._y++, 50, 0, 2 * Math.PI);
    context.stroke(this.path);
    // context.drawImage()
  }
}

export default {
  Game,
};
