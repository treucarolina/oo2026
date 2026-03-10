var Game1 = /** @class */ (function () {
    function Game1(itemValue, levelPoints) {
        this.itemValue = itemValue;
        this.levelPoints = levelPoints;
    }
    //Calculates how many points a player has based on the items
    Game1.prototype.pointsTotal = function (amount) {
        return amount * this.itemValue;
    };
    //Calculates how many lvl points a player has also based on the items
    Game1.prototype.levelPointsTotal = function (amount) {
        return amount * this.levelPoints;
    };
    return Game1;
}());
var Game2 = /** @class */ (function () {
    function Game2(itemValue, levelPoints) {
        this.itemValue = itemValue;
        this.levelPoints = levelPoints;
    }
    //Calculates how many points a player has based on the items
    Game2.prototype.pointsTotal = function (amount) {
        return (amount * this.itemValue) / 2;
    };
    //Calculates how many lvl points a player has also based on the items
    Game2.prototype.levelPointsTotal = function (amount) {
        return (amount * this.levelPoints) / 2;
    };
    return Game2;
}());
