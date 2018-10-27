import Canvas from './Canvas';

class GameBoardTilesCanvas extends Canvas {
	// TODO - these properties all came from the GameBoard.vue file. Will want to move around.

	// todo - also need to define constructor here

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
}


export default GameBoardTilesCanvas;