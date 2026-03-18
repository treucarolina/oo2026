var Kettle2 = /** @class */ (function () {
    function Kettle2(waterAmount, waterTemperature) {
        this.waterAmount = waterAmount;
        this.waterTemperature = waterTemperature;
        this.realTemp = 0;
    }
    Kettle2.prototype.getTemperature = function (seconds) {
        this.realTemp = (((1200 * seconds) / 4.19) / (500 + this.waterAmount)) + this.waterTemperature;
        return this.realTemp;
    };
    Kettle2.prototype.temperatureCheck = function () {
        var message = "";
        if (this.realTemp >= 80) {
            message = "Water temperature is atleast 80 degrees";
        }
        else {
            message = "Water temperature is below 80 degrees";
        }
        return message;
    };
    return Kettle2;
}());
var w2 = new Kettle2(300, 20);
console.log(w2.getTemperature(10));
console.log(w2.temperatureCheck());
