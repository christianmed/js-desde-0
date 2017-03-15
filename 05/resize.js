(function(d) {
  'use strict';
  var forResize = d.getElementById('forResize');
  window.addEventListener('resize', function () {
    var h = window.innerHeight;  //alto de la ventana
    var w = window.innerWidth;  //ancho de la ventana
    // console.log(w);
    forResize.innerHTML += w + 'x' + h + ', ';
  });
})(document);