import {GameMap} from "./GameMap";

export default class GameMain{
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    constructor(){}

    gameLoop(): void{
        console.log('loop');
        requestAnimationFrame(this.gameLoop);
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, 1280, 720);

        this.map.drawUnits();

    }

    private map:GameMap;
    public main(self:GameMain):void {
        self.canvas = <HTMLCanvasElement>document.getElementById('game');
        self.ctx = this.canvas.getContext("2d")||(new CanvasRenderingContext2D());

        self.map = new GameMap(this.ctx);

        self.gameLoop();
    }
}

let game:GameMain = new GameMain();
window.onload = ()=>{
    game.main(game);
};

