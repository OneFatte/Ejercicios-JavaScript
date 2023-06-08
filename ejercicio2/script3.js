const arreglo = [10, 40, 30, 20, 15, 5];
console.log("Arrreglo normal " + arreglo);
function ordenarNumeros(a, b) {
    return a - b;
}

console.log("Arreglo ordenado " + arreglo.sort(ordenarNumeros));
var max = Math.max(...arreglo);
var min = Math.min(...arreglo)
console.log("Mayor numero: " + max);
console.log("Menor numero: " + min);