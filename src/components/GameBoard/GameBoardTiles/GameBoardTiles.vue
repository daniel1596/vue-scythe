<template>
	<div> <!-- Root element -->
		<canvas :id="gameBoardTilesCanvasId" class="canvas-gameBoard" :width="canvasWidth" :height="canvasHeight" />
	</div>
</template>


<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	import GameBoardTilesCanvas from '@/types/Canvas/GameBoardTilesCanvas';
	
	
	@Component({})
	export default class GameBoardTiles extends Vue {
		gameBoardTilesCanvasId: string = "gameBoardTilesCanvas";
		
		canvasWidth: number = window.innerWidth / 2;
		canvasHeight: number = (5/8) * window.innerHeight;

		// these two are legitimately defined in mounted() after elements render
		canvas: HTMLElement | null = null; 
		gameBoardTilesCanvas: GameBoardTilesCanvas | null = null;

		mounted() {
			this.canvas = document.getElementById(this.gameBoardTilesCanvasId);
			this.gameBoardTilesCanvas = new GameBoardTilesCanvas(this.canvas, this.canvasWidth, this.canvasHeight);
			
			this.gameBoardTilesCanvas.drawTilesInitial();
			this.gameBoardTilesCanvas.drawPowerTracker();
		}
	}
</script>

<style scoped>
.canvas-gameBoard {
	/* this class isn't really doing anything right now, but could be used more later */
	margin-left: auto;
	margin-right: auto;
}
</style>
