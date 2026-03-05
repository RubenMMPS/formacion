/*
Ejercicio 5, maps
Sigue los siguientes pasos:

Crea un mapa llamado myMap
Añade los siguientes key-valor al map
Clave	Valor
moroso	user (object)
agarrado	user (object)
generoso	user2 (object)
funcion	findAnimal (function)
color	color (string)
Muestra por consola todo el map
Muestra por consola el key moroso
Comprueba si existe la key hola
Muestra por consola el tamaño total del map
Recorre el map con un forEach
Elimina el elemento agarrado del map
Limpia el mapa por completo
*/

const user = { name: "Juan", deuda: 500 };
const user2 = { name: "Marta", deuda: 0 };
const findAnimal = () => "Pinguino";
const color = "Verde";

const myMap = new Map();

myMap.set("moroso", user);
myMap.set("agarrado", user);
myMap.set("generoso", user2);
myMap.set("funcion", findAnimal);
myMap.set("color", color);

console.log(myMap);

console.log(myMap.get("moroso"));

console.log(myMap.has("hola"));

console.log(myMap.size);

myMap.forEach((valor, clave) => {
  console.log("Clave: " + clave + " | Valor: " + valor);
});

myMap.delete("agarrado");

console.log(myMap);

myMap.clear();

console.log(myMap);
