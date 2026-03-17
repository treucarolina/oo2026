var Battery = /** @class */ (function () {
    function Battery(maxCapacity, startingChargeLevel, watts, seconds) {
        this.maxCapacity = maxCapacity;
        this.startingChargeLevel = startingChargeLevel;
        this.watts = watts;
        this.seconds = seconds;
    }
    Battery.prototype.getStartingChargeLevel = function () {
        return this.startingChargeLevel;
    };
    Battery.prototype.currentChargingLevel = function () {
        return ((this.watts * this.seconds) / 3.6) + this.startingChargeLevel;
    };
    Battery.prototype.notification = function () {
        var notif = "";
        if (this.currentChargingLevel() === 0) {
            notif = "Warning! Battery too low.";
            console.log(notif);
        }
        else if (this.currentChargingLevel() === this.maxCapacity) {
            notif = "Warning! Battery capacity reached.";
            console.log(notif);
        }
        else if (this.currentChargingLevel() > this.maxCapacity) {
            notif = "Warning! Battery capacity overreached.";
            console.log(notif);
        }
        return notif;
    };
    Battery.prototype.chargingPercentage = function () {
        return this.currentChargingLevel();
    };
    return Battery;
}());
var b1 = new Battery(100, 2, 50, 10);
console.log(b1.getStartingChargeLevel());
console.log(b1.notification());
