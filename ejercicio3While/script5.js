let input;

while (!(input == "domingo")) {

    input = prompt("Ingresa un dia de la semana");

    if (!isNaN(input) && input != " ") {
        alert("No se pueden numeros")
    } else {
        input.toLowerCase();
        if (input === "lunes") {
            alert("Hoy es lunes, un dia feriado");
        } else if (input === "viernes") {
            alert("Vamonos de rumba");
        } else if (input === "sabado") {
            alert("Dia de deporte");
        } else if (input === "domigo") {
            alert("Ve a descansar");
        } else {
            alert("Muchas clases");
        }
    }

};

const elemento = document.getElementById("elemento");
elemento.innerText = cadena;
console.log(cadena);