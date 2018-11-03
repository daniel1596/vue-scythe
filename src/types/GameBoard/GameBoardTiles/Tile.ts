import GameBoardTilesCanvas from './GameBoardTilesCanvas';
import TileBorderColor from './TileBorderColor';
import TileFillColor from './TileFillColor';

export interface Tile {
	centerX: number
	centerY: number
	
	draw(canvas: GameBoardTilesCanvas): void; // I think it will be best to do something like this.
	// We don't really need a "drawHex()" method for the hexagons.
	// We just really want all tiles to have a draw() method.
	// Likely implementation: Tile[] array then call tile.draw() on each tile.
}

export interface HexagonTile extends Tile {
	borderColor: TileBorderColor
	fillColor: TileFillColor
	canProduceResources: boolean
	// These tiles will have border colors - red (tunnels), blue (river/lake), black? (normal)
}

export class CharacterStartTile implements Tile {
	// faction parameter will eventually be strongly typed
	constructor(public centerX: number, public centerY: number, faction: string) {}

	draw(canvas: GameBoardTilesCanvas) {
		canvas.drawHex(this.centerX, this.centerY); // TODO temp
	}
}

export class LandTile implements HexagonTile {
	canProduceResources = true;
	// hasEncounterToken = false;
	// isTunnel = false;

	// NOTE - instead of borderColor and fillColor as parameters...
	// (1) fill color will be determined by resources (enum maybe? but with multiple fields?)
	// (2) border colors... are trickier. Make all black for now. But eventually will have to think about rivers.

	constructor(public centerX: number, public centerY: number, 
		public fillColor: TileFillColor = TileFillColor.NONE, public borderColor: TileBorderColor = TileBorderColor.BLACK) {}

	draw(canvas: GameBoardTilesCanvas) { 
		canvas.drawHex(this.centerX, this.centerY);
	}
}

export class LakeTile implements HexagonTile {
	canProduceResources = false;
	borderColor = TileBorderColor.BLACK;
	fillColor = TileFillColor.BLUE; 

	constructor(public centerX: number, public centerY: number) {}

	draw(canvas: GameBoardTilesCanvas) {

	}
}

// This seems to allow us to export multiple things instead of just doing "export default"
// module.exports = {
// 	CharacterStartTile,
// 	LakeTile,
// 	LandTile,
// };


// On modules in TypeScript - if needed: https://www.typescriptlang.org/docs/handbook/modules.html
// Also for a finally good fleshed-out app example in TS: https://github.com/johnpapa/vue-heroes/tree/typescript/client