const arrayVacio = [];

function numeroRandonEntre(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let i = 0; i < 10; i++) {
    arrayVacio.push(numeroRandonEntre(0, 10));

}
console.log(arrayVacio);