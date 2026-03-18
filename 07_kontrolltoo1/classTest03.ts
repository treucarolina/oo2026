class Kettle3 {
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

    add(other:Kettle3): Kettle3{
        let amount = (this.waterAmount + other.waterAmount)
        let t = ((this.waterAmount*this.waterTemperature) + other.waterAmount * other.waterTemperature)/(amount)
        console.log(amount, t);
        return new Kettle3(amount, t)
    }

}

let waters: Kettle3[]=[
    new Kettle3(80,16),
    new Kettle3(90,20),
    new Kettle3(71,5),
    new Kettle3(60,10),
]

//Combine all students into one total
let waterTotal=waters[0];

for(let i=1; i<waters.length; i++){
    waterTotal=waterTotal.add(waters[i]);
}
console.log(waterTotal.getTemperature(10));
console.log(waterTotal.temperatureCheck());