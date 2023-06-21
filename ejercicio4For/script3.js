let arreglo = [4, "dos", 8, "tres", 5, 9, 1, "cero"];

for (let i = 0; i < arreglo.length; i++) {
    if (!isNaN(arreglo[i])) {
        console.log(arreglo[i]);
    }
    if (typeof arreglo[i] === 'number') {
        console.log(arreglo[i]);
    }
}