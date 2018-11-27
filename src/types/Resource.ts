import TileFillColor from '@/types/GameBoard/GameBoardTiles/TileFillColor';

export class Resource {
	// Would "color" need to be a TileFillColor? Maybe.
	// Leave this as a class and not just an enum because I may have to do more with it later
	constructor(public name: string, public color: TileFillColor) {}
}

export const Village = new Resource("Village", TileFillColor.RED);

export class PayableResource extends Resource {}  // all but villages

export const Oil = new PayableResource("Oil", TileFillColor.BLACK);
export const Metal = new PayableResource("Metal", TileFillColor.SILVER);
export const Wood = new PayableResource("Wood", TileFillColor.BROWN);
export const Food = new PayableResource("Food", TileFillColor.YELLOW);