<template>
	<div> <!-- Root element -->
		<canvas id="gameBoardTilesCanvas" :width="canvasWidth" :height="canvasHeight" />
	</div>
</template>


<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";

	import GameBoardTilesCanvas from '@/types/GameBoard/GameBoardTiles/GameBoardTilesCanvas';

	import { Tile, HexagonTile, CharacterStartTile, LakeTile, LandTile } from '@/types/GameBoard/GameBoardTiles/Tile';
	import TileFillColor from '@/types/GameBoard/GameBoardTiles/TileFillColor';
	import TileBorderColor from '@/types/GameBoard/GameBoardTiles/TileBorderColor';

	
	@Component({})
	export default class GameBoardTiles extends Vue {
		// TODO: would love to define these based partly upon window.innerHeight and window.innerWidth
		// for my laptop at home (where height of the game board is mostly maxed out): those values are 1266x697  (goes to 1366x767 if full-screened)
		// for the work computer, goes to 1920x969 (big width difference; don't think width will be the biggest issue)
		canvasWidth: number = window.innerWidth / 2;  // Can always play with these values later
		canvasHeight: number = (5/8) * window.innerHeight;

		canvas: any; // defined in mounted() because otherwise this value will be null
		gameBoardTilesCanvas: GameBoardTilesCanvas;  // also defined in mounted()

		// this value needs to be initialized because otherwise, it won't show up in data
		//  in the Chrome DevTools for Vue. Weird, but needed. Also it won't hurt anything.
		tiles: Tile[] = [];

		mounted() {
			this.canvas = document.getElementById("gameBoardTilesCanvas");
			this.gameBoardTilesCanvas = new GameBoardTilesCanvas(this.canvas, this.canvasWidth, this.canvasHeight);

			this.loadInitialTiles();

			// draw tiles with black border color first
			this.tiles.forEach(tile => {
				if (tile instanceof CharacterStartTile || 
				(tile instanceof HexagonTile && tile.borderColor !== TileBorderColor.RED)) {
					tile.draw(this.gameBoardTilesCanvas);
				}
			});

			// then draw tiles with red border
			this.tiles.forEach(tile => {
				if (tile.borderColor == TileBorderColor.RED) {
					tile.draw(this.gameBoardTilesCanvas);
				}
			})

			// TODO this is probably a silly way to do it, but I can't think of a better way right now.
			// Other than just putting the red tiles at the end of the array maybe... hmm.
		}

		loadInitialTiles() {
			this.tiles = [
				new CharacterStartTile(1.5, 0, "Albion"),
				new CharacterStartTile(4.5, 0, "Nordic"),
				
				new LandTile(1, 1),
				new LandTile(2, 1),
				new LandTile(3, 1),
				new LandTile(4, 1),
				new LandTile(5, 1),
				new LandTile(6, 1),

				new LakeTile(0.5, 2),
				new LandTile(1.5, 2),
				new LakeTile(2.5, 2),
				new LandTile(3.5, 2, TileFillColor.NONE, TileBorderColor.RED), // Note: might one day have "Mine" as some sort of type?
				new LandTile(4.5, 2),
				new LandTile(5.5, 2),
				new LandTile(6.5, 2),
				
				new CharacterStartTile(0, 3, "Polania"),
				new LandTile(1, 3),
				new LandTile(2, 3),
				new LandTile(3, 3),
				new LakeTile(4, 3),
				new LandTile(5, 3),
				new LandTile(6, 3),
				new CharacterStartTile(7, 3, "Rusviet"),

				new LandTile(0.5, 4),
				new LandTile(1.5, 4),
				new LakeTile(2.5, 4),
				new LandTile(3.5, 4), // factory!
				new LandTile(4.5, 4),
				new LandTile(5.5, 4),
				new LandTile(6.5, 4),

				new LandTile(0, 5),
				new LandTile(1, 5),
				new LandTile(2, 5),
				new LandTile(3, 5),
				new LakeTile(4, 5),
				new LandTile(5, 5),
				new LakeTile(6, 5),

				new LandTile(0.5, 6),
				new LandTile(1.5, 6),
				new LandTile(2.5, 6),
				new LandTile(3.5, 6),
				new LandTile(4.5, 6),
				new LandTile(5.5, 6),
				new LandTile(6.5, 6),

				new CharacterStartTile(0, 7, "Saxony"),
				new LandTile(1, 7),
				new LakeTile(2, 7),
				new LandTile(3, 7),
				new LandTile(4, 7),
				new LandTile(5, 7),
				new LandTile(6, 7),
				new CharacterStartTile(7, 7, "Togawa"),

				new CharacterStartTile(2.5, 8, "Crimea"),
				new LandTile(3.5, 8)
			];
		}
	}
</script>