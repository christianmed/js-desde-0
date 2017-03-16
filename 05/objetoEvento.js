/**
 * EL OBJETO EVENTO
 * 
 * Es un objeto que contiene toda la información relativa a un evento especifico. Si queremos acceder a este objeto, basta con pasar un parámetro al event handler. Éste puede llamarse de cualquier manera pero se acostumbra llamarle "event" o "e".
*/

(function(d) {
  'use strict';
  var btn = d.getElementById('Btn');
  var forBtn = d.getElementById('forBtn');
  btn.addEventListener('mousemove', function (e) {
    forBtn.innerHTML += e;
  }); 
})(document);
