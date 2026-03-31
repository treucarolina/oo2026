class BlogPost{
    //What is currently displayed on the panel
    protected text:string="";

    pressButton(t: string):void{
        
        this.text += t;
        
        
    }

    charLength(t: string):string{
        let notif = "";
        if (t.length > 10) {
            notif = "Too many characters!"
        }   
        return notif
    }

    getTextContent():string{
        return this.text ;
    }
}

/*export{
    BlogPost
}*/