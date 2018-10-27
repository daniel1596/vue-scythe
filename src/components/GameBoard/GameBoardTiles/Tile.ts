interface Tile {
	centerX: number
	centerY: number
	
	draw(): void; // I think it will be best to do something like this.
	// We don't really need a "drawHex()" method for the hexagons.
	// We just really want all tiles to have a draw() method.
	// Likely implementation: Tile[] array then call tile.draw() on each tile.
}

interface HexagonTile extends Tile {
	borderColor: string
	fillColor: string
	canProduceResources: boolean
	// These tiles will have border colors - red (tunnels), blue (river/lake), black? (normal)
}

class CharacterStartTile implements Tile {
	// faction parameter will eventually be strongly typed
	constructor(public centerX: number, public centerY: number, faction: string) {}

	draw() {

	}
}

class LandTile implements HexagonTile {
	canProduceResources = true;
	// hasEncounterToken = false;
	// isTunnel = false;

	// NOTE - instead of borderColor and fillColor as parameters...
	// (1) fill color will be determined by resources
	// (2) border colors... are trickier. Make all black for now. But eventually will have to think about rivers.

	constructor(public centerX: number, public centerY: number, public borderColor: string, public fillColor: string) {}

	draw() { 
		
	}
}

class LakeTile implements HexagonTile {
	canProduceResources = false;
	borderColor = "probably all blue since it's a lake; that's probably all there is to it"
	fillColor = "blue"; // whatever the actual string will be - probably 3 digit hex

	constructor(public centerX: number, public centerY: number) {}

	draw() {

	}
}

// This seems to allow us to export multiple things instead of just doing "export default"
module.exports = {
	CharacterStartTile,
	LakeTile,
	LandTile
};

//export default LandTile;


// On modules in TypeScript - if needed: https://www.typescriptlang.org/docs/handbook/modules.html
// Also for a finally good fleshed-out app example in TS: https://github.com/johnpapa/vue-heroes/tree/typescript/client