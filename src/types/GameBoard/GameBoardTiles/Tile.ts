import TileBorderColor from './TileBorderColor';
import TileFillColor from './TileFillColor';
import { Resource, PayableResource } from '@/types/Resource';


// NOTE: This has to be an abstract class in order have an implemented draw() method (as opposed to an interface)
export abstract class Tile {
	abstract isHex: boolean;  // abstract keyword can be used here! it means it must be set by children.

	constructor(public centerX: number, public centerY: number) {}
}

export class CharacterStartTile extends Tile {
	isHex = false;
	
	// faction parameter will eventually be strongly typed
	constructor(centerX: number, centerY: number, faction: string) {
		super(centerX, centerY);
	}
}

/* Everything from this point is or extends HexagonTile */
export abstract class HexagonTile extends Tile {
	isHex = true;
	resourcesOnTile: PayableResource[] = [];

	// TODO - instead of borderColor and fillColor as parameters...
	// (1) fill color will be determined by resources (enum maybe? but with multiple fields?)
	// (2) border colors... are trickier. Make all black for now. But eventually will have to think about rivers.

	constructor(centerX: number, centerY: number, public canProduceResources: boolean, public fillColor: TileFillColor = TileFillColor.NONE, public borderColor: TileBorderColor = TileBorderColor.BLACK) {
		super(centerX, centerY);
	}

	addResourcesToTile(resourcesToAdd: PayableResource[]) {
		this.resourcesOnTile.concat(resourcesToAdd);
	}

	// Would this method go here? I think so?
	spendResources(resourceType: PayableResource, numberSpending: number) {		
		let indexToRemove: number = -1;
		for (let i = 0; i < numberSpending; i++) {
			indexToRemove = this.resourcesOnTile.findIndex(resource => resource == resourceType);

			// note - this index should never be -1, if implemented properly
			this.resourcesOnTile.splice(indexToRemove);
		}
	}
}

export class LandTile extends HexagonTile {
	hasUnvisitedEncounterToken = false;
	// isTunnel = false;

	constructor(centerX: number, centerY: number, public resourceToProduce: Resource, borderColor: TileBorderColor = TileBorderColor.BLACK) {
		super(centerX, centerY, true, resourceToProduce.color, borderColor);
	}
}

export class LakeTile extends HexagonTile {
	fillColor = TileFillColor.BLUE;
	borderColor = TileBorderColor.BLUE;

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