//This function helps with calculating the area of skin based on weight(kg) and height(cm)
function skinArea(kg, cm) {
    var area = Math.sqrt(kg * cm / 3600);
    var roundArea = Math.round(area * 100) / 100;
    return roundArea;
}
var heigths = [158, 164, 174, 189, 201];
for (var _i = 0, heigths_1 = heigths; _i < heigths_1.length; _i++) {
    var height = heigths_1[_i];
    console.log(skinArea(70, height) + " m²");
}
