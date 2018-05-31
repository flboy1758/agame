import {GameMap} from "./GameMap";
import {Stalker} from "./Units/Stalker";

export default class GameMain{
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    constructor(){}

    gameLoop(self:GameMain): void{
        // console.log('loop');
        //requestAnimationFrame(self.gameLoop);
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, 1280, 720);

        this.map.drawUnits();
        requestAnimationFrame(()=> self.gameLoop(self));

    }

    private map:GameMap;
    public main(self:GameMain):void {
        self.canvas = <HTMLCanvasElement>document.getElementById('game');
        self.ctx = this.canvas.getContext("2d")||(new CanvasRenderingContext2D());

        self.map = new GameMap(this.ctx);

        let unit = new Stalker();
        unit.xPos = 100;
        unit.yPos = 100;

        self.map.addUnit(unit);

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




        requestAnimationFrame(()=> self.gameLoop(self));

    }
}

let game:GameMain = new GameMain();
window.onload = ()=>{
    game.main(game);
};

