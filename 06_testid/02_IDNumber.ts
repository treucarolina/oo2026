export class IDCode{
    constructor(protected code:string){}

    gender(){
        //parseInt converting string to a numeric value
        //(this.code[0]) takes the first character of the personal code
        //If the number is even (diviseble by 2), return female
        //If it is odd, return male
        return parseInt(this.code[0])%2===0? "F": "M";
    }
}