abstract class BaseUnit {
    public xPos: number;
    public yPos: number;

    public health: number;
    public shield: number;
    abstract draw(context: CanvasRenderingContext2D): void;
}