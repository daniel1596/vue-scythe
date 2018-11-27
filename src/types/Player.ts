import { Resource } from './Resource';

export class Player {
	popularity: number = 0; // will figure out later when to initialize
	coins: number = 0;
	power: number = 0;
	combatCards = [];
	factoryCards = [];
	objectiveCards = [];

	getResourcesOwned() {

	}

	getTilesOccupied() {
		// this will return a list of tile IDs that a player has...
		// also not sure how to set this up. should it even be here?
	}
}