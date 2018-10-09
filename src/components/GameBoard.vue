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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
