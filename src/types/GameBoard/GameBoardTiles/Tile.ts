import GameBoardTilesCanvas from './GameBoardTilesCanvas';
import TileBorderColor from './TileBorderColor';
import TileFillColor from './TileFillColor';


export abstract class Tile {
	// NOTE: This has to be an abstract class in order have an implemented draw() method (can't be interface)
	// Note that all Tile objects will be drawable

	abstract isHex: boolean;  // abstract keyword can be used here! it means it must be set by children.

	constructor(public centerX: number, public centerY: number) {}

	draw(canvas: GameBoardTilesCanvas): void {
		this.centerX = canvas.calculateOffsetX(this.centerX);
		this.centerY = canvas.calculateOffsetY(this.centerY);
		canvas.drawTile(this);
	}
}

export abstract class HexagonTile extends Tile {
	isHex = true;

	// These tiles will have border colors - red (tunnels), blue (river/lake), black? (normal)

	// TODO - instead of borderColor and fillColor as parameters...
	// (1) fill color will be determined by resources (enum maybe? but with multiple fields?)
	// (2) border colors... are trickier. Make all black for now. But eventually will have to think about rivers.

	constructor(centerX: number, centerY: number, public canProduceResources: boolean, public fillColor: TileFillColor = TileFillColor.NONE, public borderColor: TileBorderColor = TileBorderColor.BLACK) {
		super(centerX, centerY);
	}
}

export class CharacterStartTile extends Tile {
	isHex = false;
	
	// faction parameter will eventually be strongly typed
	constructor(centerX: number, centerY: number, faction: string) {
		super(centerX, centerY);
	}
}

export class LandTile extends HexagonTile {
	// hasEncounterToken = false;
	// isTunnel = false;

	constructor(centerX: number, centerY: number, fillColor: TileFillColor = TileFillColor.NONE, borderColor: TileBorderColor = TileBorderColor.BLACK) {
		super(centerX, centerY, true, fillColor, borderColor);
	}
}

export class LakeTile extends HexagonTile {
	fillColor = TileFillColor.BLUE;
	borderColor = TileBorderColor.BLACK;

	constructor(centerX: number, centerY: number) {
		super(centerX, centerY, false);
	}
}

// This is another way to export multiple things instead of just doing "export default"... but if I do just the "export" keyword that seems to work too
// module.exports = {
// 	CharacterStartTile,
// 	LakeTile,
// 	LandTile,
// };


// On modules in TypeScript - if needed: https://www.typescriptlang.org/docs/handbook/modules.html
// Also for a finally good fleshed-out app example in TS: https://github.com/johnpapa/vue-heroes/tree/typescript/client