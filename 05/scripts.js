// (function(){
//   'use strict';
//   var miAlerta = function(){
//     alert('Hiciste click');
//   };
//   addEventListener('click',miAlerta);
// })(); // Asociado al evento window

/**
 * FUNCION PARA MOSTRAR UNA ALERTA
 * 
 * se muestra la alerta cuando se hace click en el elemento p
 * con el ID parrafo.
 */
(function(d){
  'use strict';
  var p = d.getElementById('parrafo');
  var miAlerta = function(){
    alert('Hiciste click');
  };
  p.addEventListener('click',miAlerta);
})(document); // Asociado al elemento p con id pa

/**
 * FUNCION PARA MOSTRAR LA FECHA QUE SE AUTOEJECUTA
 */
(function(d){
  'use strict';
  var date = d.getElementById('date');
  var giveDate = function(){
    var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var date = new Date();
    var day = date.getDate();
    var mon = months[date.getMonth()];
    var year = date.getFullYear();
    return alert('Hoy es: ' + day + ' ' + mon + ' ' + year);
  };
  date.addEventListener('click',giveDate);
})(document);

/**
 * FUNCION PARA MOSTRAR LA HORA QUE SE AUTOEJECUTA
 * 
 * las variables están afuera del event handler o manejador
 * del evento y por ello se debe recargar la página para
 * obetener la hora actualizada.
 */
// (function(d){
//   'use strict';
//   var hour = d.getElementById('hour');
//   var date = new Date();
//   var h = date.getHours();
//   var m = date.getMinutes();
//   var s = date.getSeconds();
//   hour.addEventListener('click',function(){
//     return alert('Hora: ' + h + ':' + m + ':' + s);
//   });
// })(document);

/**
 * FUNCION PARA MOSTRAR LA HORA QUE SE AUTOEJECUTA
 * 
 * las variables están dentro del event handler o manejador
 * del evento y por ello no se debe recargar la página para
 * obetener la hora actualizada.
 */
// (function(d){
//   'use strict';
//   var hour = d.getElementById('hour');
//   hour.addEventListener('click',function(){
//     var date = new Date();
//     var h = date.getHours();
//     var m = date.getMinutes();
//     var s = date.getSeconds();
//     return alert('Hora: ' + h + ':' + m + ':' + s);
//   });
// })(document); 

/**
 * FUNCION PARA MOSTRAR LA HORA QUE SE AUTOEJECUTA
 * 
 * Se crea la función giveHour() y se invoca desde el listener.
 * Las variables están dentro de dicha función y por ello no se
 * debe recargar la página para obtener la hora actualizada.
 */
(function(d){
  'use strict';
  var hour = d.getElementById('hour');
  var giveHour = function(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    return alert('Hora: ' + h + ':' + m + ':' + s);
  };
  hour.addEventListener('click',giveHour);
})(document); 
