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
	// radius: number = 30;
	// gapBetweenHexesX: number = Math.sqrt(3)*radius/2
	// gapBetweenHexesY: number = 3*radius/2
	// factoryOffset: number = 80;
	
	
  //@Prop() tile: LandTile;
  // set tile array through game board service

  // Note - want to outsource the code to set up the initial game board to something else. (What?)
	drawHex(x: number, y: number, radius: number) {
		// doc - https://github.com/rrreese/Hexagon.js/blob/master/hexagon.js\
		// and math here - http://blog.ruslans.com/2011/02/hexagonal-grid-math.html - though I don't want to use "side"
		let height = Math.sqrt(3) * radius;
		let width = 2 * radius;
	
		let canvas: any = document.getElementById("gameBoardCanvas");
		let context = canvas.getContext('2d'); // these two should eventually be outside this method
		
		context.strokeStyle = "#000"; // make this programmatic later
		context.beginPath();
		
		context.moveTo(x, y);
		// need to create a helper method here for initial offset or something - because I want to start at factoryOffset, factoryOffset but then need offset for the lines, etc.
		// Since the Canvas itself starts at (0,0) in the top left corner.
		// but I want the factory to be (0,0)... wahh.
		
		context.moveTo(x, y - radius);
		context.lineTo(x + Math.sqrt(3)*radius/2, y - radius/2);
		context.lineTo(x + Math.sqrt(3)*radius/2, y + radius/2);
		context.lineTo(x, y + radius);
		context.lineTo(x - Math.sqrt(3)*radius/2, y + radius/2);
		context.lineTo(x - Math.sqrt(3)*radius/2, y - radius/2);
		
		let fillColor = "#ddd"; // make this programmatic later
		context.fillStyle =  fillColor;
		context.fill();
		
		context.closePath(); // this closes the "shape" of the hexagon, adding the last side - not sure I'll actually use this
		context.stroke(); // this actually draws the lines
	}
  
  
  mounted() {
    // main game loop - while 1, essentially
	let radius = 30; // needs to be a member of the class ("this.radius")
	let factoryOffset = 80; // also should be a member of the class
	
	this.drawHex(factoryOffset, factoryOffset, radius);
	this.drawHex(factoryOffset - (Math.sqrt(3)*radius/2), factoryOffset-(3*radius/2), radius);
	this.drawHex(factoryOffset + (Math.sqrt(3)*radius/2), factoryOffset-(3*radius/2), radius);
	this.drawHex(factoryOffset + (Math.sqrt(3)*radius), factoryOffset, radius);
	this.drawHex(factoryOffset + (Math.sqrt(3)*radius/2), factoryOffset+(3*radius/2), radius);
	this.drawHex(factoryOffset - (Math.sqrt(3)*radius/2), factoryOffset+(3*radius/2), radius);
	this.drawHex(factoryOffset - (Math.sqrt(3)*radius), factoryOffset, radius);
  }
  
  drawHexesInitial() {}
  
  // to make things more readable - use an enum for something like Direction.LEFT, Direction.TOP_LEFT, TOP_RIGHT, RIGHT, etc.
  // enums in TypeScript: https://www.typescriptlang.org/docs/handbook/enums.html
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
