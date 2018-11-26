export default abstract class Canvas {
	context: any;
	
	constructor(public canvas: any, public widthPixels: number, public heightPixels: number) {
		this.context = this.canvas.getContext("2d");  // this will be the case for any canvas
	}

	drawCircle(x: number, y: number, radius: number) {
		this.context.beginPath();
		this.context.arc(x, y, radius, 0, 2*Math.PI);
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

	lineTo(x: number, y: number) {
		this.context.lineTo(x, y);
	}

	moveTo(x: number, y: number) {
		this.context.moveTo(x, y);
	}

	setBorderColor(borderColor: string) {
		this.context.strokeStyle = borderColor;
	}

	writeText(text: string, x: number, y: number) {
		this.context.font = "20px Georgia";  // this should be fine, at least for now
		this.context.strokeText(text, x, y)
	}
}