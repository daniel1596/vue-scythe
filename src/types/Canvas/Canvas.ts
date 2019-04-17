export default abstract class Canvas {
	context: any;
	
	constructor(public canvas: any, public widthPixels: number, public heightPixels: number) {
		this.context = this.canvas.getContext("2d");  // this will be the case for any canvas
	}

	drawCircle(x: number, y: number, radius: number, fillColor: string = "") {  // lineWidth: number
		this.context.beginPath();
		this.context.arc(x, y, radius, 0, 2*Math.PI);

		if (fillColor != "") {
			this.fill(fillColor);
		}

		// if lineWidth > 0: this.context.lineWidth = lineWidth;
		//  doc at https://www.html5canvastutorials.com/tutorials/html5-canvas-circles/

		this.context.stroke();
	}

	drawRect(x: number, y: number, widthRect: number, heightRect: number) {
		// Maybe have an optional "isFill" or "fillColor" param
		// then do this.context.fillRect if there is a fill... hmm.
		// fillRect() documentation: https://www.w3schools.com/tags/canvas_fillrect.asp
		this.context.strokeRect(x, y, widthRect, heightRect);
	}

	fill(fillColor: string) {
		this.context.fillStyle = fillColor;
		this.context.fill();
	}

	fillCircle(fillColor: string, x: number, y: number, radius: number) {
		this.drawCircle(x, y, radius, fillColor);
	}

	fillRect(fillColor: string, x: number, y: number, widthRect: number, heightRect: number) {
		this.context.fillStyle = fillColor;
		this.context.fillRect(x, y, widthRect, heightRect);
	}

	lineTo(x: number, y: number) {
		this.context.lineTo(x, y);
	}

	moveTo(x: number, y: number) {
		this.context.moveTo(x, y);
	}

	setBorderColor(borderColor: string) {
		this.context.strokeStyle = borderColor;
	}

	writeText(text: string, x: number, y: number, fontSize: number=20, font: string="Georgia") {
		this.context.font = `${fontSize}px ${font}`;
		this.context.strokeText(text, x, y)
	}
}