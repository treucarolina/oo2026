interface gameInfo{
    pointsTotal(x:number):number;

    levelPointsTotal(x:number): number;
}

class Game1 implements gameInfo{
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

class Game2 implements gameInfo{
    constructor(protected itemValue:number, protected levelPoints:number){}

    //Calculates how many points a player has based on the items
    pointsTotal(amount:number):number{
        return (amount*this.itemValue)/2;
    }

    //Calculates how many lvl points a player has also based on the items
    levelPointsTotal(amount:number):number{
        return (amount*this.levelPoints)/2;
    }

}

