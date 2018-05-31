import {GameMap} from "./GameMap";

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

        this.map = new GameMap(this.ctx);

        requestAnimationFrame(()=> this.gameLoop());

    }
}

let game:GameMain = new GameMain();
window.onload = ()=>{
    game.main();
};

