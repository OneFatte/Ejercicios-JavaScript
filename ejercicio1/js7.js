let dia = prompt("Ingresa un dia de la semana: ");

dia.toLowerCase();
if (dia === "lunes") {
    console.log("Hoy es lunes, un dia feriado");
} else if (dia === "viernes") {
    console.log("Vamonos de rumba");
} else if (dia === "sabado" || dia === "domingo") {
    console.log("A descansar");
} else {
    console.log("Muchas clases");
}