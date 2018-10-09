// NOTE: not sure if .ts files should be used at all? Maybe. Or if it should all be in .vue files?

interface Tile {
	// hexagon - 6 sides
	centerX: number
	centerY: number
}

interface HexagonTile extends Tile {
	// These tiles will have border colors - red (tunnels), blue (river/lake), black? (normal)
}

class CharacterStartTile implements Tile {
	constructor(public centerX: number, public centerY: number) {}
}

class LandTile implements HexagonTile {
	// seems like the implements thing is necessary
	constructor(public centerX: number, public centerY: number) {
		// This tile will produce a specific resource on produce action
	}
}

class LakeTile implements HexagonTile {
	// may not need a separate class for this... could just do isLake = true
	// but also - not sure. it will not produce any resources.
	constructor(public centerX: number, public centerY: number) {}
}