<template>
  <div id="app">
    <SplashScreen id="splashContainer" :gameBoardId="gameBoardId" class="d-none"/>
    <GameBoard :id="gameBoardId" />
    <div>
      <!-- don't need this to display right now, but maybe one day -->
      <button id="endGameButton" class="d-none" @click="endGame()">End game</button>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import GameBoard from "./components/GameBoard/GameBoard.vue";
  import SplashScreen from "./components/SplashScreen.vue";

  @Component({
    components: {
      GameBoard,
      SplashScreen
    }
  })
  export default class Scythe extends Vue {
    gameBoardId: string = "gameBoard" // this is passed to a "child" component, SplashScreen

    endGame() {
      document.getElementById("endGameButton").classList.toggle("d-none");
      document.getElementById(this.gameBoardId).classList.toggle("d-none");
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .d-none {
    display: none;
  }
</style>