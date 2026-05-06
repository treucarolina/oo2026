var FoodItem = /** @class */ (function () {
    function FoodItem(name, protein, fats, carbonhydrates) {
        //error if the nutriens addad up are over 100
        //started giving error when they were >1 so I commented it out
        //if(protein + fats + carbonhydrates > 100) throw new Error("Percentage must not exceed 100%.");
        this.name = name;
        this.protein = protein;
        this.fats = fats;
        this.carbonhydrates = carbonhydrates;
    }
    FoodItem.prototype.getName = function () {
        return this.name;
    };
    FoodItem.prototype.getProtein = function () {
        return this.protein;
    };
    FoodItem.prototype.getFats = function () {
        return this.fats;
    };
    FoodItem.prototype.getCarbonHydrates = function () {
        return this.carbonhydrates;
    };
    return FoodItem;
}());
var potato = new FoodItem("potato", 1.9, 0.1, 15.5);
var sourcream = new FoodItem("sourcream", 3, 10, 4.1);
var sausage = new FoodItem("sausage", 9.6, 21.8, 7.2);
var FoodComponent = /** @class */ (function () {
    function FoodComponent(quantity, reference) {
        this.quantity = quantity;
        this.reference = reference;
    }
    FoodComponent.prototype.proteinContent = function (prot) {
        return (this.quantity * prot) / 100;
    };
    FoodComponent.prototype.fatContent = function (fats) {
        return (this.quantity * fats) / 100;
    };
    FoodComponent.prototype.carbonhydratesContent = function (ch) {
        return (this.quantity * ch) / 100;
    };
    return FoodComponent;
}());
var potatos = new FoodComponent(100, potato);
var sourcreams = new FoodComponent(30, sourcream);
var sausages = new FoodComponent(50, sausage);
console.log(potatos.proteinContent(potato.getProtein()));
console.log(sourcreams.proteinContent(sourcream.getProtein()));
console.log(sausages.proteinContent(sausage.getProtein()));
console.log(potatos.fatContent(potato.getFats()));
console.log(sourcreams.fatContent(sourcream.getFats()));
console.log(sausages.fatContent(sausage.getFats()));
console.log(potatos.carbonhydratesContent(potato.getCarbonHydrates()));
console.log(sourcreams.carbonhydratesContent(sourcream.getCarbonHydrates()));
console.log(sausages.carbonhydratesContent(sausage.getCarbonHydrates()));
//An attampt to do the Dish class
/*class Dish{
    name:string;
    componentsProtein:[];
    componentsFat:[];
    componentsCarbohydrates:[];

    constructor(name:string){;
        this.name = name;
        this.componentsProtein = [];
        this.componentsFat = [];
        this.componentsCarbohydrates = [];
    }

    addComponentFat(component:FoodComponent):void{
            this.components.push(component);
    }

    calculateFatContent(fats:number):number{
        let fat = 0;
        return (this.quantity * fats) / 100;
    }

}

let potatoSalad = new Dish("potato salad");
potatoSalad.addComponentFat()*/
