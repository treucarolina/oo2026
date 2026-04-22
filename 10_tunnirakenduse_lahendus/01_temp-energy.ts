class MaterialAmount {
    mass:number;
    heatCapacity:number;
    temperature:number;
    constructor(mass:number, heatCapacity:number, temperature:number){
        this.mass = mass;
        this.heatCapacity = heatCapacity;
        this.temperature = temperature;
    }

    getCurrentTemperature():number{
        return this.temperature;
    }

    getNewTemperature(joules:number):void {
        let tempChange = joules/(this.mass * this.heatCapacity);
        this.temperature += tempChange;
    }

    //This method tells how much energy is needed to raise the temperature by 1 degree
    getJoulesPerKelvin():number{
        // Q = m * c * deltaT
        // Q/deltaT = m * c
        // m * c is heat capacity of the object
        return this.mass * this.heatCapacity;
    }

}

let water = new MaterialAmount(3, 4200, 20);
let iron = new MaterialAmount(10, 412, 20);
water.getNewTemperature(10000);
iron.getNewTemperature(10000);
console.log(water.getCurrentTemperature());
console.log(iron.getCurrentTemperature());

if(iron.getCurrentTemperature()>water.getCurrentTemperature()){
    let changeAmount:number=1000;
    iron.getNewTemperature(-changeAmount);
    water.getNewTemperature(changeAmount);
}

console.log("water temperature after tranfering 1000 j " + water.getCurrentTemperature() + " and iron after transfering -1000 is " + iron.getCurrentTemperature());

class AirAmount extends MaterialAmount{
    constructor (length:number, width:number, height:number, temperature:number){
        super(length*width*height*1.23, 1012, temperature);
    }
}

//function to find the one final temperature for all objects
function getEqualTemperature(m: Array<MaterialAmount>):number {
    //how much energy is needed to increase all the objects by 1 degree
    let jouleKelvinSum = 0;
    //total heat energy. This is different from the previous one because this includes temperature too
    let jouleSum = 0;

    //Go through each object one by one
    for(let i=0; i<m.length; i++){
        //add how much this object affects temperature
        jouleKelvinSum += m[i].getJoulesPerKelvin();
        //add this objects heat (size * temperature)
        jouleSum += m[i].getJoulesPerKelvin()*m[i].getCurrentTemperature();

    }

    //divide the total heat by total size to get the final temperature
    return jouleSum/jouleKelvinSum;
}

let water1 = new MaterialAmount(3, 4200, 21);
let iron1 = new MaterialAmount(10, 412, 55);
let airInRoom = new AirAmount(3, 2, 2.5, 20);
console.log("equal temperature is: " + getEqualTemperature([water1, iron1, airInRoom]))