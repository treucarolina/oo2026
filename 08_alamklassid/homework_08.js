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
var AbstractGame = /** @class */ (function () {
    function AbstractGame() {
    }
    return AbstractGame;
}());
var Game1 = /** @class */ (function (_super) {
    __extends(Game1, _super);
    function Game1(s) {
        var _this = _super.call(this) || this;
        _this.s = s;
        return _this;
    }
    ;
    Game1.prototype.getGameScore = function () {
        return this.s;
    };
    return Game1;
}(AbstractGame));
var sc1 = new Game1(100);
console.log("Game1 score: " + sc1.getGameScore() + " points");
var VipScore = /** @class */ (function (_super) {
    __extends(VipScore, _super);
    function VipScore(s) {
        var _this = _super.call(this) || this;
        _this.vip = false;
        _this.s = s;
        return _this;
    }
    ;
    VipScore.prototype.isVip = function (state) {
        this.vip = state;
    };
    VipScore.prototype.getGameScore = function () {
        return (this.vip ? this.s * 3 : this.s);
    };
    return VipScore;
}(AbstractGame));
var sc2 = new VipScore(100);
sc2.isVip(true);
console.log("VipScore score: " + sc2.getGameScore() + " points");
var MultipleScores = /** @class */ (function (_super) {
    __extends(MultipleScores, _super);
    function MultipleScores() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scores = [];
        return _this;
    }
    MultipleScores.prototype.addScore = function (s) {
        this.scores.push(s);
    };
    return MultipleScores;
}(AbstractGame));
var EasyGame = /** @class */ (function (_super) {
    __extends(EasyGame, _super);
    function EasyGame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EasyGame.prototype.getGameScore = function () {
        var totalScore = 0;
        for (var _i = 0, _a = this.scores; _i < _a.length; _i++) {
            var score = _a[_i];
            totalScore += score.getGameScore();
        }
        ;
        return totalScore * 2;
    };
    return EasyGame;
}(MultipleScores));
var sc3 = new EasyGame();
sc3.addScore(new Game1(100));
sc3.addScore(new Game1(200));
var vipPlayer = new EasyGame();
var vp = new VipScore(100);
var vp2 = new VipScore(200);
vp.isVip(true);
vp2.isVip(true);
vipPlayer.addScore(vp);
vipPlayer.addScore(vp2);
console.log("---------------------------");
console.log("Score of easy game: " + sc3.getGameScore() + "points");
console.log("Score of a vipPlayer in easy game: " + vipPlayer.getGameScore() + "points");
var DifficultGame = /** @class */ (function (_super) {
    __extends(DifficultGame, _super);
    function DifficultGame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DifficultGame.prototype.getGameScore = function () {
        var totalScore = 0;
        for (var _i = 0, _a = this.scores; _i < _a.length; _i++) {
            var score = _a[_i];
            totalScore += score.getGameScore();
        }
        ;
        return totalScore / 2;
    };
    return DifficultGame;
}(MultipleScores));
var sc4 = new DifficultGame();
sc4.addScore(new Game1(100));
sc4.addScore(new Game1(200));
console.log("Score of difficult game: " + sc4.getGameScore() + " points");
var vipPlayer2 = new DifficultGame();
vipPlayer2.addScore(vp);
vipPlayer2.addScore(vp2);
console.log("Score of a vipPlayer in difficult game: " + vipPlayer2.getGameScore() + "points");
