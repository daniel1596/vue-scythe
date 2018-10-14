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


// Notes on this - for later 
// May decide to import the initial board configuration from a db but only for initial setup? not sure.

// Also considering moving the low-level details, including the <canvas> element, to a separate comp.
//  leaving the higher-level logic in this comp ("tiles")
//  and then the lower-level front-end process (drawing the tiles) in a GameBoardCanvas element
//  or something like that.


@Component() // may need { components: Comp1 } inside the Component constructor eventually
export default class GameBoard extends Vue {
  canvasWidth: number = 800;
  canvasHeight: number = 800;
  hexRadius: number = 30;
	gapBetweenHorizontalHexesX: number = Math.sqrt(3) * this.hexRadius;
  gapBetweenDiagonalHexesX: number = Math.sqrt(3) * this.hexRadius / 2;
  gapBetweenRowsY: number = 3 * this.hexRadius / 2;
  //factoryOffset: number = 80; // do I want this variable?
  canvas: any; // defined in mounted() because otherwise this value will be null
  context: any;

  topLeftCanvasX = 30; // not sure about these... also want to be constant
  topLeftCanvasY = 30;
  currentCenterX: number = this.topLeftCanvasX; 
  currentCenterY: number = this.topLeftCanvasY;


  beginRow(row: number) {
    // the "row - 1" calls for 1-based row indexing
    this.moveTo(0, (row - 1) * this.gapBetweenRowsY, true)
  }

  drawLine(x: number, y: number) {
    // accounting for the topLeftCanvas offset
    this.context.lineTo(this.topLeftCanvasX + x, this.topLeftCanvasY + y);
  }

  drawHex(fillColor?: string, borderColor: string = "#000") {
    // doc - https://github.com/rrreese/Hexagon.js/blob/master/hexagon.js\
    // and math here - http://blog.ruslans.com/2011/02/hexagonal-grid-math.html - though I don't want to use "side"

    this.context.strokeStyle = borderColor;
    this.context.beginPath();

    this.moveToTopCornerOfHex(this.currentCenterX, this.currentCenterY);
    this.drawLine(this.currentCenterX + this.gapBetweenDiagonalHexesX, this.currentCenterY - this.hexRadius / 2);
    this.drawLine(this.currentCenterX + this.gapBetweenDiagonalHexesX, this.currentCenterY + this.hexRadius / 2);
    this.drawLine(this.currentCenterX, this.currentCenterY + this.hexRadius);
    this.drawLine(this.currentCenterX - this.gapBetweenDiagonalHexesX, this.currentCenterY + this.hexRadius / 2);
    this.drawLine(this.currentCenterX - this.gapBetweenDiagonalHexesX, this.currentCenterY - this.hexRadius / 2);

    if (fillColor) {
      this.context.fillStyle = fillColor;
      this.context.fill();
    }

    this.context.closePath(); // this closes the "shape" of the hexagon, adding the last side - not sure I'll actually use this
    this.context.stroke(); // this actually draws the lines
  }

  drawHexesInitial() {
    //let firstTile = new LandTile(0, 0, TileBorderColor.BLACK, TileFillColor.SILVER); 

    this.moveRight(3/2);
    this.drawHex(TileFillColor.SILVER);  // Albion character tile
    this.moveRight(3);
    this.drawHex(TileFillColor.SILVER); // Nordic character tile

    this.beginRow(2);
    this.moveRight();
    this.drawHex(TileFillColor.SILVER); // metal tile, I think
    this.moveRight();
    this.drawHex();
    this.moveRight();
    this.drawHex();
    this.moveRight();
    this.drawHex();
    this.moveRight();
    this.drawHex();
    this.moveRight();
    this.drawHex();

    this.beginRow(3);
    this.moveRight(1/2);
    this.drawHex();
    this.moveRight();
    this.drawHex();
    this.moveRight();
    this.drawHex();
    this.moveRight();
    this.drawHex();
    this.moveRight();
    this.drawHex(TileFillColor.SILVER); // metal tile
    this.moveRight();
    this.drawHex();
    this.moveRight();
    this.drawHex();

    //this.beginRow(4);
  }

  moveRight(howManyTiles: number=1) {
    this.currentCenterX += (howManyTiles * this.gapBetweenHorizontalHexesX);
  }

  moveTo(x: number, y: number, isSettingNewCenter: boolean = false) {
    this.context.moveTo(this.topLeftCanvasX + x, this.topLeftCanvasY + y)

    if (isSettingNewCenter) {
      this.currentCenterX = this.topLeftCanvasX + x;
      this.currentCenterY = this.topLeftCanvasY + y;
    }
  }

  moveToTopCornerOfHex(centerX: number, centerY: number) {
    this.moveTo(centerX, centerY - this.hexRadius);
  }

  mounted() {
    this.canvas = document.getElementById("gameBoardCanvas");
    this.context = this.canvas.getContext("2d");

    this.drawHexesInitial();

		// main game loop here, I think - a "while 1" most likely
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
