interface Tile {
	//  the character start tiles won't have these 6 sides, though those can come later.
	// Maybe a "drawTile" method would be better than "drawHex" for that reason?
	// if we wanted a "drawTile" method to be defined here.
	// But, I like the specificity of "drawHex" in the HexagonTile ones.
	// So maybe just keep it as is for those and in CharacterStartTile, have a "drawChacterStartTile()" method?
	// can decide that later. probably a lot later.
	centerX: number
	centerY: number
}

interface HexagonTile extends Tile {
	// These tiles will have border colors - red (tunnels), blue (river/lake), black? (normal)

	drawHex(x: number, y: number, fillColor: string, borderColor: string): void;
}

class CharacterStartTile implements Tile {
	constructor(public centerX: number, public centerY: number) {}
}

class LandTile implements HexagonTile {
	drawHex(x: number, y: number, fillColor: string, borderColor: string): void {
		// set fillColor to whatever - you get the idea
	}
	// seems like the implements thing is necessary
	constructor(public centerX: number, public centerY: number) {
		// This tile will produce a specific resource on produce action
	}
}

class LakeTile implements HexagonTile {
	drawHex(x: number, y: number, fillColor: string, borderColor: string): void {
		// set fillColor to blue for lake tile
	}
	// may not need a separate class for this... could just do isLake = true
	// but also - not sure. it will not produce any resources.
	constructor(public centerX: number, public centerY: number) {}
}

export default LandTile;
// todo: this technically works, but now it only exports that one class from this file!
// maybe eventually these will all be moved to their own separate files anyway, so it won't matter
// I guess then I'd just have to separate files a little more with the different tiles

// On modules in TypeScript - if needed: https://www.typescriptlang.org/docs/handbook/modules.html
// Also for a finally good fleshed-out app example in TS: https://github.com/johnpapa/vue-heroes/tree/typescript/client