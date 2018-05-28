var canvas;
var ctx;
function gameLoop() {
    console.log('loop');
    requestAnimationFrame(gameLoop);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1280, 720);
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.arc(400, 400, 100, 0, 2 * Math.PI);
    ctx.stroke();
}
function main() {
    canvas = document.getElementById('game');
    ctx = canvas.getContext("2d");
    gameLoop();
}
window.onload = main;
