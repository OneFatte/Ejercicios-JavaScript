const arreglo = [];

let numero;

while (!(numero == 0)) {
    numero = prompt("Ingresa un numero, para salir oprima 0");
    parseInt(numero);

    if (!isNaN(numero) && numero != 0) {

        arreglo.push(Number(numero));
    }
};

const elemento = document.getElementById("elemento");
elemento.innerText = arreglo;
console.log(arreglo);