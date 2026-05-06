class FoodItem{
    name:string;
    protein:number;
    fats:number;
    carbonhydrates:number;

    constructor(name:string, protein:number, fats:number, carbonhydrates:number){
        //error if the nutriens addad up are over 100
        //started giving error when they were >1 so I commented it out
        //if(protein + fats + carbonhydrates > 100) throw new Error("Percentage must not exceed 100%.");
        this.name = name;
        this.protein = protein;
        this.fats = fats;
        this.carbonhydrates = carbonhydrates;
    }

    getName():string{
        return this.name;
    }

    getProtein():number{
        return this.protein;
    }

    getFats():number{
        return this.fats;
    }

    getCarbonHydrates():number{
        return this.carbonhydrates;
    }

}

let potato = new FoodItem("potato", 1.9, 0.1, 15.5);
let sourcream = new FoodItem("sourcream", 3, 10, 4.1);
let sausage = new FoodItem("sausage", 9.6, 21.8, 7.2);

class FoodComponent{
    quantity:number
    reference:FoodItem;

    constructor (quantity:number, reference:FoodItem){
        this.quantity = quantity;
        this.reference = reference;
    }

    proteinContent(prot:number):number{
        return (this.quantity * prot) / 100;
    }

    fatContent(fats:number):number{
        return (this.quantity * fats) / 100;
    }

    carbonhydratesContent(ch:number){
        return (this.quantity * ch) / 100;
    }
}

let potatos = new FoodComponent(100, potato);
let sourcreams = new FoodComponent(30, sourcream);
let sausages = new FoodComponent(50, sausage);

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
