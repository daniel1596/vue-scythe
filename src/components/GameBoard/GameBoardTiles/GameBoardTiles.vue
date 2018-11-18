<template>
	<div> <!-- Root element -->
		<canvas id="gameBoardTilesCanvas" :width="canvasWidth" :height="canvasHeight" />
	</div>
</template>



<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";

	import GameBoardTilesCanvas from '@/types/GameBoard/GameBoardTiles/GameBoardTilesCanvas';

	import { Tile, CharacterStartTile, LakeTile, LandTile } from '@/types/GameBoard/GameBoardTiles/Tile';
	import TileFillColor from '@/types/GameBoard/GameBoardTiles/TileFillColor';
	import TileBorderColor from '@/types/GameBoard/GameBoardTiles/TileBorderColor';

	
	@Component({})
	export default class GameBoardTiles extends Vue {
		// TODO: would love to define these based partly upon window.innerHeight and window.innerWidth
		// for my laptop at home (where height of the game board is mostly maxed out): those values are 1266x697
		//  (goes to 1366x767 if full-screened)
		// If we did that, the value of hexRadius and the coordinates of the hexes might be a little more dynamic, too, 
		//   based on screen dimensions.
		canvasWidth: number = 800;  
		canvasHeight: number = 435;

		hexRadius: number = 30;
		gapBetweenColumnsX: number = Math.sqrt(3) * this.hexRadius;
		// gapBetweenDiagonalHexesX: number = Math.sqrt(3) * this.hexRadius / 2;
		gapBetweenRowsY: number = 3 * this.hexRadius / 2;

		canvas: any; // defined in mounted() because otherwise this value will be null
		gameBoardTilesCanvas: GameBoardTilesCanvas;  // also defined in mounted()

		// this value needs to be initialized because otherwise, it won't show up in data
		//  in the Chrome DevTools for Vue. Weird, but needed. Also it won't hurt anything.
		tiles: Tile[] = [];

		topLeftCanvasX = 30; // not sure about these... also want to be constant
		topLeftCanvasY = 30;

		mounted() {
			this.canvas = document.getElementById("gameBoardTilesCanvas");
			this.gameBoardTilesCanvas = new GameBoardTilesCanvas(this.canvas, this.canvasWidth, this.canvasHeight);

			this.loadInitialTiles();

			this.tiles.forEach(tile => {
				this.gameBoardTilesCanvas.drawTile(tile);
			});
		}

		loadInitialTiles() {
			this.tiles = [
				// TODO - here is a new idea for a "coordinate" system.
				// the first item would go as new LandTile(1.5, 0, TileFillColor.SILVER)
				// And the (1.5, 0) coordinates would compute to 
				//  x = (initOffsetX(=30) + 1.5 * this.gapBetweenColumnsX)
				//  y = initOffsetY(=30) + (0 * this.gapBetweenRowsY) = 30
				// Benefit of doing that: that logic (and corresponding variables) is abstracted from here
				//  and that logic moves into GameBoardTilesCanvas, where it belongs, as nitty-gritty details

				// NOTE - look in GameBoardTilesCanvas to see why CharacterStartTile isn't drawing anything yet. 
				// It's the "else" condition in drawTile()			
				// new CharacterStartTile(30 + 1 * this.gapBetweenColumnsX, 30, "Albion"),  // will be strongly typed later,
				new LandTile(30 + 1.5 * this.gapBetweenColumnsX, 30, TileFillColor.SILVER),
				new LandTile(30 + 4.5 * this.gapBetweenColumnsX, 30, TileFillColor.SILVER),
				
				// row 2
				new LandTile(30 + this.gapBetweenColumnsX, 30 + this.gapBetweenRowsY),
				new LandTile(30 + 2 * this.gapBetweenColumnsX, 30 + this.gapBetweenRowsY),
				new LandTile(30 + 3 * this.gapBetweenColumnsX, 30 + this.gapBetweenRowsY),
				new LandTile(30 + 4 * this.gapBetweenColumnsX, 30 + this.gapBetweenRowsY),
				new LandTile(30 + 5 * this.gapBetweenColumnsX, 30 + this.gapBetweenRowsY),
				new LandTile(30 + 6 * this.gapBetweenColumnsX, 30 + this.gapBetweenRowsY),

				// row 3
				new LakeTile(30 + 0.5 * this.gapBetweenColumnsX, 30 + 2 * this.gapBetweenRowsY),
				new LandTile(30 + 1.5 * this.gapBetweenColumnsX, 30 + 2 * this.gapBetweenRowsY),
				new LakeTile(30 + 2.5 * this.gapBetweenColumnsX, 30 + 2 * this.gapBetweenRowsY),
				new LandTile(30 + 3.5 * this.gapBetweenColumnsX, 30 + 2 * this.gapBetweenRowsY, TileFillColor.NONE, TileBorderColor.RED),
				new LandTile(30 + 4.5 * this.gapBetweenColumnsX, 30 + 2 * this.gapBetweenRowsY),
				new LandTile(30 + 5.5 * this.gapBetweenColumnsX, 30 + 2 * this.gapBetweenRowsY),
				new LandTile(30 + 6.5 * this.gapBetweenColumnsX, 30 + 2 * this.gapBetweenRowsY),
				
				// row 4
				// new CharacterStartTile()
				new LandTile(30, 30 + 3*this.gapBetweenRowsY),
				new LandTile(30 + this.gapBetweenColumnsX, 30 + 3*this.gapBetweenRowsY),
				new LandTile(30 + 2 * this.gapBetweenColumnsX, 30 + 3*this.gapBetweenRowsY),
				new LandTile(30 + 3 * this.gapBetweenColumnsX, 30 + 3*this.gapBetweenRowsY),
				new LakeTile(30 + 4 * this.gapBetweenColumnsX, 30 + 3*this.gapBetweenRowsY),
				new LandTile(30 + 5 * this.gapBetweenColumnsX, 30 + 3*this.gapBetweenRowsY),
				new LandTile(30 + 6 * this.gapBetweenColumnsX, 30 + 3*this.gapBetweenRowsY),
				new LandTile(30 + 7 * this.gapBetweenColumnsX, 30 + 3*this.gapBetweenRowsY),

				// row 5
				new LandTile(30 + 0.5 * this.gapBetweenColumnsX, 30 + 4 * this.gapBetweenRowsY),
				new LandTile(30 + 1.5 * this.gapBetweenColumnsX, 30 + 4 * this.gapBetweenRowsY),
				new LakeTile(30 + 2.5 * this.gapBetweenColumnsX, 30 + 4 * this.gapBetweenRowsY),
				new LandTile(30 + 3.5 * this.gapBetweenColumnsX, 30 + 4 * this.gapBetweenRowsY), // factory!
				new LandTile(30 + 4.5 * this.gapBetweenColumnsX, 30 + 4 * this.gapBetweenRowsY),
				new LandTile(30 + 5.5 * this.gapBetweenColumnsX, 30 + 4 * this.gapBetweenRowsY),
				new LandTile(30 + 6.5 * this.gapBetweenColumnsX, 30 + 4 * this.gapBetweenRowsY),

				// row 6
				new LandTile(30, 30 + 5 * this.gapBetweenRowsY),
				new LandTile(30 + this.gapBetweenColumnsX, 30 + 5 * this.gapBetweenRowsY),
				new LandTile(30 + 2 * this.gapBetweenColumnsX, 30 + 5 * this.gapBetweenRowsY),
				new LandTile(30 + 3 * this.gapBetweenColumnsX, 30 + 5 * this.gapBetweenRowsY),
				new LakeTile(30 + 4 * this.gapBetweenColumnsX, 30 + 5 * this.gapBetweenRowsY),
				new LandTile(30 + 5 * this.gapBetweenColumnsX, 30 + 5 * this.gapBetweenRowsY),
				new LakeTile(30 + 6 * this.gapBetweenColumnsX, 30 + 5 * this.gapBetweenRowsY),

				// row 7
				new LandTile(30 + 0.5 * this.gapBetweenColumnsX, 30 + 6 * this.gapBetweenRowsY),
				new LandTile(30 + 1.5 * this.gapBetweenColumnsX, 30 + 6 * this.gapBetweenRowsY),
				new LandTile(30 + 2.5 * this.gapBetweenColumnsX, 30 + 6 * this.gapBetweenRowsY),
				new LandTile(30 + 3.5 * this.gapBetweenColumnsX, 30 + 6 * this.gapBetweenRowsY),
				new LandTile(30 + 4.5 * this.gapBetweenColumnsX, 30 + 6 * this.gapBetweenRowsY),
				new LandTile(30 + 5.5 * this.gapBetweenColumnsX, 30 + 6 * this.gapBetweenRowsY),
				new LandTile(30 + 6.5 * this.gapBetweenColumnsX, 30 + 6 * this.gapBetweenRowsY),

				// row 8
				new LandTile(30, 30 + 7 * this.gapBetweenRowsY),
				new LandTile(30 + this.gapBetweenColumnsX, 30 + 7 * this.gapBetweenRowsY),
				new LakeTile(30 + 2 * this.gapBetweenColumnsX, 30 + 7 * this.gapBetweenRowsY),
				new LandTile(30 + 3 * this.gapBetweenColumnsX, 30 + 7 * this.gapBetweenRowsY),
				new LandTile(30 + 4 * this.gapBetweenColumnsX, 30 + 7 * this.gapBetweenRowsY),
				new LandTile(30 + 5 * this.gapBetweenColumnsX, 30 + 7 * this.gapBetweenRowsY),
				new LandTile(30 + 6 * this.gapBetweenColumnsX, 30 + 7 * this.gapBetweenRowsY),
				new LandTile(30 + 7 * this.gapBetweenColumnsX, 30 + 7 * this.gapBetweenRowsY),


				// row 9
				new LandTile(30 + 2.5 * this.gapBetweenColumnsX, 30 + 8 * this.gapBetweenRowsY), // characterstarttile
				new LandTile(30 + 3.5 * this.gapBetweenColumnsX, 30 + 8 * this.gapBetweenRowsY)
			];
		}
	}
</script>