var Battery = /** @class */ (function () {
    function Battery(maxCapacity, startingChargeLevel, watts) {
        this.maxCapacity = maxCapacity;
        this.startingChargeLevel = startingChargeLevel;
        this.watts = watts;
    }
    Battery.prototype.startingChargePercentage = function () {
        return this.startingChargeLevel;
    };
    Battery.prototype.currentChargingPercentage = function (seconds) {
        return ((this.watts * seconds) / 3.6) + this.startingChargeLevel;
    };
    Battery.prototype.notification = function () {
        if (this.currentChargingPercentage === 0) {
            var notif = "Warning! Battery too low.";
            console.log(notif);
        }
        else if (this.currentChargingPercentage == this.maxCapacity) {
            var notif = "Warning! Battery capacity reached.";
            console.log(notif);
        }
    };
    return Battery;
}());
var b1 = new Battery(100, 2, 50);
console.log(b1.startingChargePercentage());
