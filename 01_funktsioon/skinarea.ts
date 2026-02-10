//This function helps with calculating the area of skin based on weight(kg) and height(cm)
function skinArea(kg:number, cm:number):number{
    let area: number = Math.sqrt(kg*cm / 3600);
    let roundArea: number = Math.round(area*100)/100;
    return roundArea
}

let heigths:number[] = [158,164,174,189,201]

for(let height of heigths){
    console.log(skinArea(70, height) + " m²")
}