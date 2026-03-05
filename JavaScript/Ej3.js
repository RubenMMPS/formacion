/*
¿Qué salida tendrán los siguientes console.log?
*/

// Comparaciones con booleanos
console.log(false + false); //Devuelve "0" porque el valor booleano False equivale numéricamente a 0.
console.log(false + true); // Devuelve "1" porque el valoer booleano True equivale númericamente a 1, entonces al sumar false (0) y true (1), el resultado es 1.
console.log(true + true); //Devuelve "2" porque al sumar dos valores true (1 + 1), el resultado es 2.

// Comparaciones con arrays
console.log([] === []); //Devuelve "false" porque al hacer una igualdad estricta los dos arrays se comparan por referencia, no por valor.
console.log([] + []); // Devuelve un espacio en blanco porque al sumar dos arrays vacíos, se convierten a cadenas vacías.
console.log([1, 2] + [3, 4]); // Devuelve "1,23,4" porque suma los dos ararys sin poner nungún espacio de por medio.
console.log([1] + 1); // Devuelve "11" porque esta sumando un array con un número, entonces el array se convierte a una cadena y se concatena con el número.
console.log([1] - 1); // Devuelve "0" porque al restar un array con un número, al contrario que el caso anterios, el array se convierte a un número y se resta con el número.

// Comparaciones con objetos
console.log({} + {}); // Devuelve "[object Object][object Object]" porque al sumar dos objetos vacios Javascript intenta convertirlos en valores primitivos por lo que aquí se convierten en string.
console.log({} === {}); // Devuelve "false" porque al hacer una igualdad estricta los dos objetos se comparan por referencia, no por valor.
console.log([] === {}); // Devuelve "false" porque al hacer una igualdad estricta se compara que los dos valores sean completamnete iguales tanto en valor como en tipo, y un array y un objeto son de tipos diferentes.

// Comparaciones especiales
console.log(null + 1); // Devuelve "1" porque Javascript convierte "null" en a un valor numérico como es 0.
console.log(undefined + 1); // Devuelve "NaN" (Not a Number) porque Javascript al intentar convertir "undefined" a un valor numérico, el resultado es "NaN".
console.log(null == 0); // Devuelve "false" porque al hacer igualdad débil se comparan los dos valores por valor, y "null" solo es igual a "undefined" y no a ningún otro valor.
console.log(null <= 0); // Devuelve "true" porque Javascript convierte "null" en 0 al hacer coherción de tipos y lo compara si es menor o igual que 0, lo cual hace que devuelva true.
console.log(undefined == null); // Devuelve "true" porque al hacer iguaqldad débil se hace una coherción de tipos, y debido a que null es igual a undefined es true

// Operaciones con NaN
console.log(NaN + 1); // Devuelve "NaN" (Not a Number) porque al sumar cualquier valor con "NaN", el resultado siempre es "NaN".
console.log(NaN == NaN); // Devuelve "false" porque "NaN" no es igual a ningún valor, ni siquiera a sí mismo.
console.log(NaN === NaN); // Devuelve "false" por lo mismo que el anterior, "NaN" no es igual a ningún valor, ni siquiera a sí mismo.
