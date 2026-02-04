let message:string = "Hello world";

let firstName:string = "Carolina";
let age:number = 15;
console.log("My name is " + firstName + " and age is " + age);

if (age<7){
    console.log("Free");
}else {
    if (age<16){
        console.log("Buy a child ticket.");
    }else{
        console.log("Buy an adult ticket.");
    } 
}

let symbols: string[] = []; //empty array

for (let nr = 0; nr < age; nr++){
    symbols.push("*")
}

console.log(symbols);
console.log(symbols.join(""));