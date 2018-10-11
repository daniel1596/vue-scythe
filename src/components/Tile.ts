interface Tile {
	centerX: number
	centerY: number
}

interface HexagonTile extends Tile {
	borderColor: string
	fillColor: string
	canProduceResources: boolean
	// These tiles will have border colors - red (tunnels), blue (river/lake), black? (normal)

	drawHex(): void; // Note - using centerX and centerY parameters
}

class CharacterStartTile implements Tile {
	constructor(public centerX: number, public centerY: number) {}

	drawCharacterStartTile(faction: string) {}  // faction parameter would eventually be strongly typed
}

class LandTile implements HexagonTile {
	canProduceResources = true;

	drawHex(): void {
		// set fillColor to whatever - you get the idea
	}
	// seems like the implements thing is necessary
	constructor(public centerX: number, public centerY: number, public borderColor: string, public fillColor: string) {}
}

class LakeTile implements HexagonTile {
	canProduceResources = false;
	fillColor = "blue"; // whatever the actual string will be

	drawHex(): void {

	}

	constructor(public centerX: number, public centerY: number, public borderColor: string) {}
}

export default LandTile;
// todo: this technically works, but now it only exports that one class from this file!
// maybe eventually these will all be moved to their own separate files anyway, so it won't matter
// I guess then I'd just have to separate files a little more with the different tiles

// On modules in TypeScript - if needed: https://www.typescriptlang.org/docs/handbook/modules.html
// Also for a finally good fleshed-out app example in TS: https://github.com/johnpapa/vue-heroes/tree/typescript/client