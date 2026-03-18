var Kettle3 = /** @class */ (function () {
    function Kettle3(waterAmount, waterTemperature) {
        this.waterAmount = waterAmount;
        this.waterTemperature = waterTemperature;
        this.realTemp = 0;
    }
    Kettle3.prototype.getTemperature = function (seconds) {
        this.realTemp = (((1200 * seconds) / 4.19) / (500 + this.waterAmount)) + this.waterTemperature;
        return this.realTemp;
    };
    Kettle3.prototype.temperatureCheck = function () {
        var message = "";
        if (this.realTemp >= 80) {
            message = "Water temperature is atleast 80 degrees";
        }
        else {
            message = "Water temperature is below 80 degrees";
        }
        return message;
    };
    Kettle3.prototype.add = function (other) {
        var amount = (this.waterAmount + other.waterAmount);
        var t = ((this.waterAmount * this.waterTemperature) + other.waterAmount * other.waterTemperature) / (amount);
        console.log(amount, t);
        return new Kettle3(amount, t);
    };
    return Kettle3;
}());
var w3 = new Kettle3(300, 20);
var waters = [
    new Kettle3(80, 16),
    new Kettle3(90, 20),
    new Kettle3(71, 5),
    new Kettle3(60, 10),
];
//Combine all students into one total
var waterTotal = waters[0];
for (var i = 1; i < waters.length; i++) {
    waterTotal = waterTotal.add(waters[i]);
}
console.log(waterTotal.getTemperature(10));
console.log(waterTotal.temperatureCheck());
console.log(waterTotal);
