interface PlayerInfo{
    pointsTotal(x:number):number;

    levelPointsTotal(x:number): number;
}

class Player1 implements PlayerInfo{
    constructor(protected itemValue:number, protected levelPoints:number){}

    //Calculates how many points a player has based on the items
    pointsTotal(amount:number):number{
        return amount*this.itemValue;
    }

    //Calculates how many lvl points a player has also based on the items
    levelPointsTotal(amount:number):number{
        return amount*this.levelPoints;
    }

}

let bestPlayer1:string = "";
let bestPlayerValue1:number = 0;
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