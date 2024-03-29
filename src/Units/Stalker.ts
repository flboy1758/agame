import {BaseUnit} from "./BaseUnit";

export class Stalker extends BaseUnit {

    private static radius:number = 1;

    constructor(){
        super();
        this.health = 100;
        this.shield = 50;
    }

    draw(context: CanvasRenderingContext2D): void {
        // console.log(this.yPos);
        // console.log(this.xPos);
        context.beginPath();
        context.strokeStyle = "red";
        context.lineWidth = 2;
        context.arc(this.xPos, this.yPos, Stalker.radius, 0, 2 * Math.PI);
        context.stroke();
    }


}