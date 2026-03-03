var Graph = /** @class */ (function () {
    function Graph(startx, endx, starty, endy) {
        this.startx = startx;
        this.endx = endx;
        this.starty = starty;
        this.endy = endy;
    }
    Graph.prototype.draw = function (g, label) {
        if (label === void 0) { label = ""; }
        g.beginPath();
        g.moveTo(this.startx, this.starty);
        g.lineTo(this.endx, this.endy);
        g.stroke();
        g.font = "17px Times New Roman";
        g.fillStyle = "black";
        g.fillText(label, this.endx + 8, this.starty + 8);
    };
    return Graph;
}());
var Graph2 = /** @class */ (function () {
    function Graph2(x, y) {
        this.x = x;
        this.y = y;
    }
    //Create a method that adds new points to the polygon
    Graph2.prototype.add = function (x, y) {
        this.x.push(x); //add the x value to the array
        this.y.push(y); //add the y value to the array
    };
    //This method is going to calculate the distance between two points
    Graph2.prototype.distance = function (x1, y1, x2, y2) {
        var a = x2 - x1;
        var b = y2 - y1;
        return Math.sqrt(a * a + b * b);
    };
    //This method calculates the total length(permieter) of the polygon
    Graph2.prototype.permieter = function () {
        var total = 0;
        //Start counting at 1= because we need the previous point. (Always need two points to measure one side)
        //this.x.length: keep looping while i is smaller than the number of points
        for (var i = 1; i < this.x.length; i++) {
            total += this.distance(this.x[i - 1], //Previous x
            this.y[i - 1], //Previous y
            this.x[i], //Current x
            this.y[i] //Current y
            );
        }
        return total;
    };
    Graph2.prototype.draw = function (g) {
        //if there are no points, stop the function
        if (this.x.length === 0)
            return;
        g.beginPath();
        g.moveTo(this.x[0], this.y[0]);
        for (var i = 1; i < this.x.length; i++) {
            g.lineTo(this.x[i], this.y[i]);
        }
        //moveTo already draws the first point
        //point 0 to point 1- draw a line to point 1
        g.stroke();
    };
    return Graph2;
}());
