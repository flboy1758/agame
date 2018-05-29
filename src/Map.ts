

class Map {
    private units:BaseUnit[] = [];
    private context: CanvasRenderingContext2D;

    constructor(context: CanvasRenderingContext2D){
        this.context = context;
        let unit = new Stalker();
        unit.xPos = 100;
        unit.yPos = 100;

        this.units.push(unit);
    }

    drawUnits(): void{
        this.units.forEach((unit) => {
            unit.draw(this.context);
        })
    }
}