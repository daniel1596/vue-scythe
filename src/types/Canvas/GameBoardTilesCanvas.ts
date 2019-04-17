import Canvas from './Canvas';
import { Tile, HexagonTile, LandTile, CharacterStartTile, LakeTile } from '../GameBoard/GameBoardTiles/Tile';
import TileBorderColor from '../GameBoard/GameBoardTiles/TileBorderColor';
import TileFillColor from '../GameBoard/GameBoardTiles/TileFillColor';
import TileService from '@/services/TileService';


export default class GameBoardTilesCanvas extends Canvas {
	hexRadius: number;
	gapBetweenHorizontalHexesX: number;
	gapBetweenRowsY: number;

	tiles: Tile[] = [];

	topLeftCanvasX: number; // not sure if I'll keep these as is forever? but at least for now.
	topLeftCanvasY: number;

	constructor(public canvas: any, public widthPixels: number, public heightPixels: number) {
		super(canvas, widthPixels, heightPixels);

		this.hexRadius = heightPixels / 14.5;
		this.gapBetweenHorizontalHexesX = Math.sqrt(3) * this.hexRadius;
		this.gapBetweenRowsY = (3/2) * this.hexRadius;

		this.topLeftCanvasX = this.hexRadius;
		this.topLeftCanvasY = this.hexRadius;
	}

	calculateOffsetX(xCoord: number) {
		return this.topLeftCanvasX + (xCoord * this.gapBetweenHorizontalHexesX);
	}

	calculateOffsetY(yCoord: number) {
		return this.topLeftCanvasY + (yCoord * this.gapBetweenRowsY);
	}

	drawCircleOnGameBoard(x: number, y: number, radius: number, fillColor: TileFillColor = TileFillColor.NONE, borderColor: TileBorderColor = TileBorderColor.BLACK) {
		this.setBorderColor(borderColor);
		super.fillCircle(fillColor, x, y, radius);
	}

	drawRectOnGameBoard(xCoord: number, yCoord: number, widthRect: number, heightRect: number, borderColor: TileBorderColor = TileBorderColor.BLACK) {
		const x = this.calculateOffsetX(xCoord);
		const y = this.calculateOffsetY(yCoord);
		
		this.setBorderColor(borderColor);
		super.drawRect(x, y, widthRect, heightRect);
	}

	drawPowerTracker() {
		const coords = [4.25, 7.85];
		const x = this.calculateOffsetX(coords[0]);
		const y = this.calculateOffsetY(coords[1]);

		const powerTrackerHeight = window.innerHeight / 16;
		const powerTrackerWidth = window.innerWidth / 7;

		const trackerValuesCount = 16 + 1; // from 0-16, inclusive
		const widthTrackerItem = powerTrackerWidth / trackerValuesCount;

		// outside rectangle
		this.setBorderColor(TileBorderColor.BLACK);
		this.drawRect(x, y, powerTrackerWidth, powerTrackerHeight);

		// inner rectangles - one for each value
		for (let index = 0; index < trackerValuesCount; index++) {
			this.drawRect(x + index * widthTrackerItem, y, widthTrackerItem, powerTrackerHeight);
			this.writeText(index as string, x + index * widthTrackerItem, y + 2*powerTrackerHeight / 3, 15);

			// Designate the portions of the power tracker that have icons on them in the game
			if (index < 1 || index == 7 || index == 16) {
				// This isn't the sexiest UI choice, but for now, it'll work
				this.fillRect("black", x + index * widthTrackerItem, y, widthTrackerItem, powerTrackerHeight / 3);
			}
		}
	}

	drawTilesInitial() {
		let tileService = new TileService();
		this.tiles = tileService.getInitialTiles();

		// Can't do this yet... maybe one day will investigate that
		// tiles.forEach(tile => this.drawTile(tile)); 

		// draw tiles with non-red border color first
		this.tiles.forEach(tile => {
			if (!(tile instanceof HexagonTile) || tile.borderColor !== TileBorderColor.RED) {
				this.drawTile(tile);
			}
		});

		// then draw tiles with red border
		this.tiles.forEach(tile => {
			if (tile instanceof HexagonTile && tile.borderColor == TileBorderColor.RED) {
				this.drawTile(tile);
			}
		});
	}

	drawTile(tile: Tile) {
		tile.centerX = this.calculateOffsetX(tile.centerX);
		tile.centerY = this.calculateOffsetY(tile.centerY);
		
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
		this.drawCircleOnGameBoard(characterStartTile.centerX, characterStartTile.centerY, this.hexRadius / 2, characterStartTile.fillColor, characterStartTile.borderColor);
	}

	drawHexTile(hexTile: HexagonTile) {
		// can do tile instanceof LakeTile - if I want something like that here
		// TODO: if I don't want to do something like that here, this method chaining is probably needless
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

		const radius = this.hexRadius - 1; // Doing this means that the hex borders will be adjacent, not superimposed

		this.moveTo(centerX, centerY - radius); // top corner of the hex, moving clockwise
		this.lineTo(centerX + gapBetweenDiagonalHexesX, centerY - radius / 2);
		this.lineTo(centerX + gapBetweenDiagonalHexesX, centerY + radius / 2);
		this.lineTo(centerX, centerY + radius); // bottom corner of the hex
		this.lineTo(centerX - gapBetweenDiagonalHexesX, centerY + radius / 2);
		this.lineTo(centerX - gapBetweenDiagonalHexesX, centerY - radius / 2);

		// If desiring the old border pattern
		// this.moveTo(centerX, centerY - this.hexRadius); // top corner of the hex, moving clockwise
		// this.lineTo(centerX + gapBetweenDiagonalHexesX, centerY - this.hexRadius / 2);
		// this.lineTo(centerX + gapBetweenDiagonalHexesX, centerY + this.hexRadius / 2);
		// this.lineTo(centerX, centerY + this.hexRadius); // bottom corner of the hex
		// this.lineTo(centerX - gapBetweenDiagonalHexesX, centerY + this.hexRadius / 2);
		// this.lineTo(centerX - gapBetweenDiagonalHexesX, centerY - this.hexRadius / 2);

		this.context.fillStyle = fillColor;
		this.context.fill();

		this.context.closePath(); // this closes the "shape" of the hexagon, adding the last side - not sure I'll actually use this
		this.context.stroke(); // this actually draws the lines
	}
}