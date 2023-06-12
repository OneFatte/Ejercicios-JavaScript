let input, cadena = "";

while (!(input == "0")) {

    input = prompt("Ingresa un caracter o palabra");

    if (!isNaN(input) && input != " ") {
        alert("No se pueden numeros")
    } else {
        cadena = cadena + input;
    }

};

const elemento = document.getElementById("elemento");
elemento.innerText = cadena;
console.log(cadena);