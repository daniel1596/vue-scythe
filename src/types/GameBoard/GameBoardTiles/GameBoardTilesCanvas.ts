import Canvas from './Canvas';
import { Tile, HexagonTile, LandTile, CharacterStartTile } from './Tile';
import TileBorderColor from './TileBorderColor';
import TileFillColor from './TileFillColor';


class GameBoardTilesCanvas extends Canvas {
	// TODO - these properties all came from the GameBoardTiles.vue file. Will want to move around.

	hexRadius: number = 30;
	gapBetweenHorizontalHexesX: number = Math.sqrt(3) * this.hexRadius;
	gapBetweenDiagonalHexesX: number = Math.sqrt(3) * this.hexRadius / 2;  // needed here
	gapBetweenRowsY: number = 3 * this.hexRadius / 2;

	constructor(public canvas: any, public widthPixels: number, public heightPixels: number) {
		super(canvas, widthPixels, heightPixels);
	}

	calculateOffsetX(xCoord: number) {
		return 30 + xCoord * this.gapBetweenHorizontalHexesX;
	}

	calculateOffsetY(yCoord: number) {
		return 30 + yCoord * this.gapBetweenRowsY;
	}

	drawTile(tile: Tile) {
		// For now, this seems to be the right conditional check for if it's a hex - see https://stackoverflow.com/a/33733258
		if (tile.isHex) {   
			let hexTile = (tile as HexagonTile);  // useful to ensure that it has fillColor and borderColor properties
			this.drawHexInternal(hexTile.centerX, hexTile.centerY, hexTile.fillColor, hexTile.borderColor);
		}
		else {			
			let characterStartTile = (tile as CharacterStartTile);
			this.drawCharacterStartTile(characterStartTile);
		}
	}

	drawCharacterStartTile(characterStartTile: CharacterStartTile) {
		// TODO temporary measure to indicate that this is a character start tile and not a normal hex.
		// This will eventually be a C or, better yet, image of that faction.
		// doc: https://www.w3schools.com/tags/ref_canvas.asp
		this.drawRect(characterStartTile.centerX, characterStartTile.centerY, 5, 5); 
	}

	drawHexTile(hexTile: HexagonTile) {
		this.drawHexInternal(hexTile.centerX, hexTile.centerY, hexTile.fillColor, hexTile.borderColor);
	}

	private drawHexInternal(centerX: number, centerY: number, fillColor: TileFillColor = TileFillColor.NONE, borderColor: TileBorderColor = TileBorderColor.BLACK) {
		this.context.strokeStyle = borderColor;
		this.context.lineWidth = 2;
		this.context.beginPath();

		this.moveTo(centerX, centerY - this.hexRadius);
		this.lineTo(centerX + this.gapBetweenDiagonalHexesX, centerY - this.hexRadius / 2);
		this.lineTo(centerX + this.gapBetweenDiagonalHexesX, centerY + this.hexRadius / 2);
		this.lineTo(centerX, centerY + this.hexRadius);
		this.lineTo(centerX - this.gapBetweenDiagonalHexesX, centerY + this.hexRadius / 2);
		this.lineTo(centerX - this.gapBetweenDiagonalHexesX, centerY - this.hexRadius / 2);

		this.context.fillStyle = fillColor;
		this.context.fill();

		this.context.closePath(); // this closes the "shape" of the hexagon, adding the last side - not sure I'll actually use this
		this.context.stroke(); // this actually draws the lines
	}
}


export default GameBoardTilesCanvas;