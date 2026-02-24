class Mood{
    protected width:number;
    protected height: number=30;

    constructor(
        protected p:number,
        protected g:CanvasRenderingContext2D,
        //x position where the mood box is going to begin
        protected startx:number,
        //x position where the mood box is going to end
        protected endx:number,
        //how far down the screen we are going to draw the mood box. Y increases, diagram goes down
        protected y:number
    ){
        this.width= this.endx-this.startx;
        this.draw();
    }

    draw(){
        //clears previous drawing
        this.g.clearRect(this.startx, this.y-this.height/2, this.width, this.height);
        
        //===========Draw the rectangle============
        //x, y, width and Heigth
        const bodyX= this.startx+this.width/4
        const bodyY=this.y-this.height/2
        const bodyW= this.width/2
        const bodyH=this.height
        this.g.beginPath();
        this.g.rect(bodyX, bodyY, bodyW, bodyH)
        this.g.stroke();

        //===========Draw bottom line============
        this.g.beginPath();
        this.g.moveTo(this.startx + this.width*1/2, this.y+ this.height*1/2);
        this.g.lineTo(this.startx + this.width*1/2, this.y+ this.height);
        this.g.stroke();

        this.g.fillText(this.p+"p", bodyX+8, this.y+5);
    
    }

    setR(p:number){
        this.p=p;
        this.draw();
    }

    getR():number{
        return this.p;
    }

}