<template>
  <div id="app">
    <SplashScreen id="splashContainer" :gameBoardId="gameBoardId" class="d-none"/>
    <GameBoard :id="gameBoardId" />
    <div>	  
      <!-- maybe buttons here for player mat? Or game controls here? -->
      <!-- Also said I would try to move a piece around on the board... hmm. -->
      <button id="endTurn" class="d-none" @click="endTurn()">End turn</button>
      <button :id="endGameButtonId" class="d-none" @click="endGame()">End game</button>
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
    gameBoardId: string = "gameBoard"; // this is passed to a "child" component, SplashScreen
    endGameButtonId: string = "endGameButton";
	  turnsEnded: number = 1;

    endGame() {
      const endGameButton = document.getElementById(this.endGameButtonId);
      const gameBoard = document.getElementById(this.gameBoardId);

      for (let element of [endGameButton, gameBoard]) {
        if (element != null) {  // this null-checking should be totally unnecessary, but keeps the Vue CLI tool happy
          element.classList.toggle("d-none");
        }
      }
    }
	
    endTurn() {
      alert(`Player 1 has ended ${this.turnsEnded++} turns.`)
    }
    
    mounted() {
      // maybe start the game here?
      // Will I have a GameService or something?
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