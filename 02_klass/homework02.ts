class Player {
    constructor(protected itemValue:number, protected levelPoints:number){}

    pointsTotal(amount:number):number{
        return amount*this.itemValue;
    }

    levelPointsTotal(amount:number):number{
        return amount*this.levelPoints;
    }

}

let item1 = new Player(5, 50);
let item2 = new Player(25, 100);
let item3 = new Player(30, 200);
let item4 = new Player(100, 400);
let item5 = new Player(500, 800);

let players = [
    {username:"Mona", item1: 200, item2: 3, item3: 10, item4: 51, item5: 4},
    {username:"James", item1: 500, item2: 10, item3: 3, item4: 4, item5: 0},
    {username:"Ellie", item1: 54, item2: 145, item3: 17, item4: 2, item5: 1},
    {username:"Billy", item1: 1, item2: 120, item3: 7, item4: 0, item5: 10},
    {username:"Junu", item1: 55, item2: 0, item3: 54, item4: 25, item5: 2}
]


let bestPlayer:string = "";
let bestPlayerValue:number = 0;
for (let player of players){
    let lvl= 0;
    let points= 0;
    lvl += item1.levelPointsTotal(player.item1);
    lvl += item2.levelPointsTotal(player.item2);
    lvl += item3.levelPointsTotal(player.item3);
    lvl += item4.levelPointsTotal(player.item4);
    lvl += item5.levelPointsTotal(player.item5);

    points += item1.pointsTotal(player.item1);
    points += item2.pointsTotal(player.item2);
    points += item3.pointsTotal(player.item3);
    points += item4.pointsTotal(player.item4);
    points += item5.pointsTotal(player.item5);

    lvl = lvl / 1000;
    let roundlvl: number = Math.floor(lvl);
    let playerValue:number = Math.round((points/1000) + lvl)
    console.log("Player username:", player.username + ", level:", roundlvl + ", points:", points + ", player value:", playerValue)

    if (playerValue > bestPlayerValue){
        bestPlayerValue = playerValue
        bestPlayer = player.username
    }
}

console.log("Best player is:", bestPlayer)