abstract class Canvas {
	context: any;
	
	constructor(public canvas: any, public canvasWidth: number, public canvasHeight: number) {
		this.context = this.canvas.getContext("2d");  // this will be the case for any canvas
	}
}

export default Canvas;