/* Ejercicio 4, refactoriza el código
Dado los siguientes códigos, refactorízalos como consideres, si consideras que está bien, explica el motivo. 

Primer código
Tenemos una función que saca el nombre completo del usuario con el nombre y apellido */

let nacionalidadNativo = "España";
let edadAyuda = 30;

class usuario {
  constructor(
    nombre,
    apellido,
    edad,
    profesion,
    salario = 0,
    nacionalidad = "España",
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.profesion = profesion;
    this.salario = salario;
    this.nacionalidad = nacionalidad;
  }

  nombreUsuario() {
    const nombrCompleto = "Me llamo " + this.nombre + " " + this.apellido;

    return nombrCompleto;
  }

  userData() {
    const annualSalary = this.salario * 12;
    const fullName = `${this.nombre} ${this.apellido}`;

    return `Me llamo ${fullName} y cobro ${annualSalary}€ al año`;
  }

  esExtrangero() {
    if (this.nacionalidad != nacionalidadNativo && this.edad == edadAyuda)
      return "Apto para la ayuda del gobierno";

    return "No es apto para la ayuda del gobierno";
  }
}
let presidente = new usuario("Pedro", "Sánchez", 45, "Barro man", 1000);

console.log(presidente.nombreUsuario());

/* Segundo código
Tenemos una función que calcula el salario anual y el nombre del usuario */

console.log(presidente.userData());

/* Tercer código
Si el usuario tiene 30 años y no es español, recibirá una ayuda del gobierno de 2000€ */

const user = new usuario("Álvaro", "Morón", 30, "", 0, "Morocco");

console.log(user.esExtrangero());
