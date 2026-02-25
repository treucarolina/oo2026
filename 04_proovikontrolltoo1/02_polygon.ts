class Polygon{
    constructor(protected x:number[], protected y:number[]){}

    //Create a method that adds new points to the polygon
    add(x:number, y:number):void{
        this.x.push(x); //add the x value to the array
        this.y.push(y);//add the y value to the array
    }

    //This method is going to calculate the distance between two points
    distance(x1:number, y1:number, x2:number, y2:number):number{
        const a = x2-x1
        const b = y2-y1
        return  Math.sqrt(a*a + b*b)
    }

    //This method calculates the total length(permieter) of the polygon
    permieter(): number{
        let total=0;
        //Start counting at 1= because we need the previous point. (Always need two points to measure one side)
        //this.x.length: keep looping while i is smaller than the number of points
        for (let i=1; i<this.x.length; i++){
            total += this.distance(
                this.x[i-1],//Previous x
                this.y[i-1],//Previous y
                this.x[i],//Current x
                this.y[i]//Current y
            );
        }

        //Add the distance from the last point back to the first point
        total += this.distance(
            this.x[this.x.length-1], //this.x.length = 3 for a triangle but to get the last we start from 0 w index so the last needs to be 2
            this.y[this.y.length-1],
            this.x[0],
            this.y[0]
        ); //last x, last y, first x, first y

        return total;
    }

    draw(g:CanvasRenderingContext2D): void{
        //if there are no points, stop the function
        if(this.x.length===0) return;

        g.beginPath();
        g.moveTo(this.x[0], this.y[0]);

        for (let i=1; i<this.x.length; i++){
            g.lineTo(this.x[i], this.y[i]);
        }
        //moveTo already draws the first point
        //point 0 to point 1- draw a line to point 1
        g.lineTo(this.x[0], this.y[0]);

        g.stroke();
    }
}

//let p1= new Polygon([50,30,40],[40,30,50]);
//console.log(p1);
