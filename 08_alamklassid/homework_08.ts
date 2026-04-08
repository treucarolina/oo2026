abstract class AbstractGame{
    abstract getGameScore():number;


}

class Game1 extends AbstractGame{
    s:number;
    constructor(s:number){
        super();
        this.s=s;
    };

    getGameScore(): number {
        return this.s
    }
}

let sc1 = new Game1(100);
console.log("Game1 score: " + sc1.getGameScore()+ " points");

class VipScore extends AbstractGame{
    s:number;
    vip:boolean = false
    constructor(s:number){
        super();
        this.s=s;
    };

    isVip(state:boolean){
        this.vip = state;
    }

    getGameScore(): number {
        return (this.vip ? this.s*3:this.s)
    }
}

let sc2 = new VipScore(100);
sc2.isVip(true);
console.log("VipScore score: " + sc2.getGameScore() + " points");

abstract class MultipleScores extends AbstractGame{
    scores: AbstractGame[] = [];

    addScore(s:AbstractGame){
        this.scores.push(s);
    }
}

class EasyGame extends MultipleScores{

    getGameScore(): number {
        let totalScore:number = 0;

        for (let score of this.scores){
            totalScore += score.getGameScore();
        };
        return totalScore * 2;
    }
}

let sc3:EasyGame = new EasyGame();
sc3.addScore(new Game1(100));
sc3.addScore(new Game1(200));

let vipPlayer = new EasyGame();
let vp:VipScore = new VipScore(100);
let vp2 = new VipScore(200);
vp.isVip(true);
vp2.isVip(true);
vipPlayer.addScore(vp);
vipPlayer.addScore(vp2);
console.log("---------------------------");
console.log("Score of easy game: " + sc3.getGameScore() + "points");
console.log("Score of a vipPlayer in easy game: " + vipPlayer.getGameScore() + "points");

class DifficultGame extends MultipleScores{
    getGameScore(): number {
        let totalScore:number = 0;

        for (let score of this.scores){
            totalScore += score.getGameScore();
        };
        return totalScore / 2;
    }
}

let sc4:DifficultGame = new DifficultGame();
sc4.addScore(new Game1(100));
sc4.addScore(new Game1(200));
console.log("Score of difficult game: " + sc4.getGameScore() + " points");

let vipPlayer2 = new DifficultGame();
vipPlayer2.addScore(vp);
vipPlayer2.addScore(vp2);
console.log("Score of a vipPlayer in difficult game: " + vipPlayer2.getGameScore() + "points");