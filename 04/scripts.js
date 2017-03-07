// CREANDO OBJETOS
var miMascota = {
  tipo: 'Perro',
  raza: 'Pug',
  nombre: 'Dino',
  color: 'Negro',
  edad: 2,
  ladrar: function () {
    'use strict';
    return 'Guau, Guau';
  },
  llamar: function () {
    'use strict';
    return this.nombre + ', ven acá';
  }
};

var cadena = 'Soy una cadena de texto'; // literal
var numero = 10; // Literal
// var cadena2 = new String('Soy otra cadena de texto'); // Definido por constructor
// var numero2 = new Number(20); // Definido por constructor

/**
 * Recuperar (get) o definir (set) información de un objeto
 * propiedad -> un dato del objeto
 * método -> una función del objeto
 *
 * Se los llama con sintáxis de punto y el nombre de la clave.
 *
 * objeto.propiedad
 * objeto.método()
 *
 * Para definir propiedades y métodos se usa la misma sintáxis de punto.
 *
 * objeto.propiedad = valor
 * objeto.método = function() {
 *   contenido
 * }
 */

/**
 * STRICT MODE
 *
 * Se activa añadiendo el string "use strict" en la primera línea del scope (se recomienda que sea adentro de una función)
 */

(function saludar() {
  'use strict';
  var name = 'Juan';
  console.log('Hola ' + name);
})();

/**
 * THIS
 *
 * Es una palabra que apunta a un objeto y devolverá valores diferentes según las circunstancias.
 */

/**
 * CASO 1 --> this dentro de una función
 *
 * Si no se usa strict, devulve el objeto global (window). Si se usa struct devuelve undefined.
 */

(function test() {
  'use strict';
  console.log(this);
})();

/**
 * CASO 2 --> this dentro de un método
 *
 * En este caso this hace referencia al objeto.
 */

var persona = {
  nombre: 'Carmen',
  edad: 25,
  saludar: function () {
    'use strict';
    return 'Hola, me llamo ' + this.nombre + ' y tengo ' + this.edad + ' años.';
  }
};

/**
 * CASO 3 --> this dentro de event handler
 *
 * En este caso this hace referencia al elemento HTML que disparó el evento.
 */

(function obtenerFecha() {
  'use strict';
  var diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  var fecha = new Date();
  var diaSem = diasSemana[fecha.getDay()];
  var diaMes = fecha.getDate();
  var mes = meses[fecha.getMonth()];
  var ano = fecha.getFullYear();

  console.log(diaSem, diaMes, mes, ano);
})();
