class Kettle2 {
    protected realTemp:number = 0;
    constructor(protected waterAmount:number, protected waterTemperature:number){}

    getTemperature(seconds:number):number{
        this.realTemp = (((1200 * seconds)/4.19)/(500 + this.waterAmount)) + this.waterTemperature
        return this.realTemp
    }

    temperatureCheck():string{
        let message:string = "";
        if (this.realTemp >= 80){
            message = "Water temperature is atleast 80 degrees";
        } else {
            message= "Water temperature is below 80 degrees";
        }
        return message
    }


}

let w2 = new Kettle2(300, 20);
console.log(w2.getTemperature(10));
console.log(w2.temperatureCheck());