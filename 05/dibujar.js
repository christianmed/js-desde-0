(function(d) {
  'use strict';
  var dibujar = function (e) {
    var punto = d.createElement('div');
    punto.classList.add('punto');
    punto.style.left = (e.pageX -10) + 'px';
    punto.style.top = (e.pageY -10) + 'px';
    d.body.appendChild(punto);
  };
  addEventListener('mousedown', function () {
    addEventListener('mousemove', dibujar);
  });

  addEventListener('mouseup', function () {
    removeEventListener('mousemove', dibujar);
  });
})(document);