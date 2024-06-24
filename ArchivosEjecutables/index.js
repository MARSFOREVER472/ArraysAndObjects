// CÓMO CREAR UN ARREGLO:

const miArreglo = ["David", "Juan", "Kevin"]; // ARREGLO 1.

// PARA PODER AGREGAR UN ELEMENTO DENTRO DE UN ARREGLO...

console.log(miArreglo); // LLAMAREMOS AL ARREGLO PRINCIPAL POR DEFECTO.

miArreglo.push("Carlos"); // AGREGAREMOS UN ELEMENTO AL ARREGLO, QUE ESTARÁ EN LA POSICIÓN 3.
console.log(miArreglo);

// LO GRABAREMOS HACIENDO "UNSHIFT" AL ELEMENTO:

miArreglo.unshift("Carlos");
console.log(miArreglo);

// PARA QUITAR ELEMENTOS DENTRO DE UN ARREGLO CUALQUIERA (1 O MÁS)...

let final = miArreglo.pop(); // ELIMINA LOS 2 PRIMEROS VALORES DENTRO DEL ARREGLO.
console.log(miArreglo); // IMPRIME SOLAMENTE EL ÚLTIMO VALOR SIN CONTAR LOS 2 VALORES ELIMINADOS.
console.log(final); // IMPRIME EL ÚLTIMO VALOR DEL ARREGLO.
let inicio = miArreglo.shift(); // INICIALMENTE RENOVAREMOS EL ARREGLO.
console.log(miArreglo); // IMPRIME EL ÚLTIMO VALOR ACTUAL DEL ARREGLO.

// PARA PODER ACCEDER A LOS ELEMENTOS DE DICHO ARREGLO...

var nombre = miArreglo[0]; // DECLARAMOS UNA VARIABLE CON SU TIPO DE DICHA VARIABLE.
console.log(nombre); // IMPRIME EL VALOR 0 DE ESTE ARREGLO.

nombre = miArreglo[1];
console.log(nombre); // IMPRIME EL VALOR 1 DE ESTE ARREGLO.

nombre = miArreglo[2];
console.log(nombre); // IMPRIME EL VALOR 2 DE ESTE ARREGLO.

// const miArreglo = ["David", 156, "Kevin"]; // ARREGLO INCORRECTO!!!!!!

// PROPIEDAD "length" (Longitud):

const quantity = miArreglo.length; // CANTIDAD DE ELEMENTOS DENTRO DE UN ARREGLO.

console.log(quantity); // IMPRIME EL VALOR NÚMERO 3.

// RECORRER / ITERAR EL ARREGLO:

const nombres = ["David", "Juan", "Kevin"];

for (let i = 0; i < nombres.length; i++)
    {
        console.log(nombres[i]);
    }

// PARA ACCEDER A AQUELLOS ELEMENTOS:

const myArray = ["Casa", "Baño", "Apertura"]; // ARREGLO 2.

var elemento = myArray[0]; // IMPRIME EL VALOR EN EL ARREGLO DEL PRIMERO, QUE EN ESTE CASO ES "Casa".
var elemento1 = myArray[1]; // IMPRIME OTRO VALOR, PERO ESTA VEZ EN EL ARREGLO 1, QUE ESTÁ AL MEDIO, QUE EN ESTE CASO ES "Baño".
var elemento2 = myArray[2]; // IMPRIME EL ÚLTIMO VALOR DEL ARREGLO ("Apertura").

console.log(elemento);
console.log(elemento1);
console.log(elemento2);