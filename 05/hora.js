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

(function(d) {
  'use strict';
  var hour = d.getElementById('hour');
  var forHour = d.getElementById('forHour');
  var giveHour = function() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    return 'Hora: ' + h + ':' + m + ':' + s;
  };
  hour.addEventListener('click',function() {
    forHour.innerHTML = giveHour();
  });
})(document);