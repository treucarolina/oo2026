var Mood = /** @class */ (function () {
    function Mood(p, g, 
    //x position where the mood box is going to begin
    startx, 
    //x position where the mood box is going to end
    endx, 
    //how far down the screen we are going to draw the mood box. Y increases, diagram goes down
    y) {
        this.p = p;
        this.g = g;
        this.startx = startx;
        this.endx = endx;
        this.y = y;
        this.height = 30;
        this.width = this.endx - this.startx;
        this.draw();
    }
    Mood.prototype.draw = function () {
        //clears previous drawing
        this.g.clearRect(this.startx, this.y - this.height / 2, this.width, this.height);
        //===========Draw the rectangle============
        //x, y, width and Heigth
        var bodyX = this.startx + this.width / 4;
        var bodyY = this.y - this.height / 2;
        var bodyW = this.width / 2;
        var bodyH = this.height;
        this.g.beginPath();
        this.g.rect(bodyX, bodyY, bodyW, bodyH);
        this.g.stroke();
        //===========Draw bottom line============
        this.g.beginPath();
        this.g.moveTo(this.startx + this.width * 1 / 2, this.y + this.height * 1 / 2);
        this.g.lineTo(this.startx + this.width * 1 / 2, this.y + this.height);
        this.g.stroke();
        this.g.fillText(this.p + "p", bodyX + 8, this.y + 5);
    };
    Mood.prototype.setR = function (p) {
        this.p = p;
        this.draw();
    };
    Mood.prototype.getR = function () {
        return this.p;
    };
    return Mood;
}());
