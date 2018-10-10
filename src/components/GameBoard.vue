<template>
  <div> <!-- root element - there can be only one per component -->
    <div>
      <canvas id="gameBoardCanvas" :width="width" :height="height"></canvas>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
//import { LandTile } from "Tile.ts"

@Component
export default class GameBoard extends Vue {
	width: number = 400; // want to go ahead and make these as attributes of Vue instance/class
	height: number = 400;
	radius: number = 30;
	gapBetweenHexesX: number = Math.sqrt(3)*this.radius/2 
	gapBetweenHexesY: number = 3*this.radius/2
	factoryOffset: number = 80; // factory starts at (80, 80) on the canvas
	
	
  //@Prop() tile: LandTile;
  // set tile array through game board service

  // Note - want to outsource the code to set up the initial game board to something else. (What?)
	drawHex(x: number, y: number) {
		// doc - https://github.com/rrreese/Hexagon.js/blob/master/hexagon.js\
		// and math here - http://blog.ruslans.com/2011/02/hexagonal-grid-math.html - though I don't want to use "side"
		let height = Math.sqrt(3) * this.radius;
		let width = 2 * this.radius;
	
		let canvas: any = document.getElementById("gameBoardCanvas");
		let context = canvas.getContext('2d'); // these two should eventually be outside this method
		
		context.strokeStyle = "#000"; // make this programmatic later
		context.beginPath();
		
		context.moveTo(x, y); // need to use offset value here eventually
		// need to create a helper method here for initial offset or something - because I want to start at this.factoryOffset, this.factoryOffset but then need offset for the lines, etc.
		// Since the Canvas itself starts at (0,0) in the top left corner.
		// but I want the factory to be (0,0)... wahh.
		
		context.moveTo(x, y - this.radius);
		context.lineTo(x + Math.sqrt(3)*this.radius/2, y - this.radius/2);
		context.lineTo(x + Math.sqrt(3)*this.radius/2, y + this.radius/2);
		context.lineTo(x, y + this.radius);
		context.lineTo(x - Math.sqrt(3)*this.radius/2, y + this.radius/2);
		context.lineTo(x - Math.sqrt(3)*this.radius/2, y - this.radius/2);
		
		let fillColor = "#ddd"; // make this programmatic later
		context.fillStyle =  fillColor;
		context.fill();
		
		context.closePath(); // this closes the "shape" of the hexagon, adding the last side - not sure I'll actually use this
		context.stroke(); // this actually draws the lines
	}
  
  
  mounted() {
    // main game loop - while 1, essentially
	
		this.drawHex(this.factoryOffset, this.factoryOffset);
		this.drawHex(this.factoryOffset - (Math.sqrt(3)*this.radius/2), this.factoryOffset-(3*this.radius/2));
		this.drawHex(this.factoryOffset + (Math.sqrt(3)*this.radius/2), this.factoryOffset-(3*this.radius/2));
		this.drawHex(this.factoryOffset + (Math.sqrt(3)*this.radius), this.factoryOffset);
		this.drawHex(this.factoryOffset + (Math.sqrt(3)*this.radius/2), this.factoryOffset+(3*this.radius/2));
		this.drawHex(this.factoryOffset - (Math.sqrt(3)*this.radius/2), this.factoryOffset+(3*this.radius/2));
		this.drawHex(this.factoryOffset - (Math.sqrt(3)*this.radius), this.factoryOffset);
  }
  
  drawHexesInitial() {

	}
  
	// to make things more readable - use an enum for something like Direction.LEFT, 
	//  Direction.TOP_LEFT, TOP_RIGHT, RIGHT, etc.
  // enums in TypeScript: https://www.typescriptlang.org/docs/handbook/enums.html
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
