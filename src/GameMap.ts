import {BaseUnit} from "./Units/BaseUnit";
import {Stalker} from "./Units/Stalker";


export class GameMap {
    private units:BaseUnit[] = [];
    private context: CanvasRenderingContext2D;

    constructor(context: CanvasRenderingContext2D){
        console.log('creating map');
        this.context = context;
    }

    addUnit(unit:BaseUnit){
        this.units.push(unit);
    }

    drawUnits(): void{
        this.units.forEach((unit) => {
            unit.draw(this.context);
        })
    }
}