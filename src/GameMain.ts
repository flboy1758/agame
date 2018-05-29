import {Map} from "./Map";

class GameMain{
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    gameLoop(): void{
        console.log('loop');
        requestAnimationFrame(this.gameLoop);
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, 1280, 720);

        this.map.drawUnits();

    }

    private map:Map;
    public main():void {
        this.canvas = <HTMLCanvasElement>document.getElementById('game');
        this.ctx = this.canvas.getContext("2d");

        this.map = new Map(this.ctx);

        this.gameLoop();
    }
}

let game:GameMain = new GameMain();
window.onload = game.main;