<template>
  <div> <!-- root element - there can be only one per component -->
    <div>
      <p>Game will go here</p>
      <canvas id="gameBoardCanvas"></canvas>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
//import { LandTile } from "Tile.ts"

@Component
export default class GameBoard extends Vue {
  //@Prop() tile: LandTile;
  // set tile array through game board service

  // Note - want to outsource the code to set up the initial game board to something else. (What?)

  mounted() {
    // main game loop - while 1, essentially
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
