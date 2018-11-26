<template>
  <div> <!-- root element - there can be only one per component -->
    <canvas :id="playerMatCanvasId" :width="canvasWidth" :height="canvasHeight" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { PlayerMat2 } from '@/types/Mat/PlayerMat';
import { LandTile } from '@/types/GameBoard/GameBoardTiles/Tile';
import PlayerMatCanvas from '@/types/Canvas/PlayerMatCanvas';

// import mixins from "vue-class-component";
// import CanvasMixin from '../../mixins/CanvasMixin';

// Notes on this - for later 
// May decide to import the initial board configuration from a db but only for initial setup? not sure.

@Component({}) 
export default class PlayerMat extends Vue {
  playerMatCanvasId: string = "playerMatCanvas";
  canvasWidth: number = window.innerWidth / 3;
  canvasHeight: number = window.innerHeight / 9;

  mounted() {
    let canvasElement = document.getElementById(this.playerMatCanvasId);

    if (canvasElement === null)
      return;

    let canvas = new PlayerMatCanvas(canvasElement, this.canvasWidth, this.canvasHeight);
    let playerMat = new PlayerMat2(canvas);

    canvas.drawRect(0, 0, this.canvasWidth - 1, this.canvasHeight - 1);
    canvas.writeText("Player mat", 270, 60);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
