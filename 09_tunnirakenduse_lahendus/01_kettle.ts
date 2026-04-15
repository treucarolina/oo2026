class Water {
    waterAmount:number;
    temperature:number;
    heatingPower:number = 0; //starts at 0 means heater is switched off. Heating power = 0 watts
    readonly specialHeatCapacity:number = 4200;

    //constructor runs when a new water object is created
    constructor(waterAmount:number, temperature:number){
        this.waterAmount = waterAmount;
        this.temperature = temperature;
    }

    setHeatingPower(newPower:number): void{
        //power = joules per second
        this.heatingPower = newPower;
    }

    getTemperature():number{
        return this.temperature;
    }

    heatASecond():void {
        this.temperature = (((this.heatingPower * 1)/(this.specialHeatCapacity/1000))/(this.waterAmount)) + this.temperature;
    }

    secondsNeeded(targetTemperature:number):number {
        let seconds:number;
        return seconds = (this.waterAmount/1000)*(targetTemperature - this.temperature)*(this.specialHeatCapacity)/(this.heatingPower);
    }
}

let w = new Water(800, 20); 
console.log(w.getTemperature());
w.setHeatingPower(1500);
console.log(w.getTemperature());
w.heatASecond();
console.log(w.getTemperature());
console.log(w.secondsNeeded(80));