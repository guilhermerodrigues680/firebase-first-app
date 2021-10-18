<template>
  <div>
    <div ref="gameContainer" class="game-container"></div>
  </div>
</template>

<script>
import phaser from "../js/phaser";

export default {
  name: "Phaser",

  data: () => ({
    gameArr: null,
  }),

  computed: {
    game() {
      return this.gameArr && this.gameArr[0];
    },
  },

  mounted() {
    /**@type HTMLDivElement */
    const gameContainer = this.$refs.gameContainer;

    // const gameWidth = gameContainer.offsetWidth; // Get Content + Padding + Border
    // const gameHeight = gameContainer.offsetHeight; // Get Content + Padding + Border
    const gameWidth = gameContainer.clientWidth; // Get Content + Padding only
    const gameHeight = gameContainer.clientHeight; // Get Content + Padding only
    console.debug(gameWidth, gameHeight);
    this.gameArr = Object.freeze([phaser.newGame(gameContainer, gameWidth, gameHeight)]);
    console.debug(this.game);
  },

  beforeDestroy() {
    console.debug("this.game.destroy");
    this.game && this.game.destroy(true, false);
  },
};
</script>

<style lang="scss" scoped>
.game-container {
  height: 100vh;
  width: 100%;
}
</style>
