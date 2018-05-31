import {GameMap} from "./GameMap";
import {Stalker} from "./Units/Stalker";

class GameMain {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    constructor(){}

    gameLoop(): void{
        console.log('loop');
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, 1280, 720);

        this.map.drawUnits();
        requestAnimationFrame(()=> this.gameLoop());

    }

    private map:GameMap;

    public main():void {
        this.canvas = <HTMLCanvasElement>document.getElementById('game');
        this.ctx = this.canvas.getContext("2d")||(new CanvasRenderingContext2D());

        let unit = new Stalker();
        unit.xPos = 100;
        unit.yPos = 100;

        this.map = new GameMap(this.ctx);
        this.map.addUnit(unit);

        document.addEventListener('keydown', (e: any) =>{
            //You have yout key code here
            console.log(e);
            console.log(e.keyCode);
            if(e.keyCode == '37'){ // left
                unit.xPos -= 10;
                console.log(unit.xPos);
            } else if(e.keyCode == '38') { // up
                unit.yPos -= 10;
            }else if(e.keyCode == '39') { // right
                unit.xPos += 10;
            }
            else if(e.keyCode == '40') { // down
                unit.yPos += 10;
            }
        });




        requestAnimationFrame(()=> this.gameLoop());

    }
}

let game:GameMain = new GameMain();
window.onload = ()=>{
    game.main();
};

