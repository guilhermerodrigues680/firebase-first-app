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
    this._board = new Board(this._gameWidth, this._gameHeight);

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

// class BoardSquare {}

class Board {
  constructor(width, height) {
    // O board sempre será quadrado
    // O tamanho dele será menor lado
    // E sempre será calculado o centro
    const padding = 80;
    const size = width < height ? width - padding : height - padding;
    const center = {
      x: Math.ceil(width / 2),
      y: Math.ceil(height / 2),
    };

    this._size = size;
    this._center = center;
  }

  _getBoardPoints(centerX, centerY, size) {
    const degToRad = (degrees) => (Math.PI / 180) * degrees;
    const points = [];

    // Primeiro ponto: central
    points.push({
      x: centerX,
      y: centerY,
    });

    // Demais pontos sobre o circulo
    const nPoints = 5;
    const firstPointAngleDeg = -90;
    for (let i = 0; i < nPoints; i++) {
      const stepDeg = 360 / nPoints;
      const angleDeg = i * stepDeg + firstPointAngleDeg;
      const angleRad = degToRad(angleDeg);
      const radius = size / 2;
      points.push({
        x: centerX + Math.cos(angleRad) * radius,
        y: centerY + Math.sin(angleRad) * radius,
      });
    }

    return points;
  }

  /**
   * @param {CanvasRenderingContext2D} context
   */
  draw(context) {
    const outline = new Path2D();
    const squares = new Path2D();
    // Desenha o circulo do tabuleito
    outline.arc(this._center.x, this._center.y, this._size / 2, 0, 2 * Math.PI);

    const points = this._getBoardPoints(this._center.x, this._center.y, this._size);
    const rectSize = 40;
    for (const p of points) {
      squares.rect(p.x - rectSize / 2, p.y - rectSize / 2, rectSize, rectSize);
    }

    outline.moveTo(points[0].x, points[0].y);
    outline.lineTo(points[3].x, points[3].y);
    outline.moveTo(points[0].x, points[0].y);
    outline.lineTo(points[4].x, points[4].y);

    context.lineWidth = 4;
    context.fillStyle = "rgba(0,0,0,1)";
    context.stroke(outline);
    context.fill(squares);
  }

  getCoordinates() {
    // return {
    //   x: this._x,
    //   y: this._y,
    //  }
  }
}

export default {
  Game,
};
