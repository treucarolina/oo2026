//Function 01
function sayHello() {
    return "Hello world";
}
var message1 = sayHello();
console.log(message1);
//Function 02
function multiply(a, b) {
    return a * b;
}
var answer = multiply(4, 5);
console.log(answer);
//Function 03
//Calvulate BMI
function BMI(cm, kg) {
    //STep 1: Convert cm to m
    var m = cm / 100;
    //Step 2: Return BMI value using formula
    return kg / (m * m);
}
//let answer2 = BMI(175, 70);
//console.log(answer2)
console.log(BMI(175, 70));
var weights = [78, 65, 48, 55, 105];
for (var _i = 0, weights_1 = weights; _i < weights_1.length; _i++) {
    var weight = weights_1[_i];
    console.log(BMI(180, weight));
}
//map runs given function once for each value in the array.
//For each weight, BMI is called.
//THe returnd BMI values are collected into a new array.
var bmivalue = weights.map(function (weight) { return BMI(180, weight); });
console.log(bmivalue);
//function 04- But different function for BMI
//Alternative formula for BMI 
function BMI2(cm, kg) {
    var m = cm / 100;
    return 1.3 * kg / Math.pow(m, 2.5);
}
var bmivalue2 = weights.map(function (weight) { return BMI2(180, weight); });
console.log(bmivalue2);
var results = [];
for (var height = 150; height < 180; height += 2) {
    results.push([
        height,
        BMI(height, 90),
        BMI2(height, 90)
    ]);
}
console.log(results);
function circle(radius) {
    var pi = 3.1415;
    var area = pi * Math.pow(radius, 2);
    var roundArea = Math.round(area * 100 / 100);
    return roundArea;
}
var radius = 10;
var area = circle(radius);
console.log(area);
