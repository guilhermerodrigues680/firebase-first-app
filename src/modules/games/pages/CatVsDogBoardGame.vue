<template>
  <div class="page">
    <h1 class="text-light">Jogo de tabuleiro gato vs cachorro</h1>
    <div ref="gameContainer" class="game-container">
      <canvas ref="canvas"></canvas>
    </div>
    <div class="text-light">fps: {{ `${fps}` }} deltaTime: {{ `${deltaTime}` }}</div>
    <pre class="text-light">{{ log }}</pre>
  </div>
</template>

<script>
import catVsDogBoardGame from "../js/cat-vs-dog-board-game";

export default {
  name: "CatVsDogBoardGame",

  data: () => ({
    log: "",
    game: null,
    fps: null,
    deltaTime: null,
  }),

  mounted() {
    try {
      this.init();
    } catch (error) {
      console.debug("Ocorreu um erro ao iniciar o jogo", error);
      this.logPrint(error.message);
      return;
    }

    this.logPrint("Game iniciado", "info");
  },

  beforeDestroy() {
    this.game && this.game.stop();
  },

  methods: {
    init() {
      /**@type HTMLCanvasElement */
      const canvas = this.$refs.canvas;
      /**@type HTMLDivElement */
      const gameContainer = this.$refs.gameContainer;
      // const gameWidth = gameContainer.offsetWidth; // Get Content + Padding + Border
      // const gameHeight = gameContainer.offsetHeight; // Get Content + Padding + Border
      const gameWidth = gameContainer.clientWidth; // Get Content + Padding only
      const gameHeight = gameContainer.clientHeight; // Get Content + Padding only
      canvas.width = gameWidth;
      canvas.height = gameHeight;
      this.game = new catVsDogBoardGame.Game(
        canvas,
        gameWidth,
        gameHeight,
        this.onAnimateError,
        this.onFPS
      );
      this.game.start();
      console.debug(this.game);
    },

    onAnimateError(error) {
      console.debug("onAnimateError", error);
      this.logPrint(error.message, "error");
    },

    onFPS(fps, deltaTime) {
      // TODO: Usar lib para definir timeout de atualizacao
      this.fps = fps;
      this.deltaTime = deltaTime;
    },

    logPrint(msg, level = "debug") {
      this.log += `${level}: ${msg}\n`;
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
  min-height: 100vh;
}

.game-container {
  margin: 0 0.5rem;
  border: thin solid gray;
  // outline: thin solid gray;
  height: 75vh;
}
</style>
