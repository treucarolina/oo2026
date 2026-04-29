class Item {
    ID:string;
    title:string;
    author:string;
    year:number;

    constructor(ID:string, title:string, author:string, year:number){
        //Removes the whitespaces from both ends of the string
        //=== checking whether this is empty after removing spaces
        if(ID.trim()==="") throw new Error("ID cannot be empty");
        this.ID = ID;
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getID():string{return this.ID;};
    getTitle():string{return this.title;};
    getYear():number{return this.year;};
    getAuthor():string{return this.author;};
    getSummary():string{return `{item} $(this.title)`;}
}

//--------------------------------------------Book------------------------------------------
class Book extends Item {
    pages:number;
    ISBN:string;

    constructor(ID:string, title:string, author:string, year:number, pages:number, ISBN:string){
        super(ID, title, author, year);
        if(pages <= 0) throw new Error("Pages must be positive");
        this.pages=pages;
        this.ISBN=ISBN;
    }

    getSummary(): string {
        return `[Book] ${this.title} (${this.year})`
    }

    toFillLine():string{
        return `[Book]|${this.ID}|${this.title}|${this.author}|${this.year}|${this.pages}|${this.ISBN}`;
    }
}

//-------------------------------------DVD---------------------------------------------------
class DVD extends Item{
    duration: number;
    constructor(ID:string, title:string, director:string, year:number, duration:number){
        super(ID, title, director, year )
        if(duration <= 0) throw new Error("Duration must be positive");
        this.duration = duration;
    }

    getSummary(): string {
        return `[DVD] ${this.title} (${this.year})`
    }

    toFillLine():string{
        return `[DVD]|${this.ID}|${this.title}|${this.author}|${this.year}|${this.duration}`;
    }
}


//------------------------------------Library-------------------------------------------------
//Manage all the items
class Library{
    items:Item[];

    constructor(){this.items=[]}//starts with an empty list

    addItem(item:Item):void{
        this.items.push(item);
    }

    getAll():Item[]{
        return this.items;
    }

    toText():string{
        //map is an array method, it takes each item and transforms it
        //i: each item in the array 
        //item1.toFillLine converts object string
        return this.items.map((i:any) => i.toFillLine()).join("\n")
        //\n means new line 
        // join("\n") : means join everything with line breaks
    }

    //Convert text to objects, because we need to read item details from text files
    loadFromText(text:string):string[]{
        const lines = text.split("\n");
        const errors:string[] = [];
        for (let line of lines){
            try{
                const parts = line.split("");
                if (parts[0] === "BOOK"){
                    this.addItem(new Book(
                        parts[1], parts[2], parts[3],
                        Number(parts[4]), Number(parts[5]), parts[6]
                    ));
                } else if (parts[0] === "DVD"){
                    this.addItem(new DVD(
                        parts[1], parts[2], parts[3], Number(parts[4]), Number(parts[5])
                    ));
                } 
            } catch (e){
                errors.push("Error" + line);
            }
        }
        return errors;
    }
}

export{
    Item,
    Book,
    DVD,
    Library
}

const item1 = new Item("1", "Generic item", "unknown", 2020);
console.log(item1)
const book1 = new Book("28", "Harry Potter", "J.K Rowling", 1990, 300, "334445");
const book2 = new Book("38", "The Hobbit", "J.R.R Tolkien", 1937, 300, "554445");

console.log(book1);
console.log(item1.getSummary());
console.log(book1.getSummary());
console.log(book1.toFillLine());
const lib = new Library();
lib.addItem(book1);
lib.addItem(book2);
console.log(lib.toText());