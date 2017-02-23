// var palabra = 'cadenadetexto'

// console.log('La palabra ' + palabra + ' tiene ' + palabra.length + ' caracteres.')

// console.log('Los 6 primeros caracteres de la palabra ' + palabra + ' son: ' + palabra.substring(0, 6))

var num = 125478965299
var i = 3
var j = 0

if (num < 3) {
  if (num === 2) {
    console.log('EL número ' + num + ' Es Primo.')
  } else {
    console.log('El número ' + num + ' No es Primo.')
  }
} else {
  for (i; i <= num / 2 && j === 0; i += 2) {
    console.log(num + ' / ' + i + ' = ' + num % i)
    if (num % i === 0) {
      console.log('El número ' + num + ' No es Primo')
      j++
    }
  }
  if (j === 0) {
    console.log('El número ' + num + ' Es Primo.')
  }
}
