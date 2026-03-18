class Kettle {
    constructor(protected waterAmount:number, protected waterTemperature:number){}

    temperatureCheck():string{
        let message:string = "";
        if (this.waterTemperature >= 80){
            message = "Water temperature is atleast 80 degrees";
        } else {
            message= "Water temperature is below 80 degrees";
        }
        return message
    }


}

let w1 = new Kettle(300, 20);
console.log(w1.temperatureCheck());