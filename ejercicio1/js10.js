let op1 = {
    nombre: "curso",
    valor: 4999,
    tiempo: 2,
};
let op2 = {
    nombre: "carrera",
    valor: 3999,
    tiempo: 6,
};
let op3 = {
    nombre: "master",
    valor: 2999,
    tiempo: 12,
};

let curso = prompt("Que desea estudiar: Curso, Carrera o Master");
curso.toLowerCase();
let valor;

if (curso == op1.nombre) {
    valor = op1;
    console.log("escojiste " + valor.nombre);
} else if (curso == op2.nombre) {
    valor = op2;
    console.log("escojiste " + valor.nombre);
} else if (curso == op3.nombre) {
    valor = op3;
    console.log("escojiste " + valor.nombre);
} else {
    alert("Escribe curso, carrera o master");
    valor = 0;
}


let tieneBeca = prompt("Tiene Beca ?");
let beca;
let costoTotal;
if (tieneBeca.toLowerCase() === "si") {

    let cualBeca = prompt("Cual Beca tienes?");
    cualBeca.toLowerCase();
    if (cualBeca == "facebook") {
        beca = 0.2;
        costoTotal = (valor.valor * beca) / valor.tiempo;
        console.log("Tu opcion vale: " + valor.valor + " y con descuento, queda en : " + costoTotal);
    } else if (cualBeca == "google") {
        beca = 0.15;
        costoTotal = (valor.valor * beca) / valor.tiempo;
        console.log("Tu opcion vale: " + valor.valor + " y con descuento, queda en : " + costoTotal);
    } else if (cualBeca == "jesua") {
        beca = 0.5;
        costoTotal = (valor.valor * beca) / valor.tiempo;
        console.log("Tu opcion vale: " + valor.valor + " y con descuento, queda en : " + costoTotal);
    } else {
        alert("Beca erronea, solo admitimos de google, facebook y jesua");
    }

} else {
    costoTotal = (valor.valor) / valor.tiempo;
    console.log("Tu opcion vale: " + costoTotal);
}



