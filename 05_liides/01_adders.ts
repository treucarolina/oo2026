interface Adder{
    //This takes a number and add to something.
    add(nr:number):void;
    //This method returns the current total.
    getSum():number;
}

class SimpleAdder implements Adder{
    protected sum:number=0;

    add(nr:number): void {
        this.sum+=nr;
    }

    getSum(): number {
        return this.sum;
    }


}

let adder1:Adder=new SimpleAdder()
adder1.add(3);
adder1.add(7);
console.log(adder1.getSum());


class CharCounter{
    //The constructor receives an Adder object and stores it inside the class
    constructor(protected adder:Adder){}

    addWordCharacters(word:string): void{
        this.adder.add(word.length)
    }

    //Return total character count
    getCharacterCount(){
        return this.adder.getSum();
    }
}

let counter1:CharCounter = new CharCounter(adder1);
counter1.addWordCharacters("apple");
counter1.addWordCharacters("Carolina");
console.log(counter1.getCharacterCount());