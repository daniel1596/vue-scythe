<template>
  <div> <!-- root element - there can be only one per component -->
    <div>
      <canvas id="gameBoardCanvas" :width="width" :height="height"></canvas>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import LandTile from "./Tile"
import TileColor from "./TileColor"

@Component
export default class GameBoard extends Vue {
	width: number = 400; // want to go ahead and make these as attributes of Vue instance/class
	height: number = 600;
	radius: number = 30;
	gapBetweenHexesX: number = Math.sqrt(3)*this.radius/2 
	gapBetweenHexesY: number = 3*this.radius/2
	factoryOffset: number = 80; // factory starts at (80, 80) on the canvas
	canvas: any; // defined in mounted() because otherwise this value will be null
	context: any;
	
	drawLine(x: number, y: number) {
		this.context.lineTo(this.factoryOffset + x, this.factoryOffset + y);
	}

	moveToTopCorner(x: number, y: number) {
		this.context.moveTo(this.factoryOffset + x, this.factoryOffset + y - this.radius);
	}

  // Note - want to outsource the code to set up the initial game board to something else. (What?)
	drawHex(x: number, y: number, fillColor?: string) {
		// doc - https://github.com/rrreese/Hexagon.js/blob/master/hexagon.js\
		// and math here - http://blog.ruslans.com/2011/02/hexagonal-grid-math.html - though I don't want to use "side"
		let height = Math.sqrt(3) * this.radius;
		let width = 2 * this.radius;
		
		this.context.strokeStyle = "#000"; // make this programmatic later
		this.context.beginPath();

		// Since the Canvas itself starts at (0,0) in the top left corner.
		// but I want the factory to be (0,0)... wahh.
		
		//this.context.moveTo(this.factoryOffset + x, this.factoryOffset + y - this.radius);
		this.moveToTopCorner(x, y);
		this.drawLine(x + Math.sqrt(3)*this.radius/2, y - this.radius/2);
		this.drawLine(x + Math.sqrt(3)*this.radius/2, y + this.radius/2);
		this.drawLine(x, y + this.radius);
		this.drawLine(x - Math.sqrt(3)*this.radius/2, y + this.radius/2);
		this.drawLine(x - Math.sqrt(3)*this.radius/2, y - this.radius/2);
		
		if (fillColor) {
			this.context.fillStyle =  fillColor;
			this.context.fill();
		}
		
		this.context.closePath(); // this closes the "shape" of the hexagon, adding the last side - not sure I'll actually use this
		this.context.stroke(); // this actually draws the lines
	}
  
  
  mounted() {
		this.canvas = document.getElementById("gameBoardCanvas");
		this.context = this.canvas.getContext('2d');
    // main game loop - while 1, essentially
	
		this.drawHexesInitial();
  }
  
  drawHexesInitial() {
		let x = new LandTile(0, 0); // TODO: this doesn't actually do anything yet
		// But one day, we should be putting the "draw hex" logic inside the tiles themselves
		// And the "drawHex" method should possibly go inside the HexagonTile interface

		this.drawHex(0, 0, TileColor.SILVER);
		this.drawHex(0 - (Math.sqrt(3)*this.radius/2), 0-(3*this.radius/2));
		this.drawHex(0 + (Math.sqrt(3)*this.radius/2), 0-(3*this.radius/2));
		this.drawHex(0 + (Math.sqrt(3)*this.radius), 0, TileColor.SILVER);
		this.drawHex(0 + (Math.sqrt(3)*this.radius/2), 0+(3*this.radius/2));
		this.drawHex(0 - (Math.sqrt(3)*this.radius/2), 0+(3*this.radius/2));
		this.drawHex(0 - (Math.sqrt(3)*this.radius), 0, TileColor.SILVER);
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
