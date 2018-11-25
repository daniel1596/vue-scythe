import Canvas from './Canvas';
import { Tile, HexagonTile, LandTile, CharacterStartTile, LakeTile } from './Tile';
import TileBorderColor from './TileBorderColor';
import TileFillColor from './TileFillColor';


export default class GameBoardTilesCanvas extends Canvas {
	hexRadius: number;
	gapBetweenHorizontalHexesX: number;
	gapBetweenRowsY: number;

	topLeftCanvasX: number = 30; // not sure if I'll keep these as is forever? but at least for now.
	topLeftCanvasY: number = 30;

	constructor(public canvas: any, public widthPixels: number, public heightPixels: number) {
		super(canvas, widthPixels, heightPixels);

		this.hexRadius = heightPixels / 14.5;
		this.gapBetweenHorizontalHexesX = Math.sqrt(3) * this.hexRadius;
		this.gapBetweenRowsY = (3/2) * this.hexRadius;
	}

	calculateOffsetX(xCoord: number) {
		return this.topLeftCanvasX + (xCoord * this.gapBetweenHorizontalHexesX);
	}

	calculateOffsetY(yCoord: number) {
		return this.topLeftCanvasY + (yCoord * this.gapBetweenRowsY);
	}

	drawTile(tile: Tile) {
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
		// can do tile instanceof LakeTile - if I want something like that here
		this.drawHexInternal(hexTile.centerX, hexTile.centerY, hexTile.fillColor, hexTile.borderColor);
	}

	private drawHexInternal(centerX: number, centerY: number, fillColor: TileFillColor, borderColor: TileBorderColor) {		
		const defaultBorderWidth = 2;
		let borderWidth = defaultBorderWidth;

		// experimenting with different border widths - not sure if this is necessary
		if (borderColor == TileBorderColor.NONE) {
			borderWidth = 0.01; // effectively 0
		}
		else if (borderColor == TileBorderColor.BLACK) {
			//borderWidth = 1;
		}
		
		this.context.strokeStyle = borderColor;
		this.context.lineWidth = borderWidth;
		this.context.beginPath();

		const gapBetweenDiagonalHexesX = this.gapBetweenHorizontalHexesX / 2;

		this.moveTo(centerX, centerY - this.hexRadius);
		this.lineTo(centerX + gapBetweenDiagonalHexesX, centerY - this.hexRadius / 2);
		this.lineTo(centerX + gapBetweenDiagonalHexesX, centerY + this.hexRadius / 2);
		this.lineTo(centerX, centerY + this.hexRadius);
		this.lineTo(centerX - gapBetweenDiagonalHexesX, centerY + this.hexRadius / 2);
		this.lineTo(centerX - gapBetweenDiagonalHexesX, centerY - this.hexRadius / 2);

		this.context.fillStyle = fillColor;
		this.context.fill();

		this.context.closePath(); // this closes the "shape" of the hexagon, adding the last side - not sure I'll actually use this
		this.context.stroke(); // this actually draws the lines
	}
}