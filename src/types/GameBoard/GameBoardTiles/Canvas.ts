abstract class Canvas {
	context: any;
	
	constructor(public canvas: any, public widthPixels: number, public heightPixels: number) {
		this.context = this.canvas.getContext("2d");  // this will be the case for any canvas
	}

	lineTo(x: number, y: number) {
		this.context.lineTo(x, y);
	}

	fill(fillColor: string) {
		this.context.fillStyle = fillColor;
		this.context.fill();
	}

	moveTo(x: number, y: number) {
		this.context.moveTo(x, y);
	}
}

export default Canvas;