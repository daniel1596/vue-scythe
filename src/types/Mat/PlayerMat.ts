import PlayerMatCanvas from '@/types/Canvas/PlayerMatCanvas';
import Mat from "@/types/Mat/Mat";

// NOTE - do NOT change this to "export default" PlayerMat.vue will complain.



export class PlayerMat2 implements Mat {
    choices: object[];

    constructor(public canvas: PlayerMatCanvas) {
        this.choices = [];
    }
}