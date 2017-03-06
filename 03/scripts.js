function sumar () {
  var suma = 0
  var i = 0
  for (i in arguments) {
    suma += arguments[i]
  }
  return console.log(suma)
}

sumar(1, 2, 3, 4, 5, 6, 7, 8, 9)
