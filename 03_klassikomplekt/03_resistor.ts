class Resistor2{
    protected width:number;
    protected height: number=30;

    constructor(
        protected r:number,
        protected g:CanvasRenderingContext2D,
        //x position where the resistor is going to begin
        protected startx:number,
        //x position where the resistor is going to end
        protected endx:number,
        //how far down the screen we are going to draw the resistor. Y increases, diagram goes down
        protected y:number
    ){
        this.width= this.endx-this.startx;
        this.draw();
    }

    draw(){
        //clears previous drawing
        this.g.clearRect(this.startx, this.y-this.height/2, this.width, this.height);
        //===========Draw the LEFT wire============
        this.g.beginPath();
        this.g.moveTo(this.startx, this.y);
        this.g.lineTo(this.startx+this.width/4, this.y);
        this.g.stroke();

        //===========Draw the rectangle============
        //x, y, width and Heigth
        const bodyX= this.startx+this.width/4
        const bodyY=this.y-this.height/2
        const bodyW= this.width/2
        const bodyH=this.height
        this.g.beginPath();
        this.g.rect(bodyX, bodyY, bodyW, bodyH)
        this.g.stroke();

        //===========Draw the RIGHT wire============
        this.g.beginPath();
        this.g.moveTo(this.startx+this.width*3/4, this.y);
        this.g.lineTo(this.endx, this.y);
        this.g.stroke();

        this.g.fillText(this.r+"Ω", bodyX+8, this.y+5);
    
    }

    setR(r:number){
        this.r=r;
        this.draw();
    }

    getR():number{
        return this.r;
    }

}