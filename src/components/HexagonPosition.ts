import HexagonOffsetType from "./HexagonOffsetType";

// this will be useful for saying, "I want to draw a hex, to the left, 2 spots" or whatever.
// might have to take the result of getOffsetX() and multiply by 2? hmm.

class HexagonPosition {
	getOffsetX(offsetType: HexagonOffsetType): number {
		switch(offsetType) {
			case HexagonOffsetType.LEFT:
				return -1; // not yet implemented
			default:
				return 3; // also not implemented
		}
	}

	getOffsetY(offsetType: HexagonOffsetType): number {
		switch(offsetType) {
			case HexagonOffsetType.LEFT:
			case HexagonOffsetType.RIGHT:
				return 0;
			default:
				return 3; // not implemented
		}
	}
}

export default HexagonPosition;