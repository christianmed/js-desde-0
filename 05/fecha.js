/**
 * FUNCION PARA MOSTRAR LA FECHA QUE SE AUTOEJECUTA
 */
(function(d) {
  'use strict';
  var eDate = d.getElementById('date');
  var forDate = d.getElementById('forDate');
  var giveDate = function(){
    var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var nDate = new Date();
    var day = nDate.getDay();
    var mon = months[nDate.getMonth()];
    var year = nDate.getFullYear();
    return 'Hoy es: ' + day + ' de ' + mon + ' de ' + year;
  };
  // eDate.addEventListener('click',giveDate);
  eDate.addEventListener('click', function(){
    forDate.innerHTML = giveDate();
  });
})(document);