(function(d) {
  'use strict';
  var keylogger = d.getElementById('keylogger');
  var keylog = '';
  keylogger.addEventListener('keyup', function prueba (e) {
    keylog += e.key;
    console.log(keylog);
  });
})(document);