var message = "Hello world";
var firstName = "Carolina";
var age = 15;
console.log("My name is " + firstName + " and age is " + age);
if (age < 7) {
    console.log("Free");
}
else {
    if (age < 16) {
        console.log("Buy a child ticket.");
    }
    else {
        console.log("Buy an adult ticket.");
    }
}
var symbols = []; //empty array
for (var nr = 0; nr < age; nr++) {
    symbols.push("*");
}
console.log(symbols);
console.log(symbols.join(""));
