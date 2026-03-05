/* Ejercicio 2, Hoisting
Que devuelve por consola cada uno de los siguientes console.log
*/

console.log(a);
var a = "hola";

/*
Devuelve undefined porque al declarar la variable con "var" esta se define como undefined hasta que se le asigna un valor.
*/

console.log(b);
let b = "hola";

/*
Devuelve un ReferenceError diciendo que no puede acceder a "b" antes de inicializarla porque al declarar la variable con "let" esta no se define hasta que se le asigna un valor. 
*/

console.log(c);
const c = "hola";

/*
Devuelve un ReferenceError diciendo que no puede acceder a "c" antes de inicializarla porque al declarar la variable con "const" esta no se define hasta que se le asigna un valor.
*/

sayHi();

/*
Devuelve: "Hola desde sayHi!" porque las funciones aunque se declaren después de la llamada a la función, se "hoistean", por lo que la función sayHi está disponible para ser llamada antes de su declaración.
*/

function sayHi() {
  console.log("Hola desde sayHi!");
}

function sayBye() {
  console.log("Adios desde sayBye!");
}

sayBye();

/*
Devuelve: "Adios desde sayBye!" porque se ejecuta la función que se ha definido anteriormente de forma normal 
*/
