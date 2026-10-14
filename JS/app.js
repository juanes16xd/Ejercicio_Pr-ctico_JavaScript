const nombre = "Juan Esteban";
const edad = 17;
const Ciudad = "Armenia";
//imprimir el nombre, edad y ciudad en consola
console.log(`Me llamo ${nombre}, tengo ${edad} años y vivo en ${Ciudad}.`);
//mostrar el tipo de variable de cada una de las variables
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof Ciudad); 
//declarar la variable año actual
const anioActual = 2026;
const anioNacimiento = anioActual - edad;
console.log(`Nací en el año ${anioNacimiento}.`);
//declarar edad a texto y viceversa
const edadTexto = "19";
console.log(edadTexto + 1); //esto no cambia el valor de edadTexto, sigue siendo un string

Number(edadTexto); //esto convierte edadTexto a número
console.log(Number(edadTexto) + 1); //esto si cambia el valor a número y suma 1