class Battery {
    constructor(protected maxCapacity:number, protected startingChargeLevel:number, protected watts:number){}
    getStartingChargeLevell(){
        return this.startingChargeLevel
    }

    currentChargingLevel(seconds:number):number{
        return ((this.watts * seconds)/3.6) + this.startingChargeLevel
    }

    notification(){
        if (this.currentChargingLevel === 0){
            let notif = "Warning! Battery too low."
            console.log(notif)
        }
        else if (this.currentChargingLevel == this.maxCapacity){
            let notif = "Warning! Battery capacity reached."
            console.log(notif)
        }
    }

    chargingPercentage(): number{
        return this.currentChargingLevel
    }
}

let b1 = new Battery(100, 2, 50);
console.log(b1.startingChargeLevel());