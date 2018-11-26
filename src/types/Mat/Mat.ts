import Canvas from '@/types/Canvas/Canvas';

export default interface Mat {
    canvas: Canvas;
    choices: object[];  // will be of length 4, but there's no need to specify that here
}