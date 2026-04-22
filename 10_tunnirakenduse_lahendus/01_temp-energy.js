var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MaterialAmount = /** @class */ (function () {
    function MaterialAmount(mass, heatCapacity, temperature) {
        this.mass = mass;
        this.heatCapacity = heatCapacity;
        this.temperature = temperature;
    }
    MaterialAmount.prototype.getCurrentTemperature = function () {
        return this.temperature;
    };
    MaterialAmount.prototype.getNewTemperature = function (joules) {
        var tempChange = joules / (this.mass * this.heatCapacity);
        this.temperature += tempChange;
    };
    //This method tells how much energy is needed to raise the temperature by 1 degree
    MaterialAmount.prototype.getJoulesPerKelvin = function () {
        // Q = m * c * deltaT
        // Q/deltaT = m * c
        // m * c is heat capacity of the object
        return this.mass * this.heatCapacity;
    };
    return MaterialAmount;
}());
var water = new MaterialAmount(3, 4200, 20);
var iron = new MaterialAmount(10, 412, 20);
water.getNewTemperature(10000);
iron.getNewTemperature(10000);
console.log(water.getCurrentTemperature());
console.log(iron.getCurrentTemperature());
if (iron.getCurrentTemperature() > water.getCurrentTemperature()) {
    var changeAmount = 1000;
    iron.getNewTemperature(-changeAmount);
    water.getNewTemperature(changeAmount);
}
console.log("water temperature after tranfering 1000 j " + water.getCurrentTemperature() + " and iron after transfering -1000 is " + iron.getCurrentTemperature());
var AirAmount = /** @class */ (function (_super) {
    __extends(AirAmount, _super);
    function AirAmount(length, width, height, temperature) {
        return _super.call(this, length * width * height * 1.23, 1012, temperature) || this;
    }
    return AirAmount;
}(MaterialAmount));
//function to find the one final temperature for all objects
function getEqualTemperature(m) {
    //how much energy is needed to increase all the objects by 1 degree
    var jouleKelvinSum = 0;
    //total heat energy. This is different from the previous one because this includes temperature too
    var jouleSum = 0;
    //Go through each object one by one
    for (var i = 0; i < m.length; i++) {
        //add how much this object affects temperature
        jouleKelvinSum += m[i].getJoulesPerKelvin();
        //add this objects heat (size * temperature)
        jouleSum += m[i].getJoulesPerKelvin() * m[i].getCurrentTemperature();
    }
    //divide the total heat by total size to get the final temperature
    return jouleSum / jouleKelvinSum;
}
var water1 = new MaterialAmount(3, 4200, 21);
var iron1 = new MaterialAmount(10, 412, 55);
var airInRoom = new AirAmount(3, 2, 2.5, 20);
console.log("equal temperature is: " + getEqualTemperature([water1, iron1, airInRoom]));
