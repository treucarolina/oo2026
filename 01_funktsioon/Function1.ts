//Function 01
function sayHello(){
    return "Hello world";
}

let message1 = sayHello();
console.log(message1);

//Function 02

function multiply(a:number, b:number){
    return a*b;
}

let answer = multiply(4,5);
console.log(answer);

//Function 03
//Calvulate BMI

function BMI(cm:number, kg:number):number {
    //STep 1: Convert cm to m
    let m:number = cm / 100
    //Step 2: Return BMI value using formula
    return kg / (m*m);
}

//let answer2 = BMI(175, 70);
//console.log(answer2)
console.log(BMI(175,70));

let weights:number[] = [ 78,65,48,55,105]

for(let weight of weights){
    console.log(BMI(180, weight))
}

//map runs given function once for each value in the array.
//For each weight, BMI is called.
//THe returnd BMI values are collected into a new array.
let bmivalue: number [] = weights.map(weight => BMI(180, weight))
console.log(bmivalue)

//function 04- But different function for BMI
//Alternative formula for BMI 
function BMI2 (cm:number, kg:number):number{
    let m:number = cm/100;
    return 1.3*kg/Math.pow(m,2.5);
}

let bmivalue2: number [] = weights.map(weight => BMI2(180, weight))
console.log(bmivalue2)

let results:number[][] = [];

for(let height=150; height<180; height+=2){
    results.push([
        height,
        BMI(height,90),
        BMI2(height, 90)
    ])
}
console.log(results);



function circle(radius:number):number{
    const pi: number = 3.1415;
    let area: number =  pi * Math.pow(radius, 2);
    let roundArea: number = Math.round(area*100/100);
    return roundArea;
}

let radius: number = 10;
let area:number = circle(radius);
console.log(area)