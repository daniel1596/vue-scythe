<template>
	<div> <!-- Root element -->
		<!-- <canvas id="gameBoardCanvas" :width="canvasWidth" :height="canvasHeight" /> -->
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
		canvasWidth: number = 800;
		canvasHeight: number = 800;

		hexRadius: number = 30;
		gapBetweenColumnsX: number = Math.sqrt(3) * this.hexRadius;
		// gapBetweenDiagonalHexesX: number = Math.sqrt(3) * this.hexRadius / 2;
		gapBetweenRowsY: number = 3 * this.hexRadius / 2;

		canvas: any; // defined in mounted() because otherwise this value will be null
		gameBoardTilesCanvas: GameBoardTilesCanvas;  // also defined in mounted()

		topLeftCanvasX = 30; // not sure about these... also want to be constant
		topLeftCanvasY = 30;

		mounted() {
			this.canvas = document.getElementById("gameBoardTilesCanvas");
			this.gameBoardTilesCanvas = new GameBoardTilesCanvas(this.canvas, this.canvasWidth, this.canvasHeight);

			let tiles: Tile[] = [
				// NOTE - haven't solved this second part yet... hmm.				
				// new CharacterStartTile(30 + 1 * this.gapBetweenColumnsX, 30, "Albion"),  // will be strongly typed later,
				new LandTile(30 + 1 * this.gapBetweenColumnsX, 30, TileFillColor.SILVER),
				new LandTile(30 + 4 * this.gapBetweenColumnsX, 30, TileFillColor.SILVER),
				
				// row 2
				new LandTile(30 + 0.5 * this.gapBetweenColumnsX, 30 + this.gapBetweenRowsY),
				new LandTile(30 + 1.5 * this.gapBetweenColumnsX, 30 + this.gapBetweenRowsY),
				new LandTile(30 + 2.5 * this.gapBetweenColumnsX, 30 + this.gapBetweenRowsY),
				new LandTile(30 + 3.5 * this.gapBetweenColumnsX, 30 + this.gapBetweenRowsY),
				new LandTile(30 + 4.5 * this.gapBetweenColumnsX, 30 + this.gapBetweenRowsY),
				new LandTile(30 + 5.5 * this.gapBetweenColumnsX, 30 + this.gapBetweenRowsY),

				// row 3
				new LakeTile(30, 30 + 2 * this.gapBetweenRowsY),
				new LandTile(30 + this.gapBetweenColumnsX, 30 + 2 * this.gapBetweenRowsY),
				new LakeTile(30 + 2 * this.gapBetweenColumnsX, 30 + 2 * this.gapBetweenRowsY),
				new LandTile(30 + 3 * this.gapBetweenColumnsX, 30 + 2 * this.gapBetweenRowsY),
				new LandTile(30 + 4 * this.gapBetweenColumnsX, 30 + 2 * this.gapBetweenRowsY),
				new LandTile(30 + 5 * this.gapBetweenColumnsX, 30 + 2 * this.gapBetweenRowsY),
				new LandTile(30 + 6 * this.gapBetweenColumnsX, 30 + 2 * this.gapBetweenRowsY)
			];

			tiles.forEach(tile => {
				this.gameBoardTilesCanvas.drawTile(tile);
			});
		}
	}
</script>