<template>
  <div> <!-- root element - there can be only one per component -->
      <canvas id="gameBoardCanvas" :width="canvasWidth" :height="canvasHeight"></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import LandTile from "./Tile";
import TileBorderColor from './TileBorderColor';
import TileFillColor from "./TileFillColor";

@Component
export default class GameBoard extends Vue {
  canvasWidth: number = 400;
  canvasHeight: number = 600;
  radius: number = 30;
	gapBetweenHorizontalHexesX: number = Math.sqrt(3) * this.radius;
  gapBetweenDiagonalHexesX: number = Math.sqrt(3) * this.radius / 2;
  gapBetweenDiagonalHexesY: number = 3 * this.radius / 2;
  factoryOffset: number = 80; // factory starts at (factoryOffset, factoryOffset) on the canvas - for now
  canvas: any; // defined in mounted() because otherwise this value will be null
  context: any;

  drawLine(x: number, y: number) {
    this.context.lineTo(this.factoryOffset + x, this.factoryOffset + y);
  }

  moveToTopCornerOfHex(x: number, y: number) {
    this.context.moveTo(this.factoryOffset + x, this.factoryOffset + y - this.radius);
  }

  // Note - want to outsource the code to set up the initial game board to something else. (What?)
  drawHex(x: number, y: number, fillColor?: string, borderColor: string = "#000") {
    // doc - https://github.com/rrreese/Hexagon.js/blob/master/hexagon.js\
    // and math here - http://blog.ruslans.com/2011/02/hexagonal-grid-math.html - though I don't want to use "side"

    this.context.strokeStyle = borderColor;
    this.context.beginPath();

    this.moveToTopCornerOfHex(x, y);
    this.drawLine(x + this.gapBetweenDiagonalHexesX, y - this.radius / 2);
    this.drawLine(x + this.gapBetweenDiagonalHexesX, y + this.radius / 2);
    this.drawLine(x, y + this.radius);
    this.drawLine(x - this.gapBetweenDiagonalHexesX, y + this.radius / 2);
    this.drawLine(x - this.gapBetweenDiagonalHexesX, y - this.radius / 2);

    if (fillColor) {
      this.context.fillStyle = fillColor;
      this.context.fill();
    }

    this.context.closePath(); // this closes the "shape" of the hexagon, adding the last side - not sure I'll actually use this
    this.context.stroke(); // this actually draws the lines
  }

  mounted() {
    this.canvas = document.getElementById("gameBoardCanvas");
    this.context = this.canvas.getContext("2d");

    this.drawHexesInitial();

		// main game loop here, I think - a "while 1" most likely
  }

  drawHexesInitial() {
    let x = new LandTile(0, 0, TileBorderColor.BLACK, TileFillColor.SILVER); // TODO: this doesn't actually do anything yet
    // But one day, we should be putting the "draw hex" logic inside the tiles themselves
    // And the "drawHex" method should possibly go inside the HexagonTile interface

    this.drawHex(0, 0, TileFillColor.SILVER);
    this.drawHex(-this.gapBetweenDiagonalHexesX, -this.gapBetweenDiagonalHexesY, TileFillColor.SILVER);
    this.drawHex(this.gapBetweenDiagonalHexesX, -this.gapBetweenDiagonalHexesY);
    this.drawHex(this.gapBetweenHorizontalHexesX, 0);
    this.drawHex(this.gapBetweenDiagonalHexesX, this.gapBetweenDiagonalHexesY);
    this.drawHex(-this.gapBetweenDiagonalHexesX, this.gapBetweenDiagonalHexesY);
    this.drawHex(-this.gapBetweenHorizontalHexesX, 0, TileFillColor.SILVER);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
