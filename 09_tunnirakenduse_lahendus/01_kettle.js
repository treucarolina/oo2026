var Water = /** @class */ (function () {
    //constructor runs when a new water object is created
    function Water(waterAmount, temperature) {
        this.heatingPower = 0; //starts at 0 means heater is switched off. Heating power = 0 watts
        this.specialHeatCapacity = 4200;
        this.waterAmount = waterAmount;
        this.temperature = temperature;
    }
    Water.prototype.setHeatingPower = function (newPower) {
        //power = joules per second
        this.heatingPower = newPower;
    };
    Water.prototype.getTemperature = function () {
        return this.temperature;
    };
    Water.prototype.heatASecond = function () {
        this.temperature = (((this.heatingPower * 1) / (this.specialHeatCapacity / 1000)) / (this.waterAmount)) + this.temperature;
    };
    Water.prototype.secondsNeeded = function (targetTemperature) {
        var seconds;
        return seconds = (this.waterAmount / 1000) * (targetTemperature - this.temperature) * (this.specialHeatCapacity) / (this.heatingPower);
    };
    return Water;
}());
var w = new Water(800, 20);
console.log(w.getTemperature());
w.setHeatingPower(1500);
console.log(w.getTemperature());
w.heatASecond();
console.log(w.getTemperature());
console.log(w.secondsNeeded(80));
