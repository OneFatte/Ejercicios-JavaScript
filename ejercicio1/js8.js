let nota = prompt("Ingresa la calificacion obtenida: ");


if (0 <= nota && nota < 6) {
    console.log("“reprobado”");
} else if (6 <= nota && nota <= 8) {
    console.log("“regular”");
} else if (8 < nota && nota <= 9) {
    console.log("“bien”");
} else if (9 < nota && nota <= 10) {
    console.log("“excelente”");
} else {
    console.log("error");
}