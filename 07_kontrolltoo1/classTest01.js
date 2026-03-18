var Kettle = /** @class */ (function () {
    function Kettle(waterAmount, waterTemperature) {
        this.waterAmount = waterAmount;
        this.waterTemperature = waterTemperature;
    }
    Kettle.prototype.temperatureCheck = function () {
        var message = "";
        if (this.waterTemperature >= 80) {
            message = "Water temperature is atleast 80 degrees";
        }
        else {
            message = "Water temperature is below 80 degrees";
        }
        return message;
    };
    return Kettle;
}());
var w1 = new Kettle(300, 20);
console.log(w1.temperatureCheck());
