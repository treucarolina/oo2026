class BlogPost{
    //What is currently displayed on the panel
    protected text:string="";

    pressButton(t: string):void{
        
        this.text += t;

    }

    deleteButton():void{
        this.text = "";
    }

    charLength(t: string):string{
        let notif = "";
        if (t.length > 50) {
            notif = "Too many characters!"
        } else if (t.length < 10) {
            notif = "Write more characters!"
        }
        return notif
    }

    getTextContent():string{
        return this.text ;
    }
}

export{
    BlogPost
}