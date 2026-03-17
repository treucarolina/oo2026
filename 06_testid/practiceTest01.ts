class Battery {
    constructor(protected maxCapacity:number, protected startingChargeLevel:number, protected watts:number, protected seconds:number){}
    getStartingChargeLevel(){
        return this.startingChargeLevel
    }

    currentChargingLevel():number{
        return ((this.watts * this.seconds)/3.6) + this.startingChargeLevel
    }

    notification():string{
        let notif = "";
        if (this.currentChargingLevel() === 0){
            notif = "Warning! Battery too low."
            console.log(notif)
        } else if (this.currentChargingLevel() === this.maxCapacity){
            notif = "Warning! Battery capacity reached."
            console.log(notif)
        } else if(this.currentChargingLevel() > this.maxCapacity) {
            notif = "Warning! Battery capacity overreached."
            console.log(notif)
        }
        return notif;
    }

    chargingPercentage(): number{
        return (this.currentChargingLevel() * 100) / this.maxCapacity
    }
}

let b1 = new Battery(100, 2, 50, 10);
console.log(b1.getStartingChargeLevel());
console.log(b1.notification());