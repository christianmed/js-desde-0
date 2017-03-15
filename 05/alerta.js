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