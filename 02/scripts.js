var stringUno = 'Hola mundo'

console.log('La cadena ' + stringUno + ' tiene ' + stringUno.length + ' caracteres.')

if (stringUno.indexOf('a') !== -1) {
  console.log('La letra \'a\' aparece en la cadena de texto ' + stringUno + ' y su índice es', stringUno.indexOf('a'))
} else {
  console.log('La letra \'a\' no aparece en la cadena de texto ' + stringUno)
}

console.log('Cadena en mayúsculas: ' + stringUno.toUpperCase())
console.log('Cadena en minúsculas: ' + stringUno.toLowerCase())

var stringDos = stringUno.replace('mundo', 'amigos')
console.log('Segunda cadena usando el método replace: ' + stringDos)

var stringTres = stringUno.substring(5, 10)
console.log('Tercera cadena usando el método substring con dos parámetros: ' + stringTres)

var stringCuatro = stringUno.slice(-3)
console.log('Cuarta cadena usando el método slice con un parámetro: ' + stringCuatro)

var stringCinco = stringUno.slice(2, -3)
console.log('Quinta cadena usando el método slice con dos parámetros: ' + stringCinco)

var stringSeis = 'La vida es muy bella'
console.log('Cadena de texto a array usando el método split: ' + stringSeis.split(' '))

var arrayUno = [1, 2, 3, 'hola', 'mundo', false]
console.log('Mi primer array: ' + arrayUno)
console.log('Longitud o cantidad de elementos del primer array: ' + arrayUno.length)
console.log('Elemento 4 del primer array: ' + arrayUno[3])
arrayUno[6] = 'nuevo'
console.log('Se agrega el 7mo elemento primer array con: arrayUno[6] = \'nuevo\'')
console.log('Se muestra el nuevo elemento: ' + arrayUno[6])

var arrayToString = arrayUno.join('')
console.log('Array convertido en string: ' + arrayToString)

var arrayToString = arrayUno.join(',')
console.log('Array convertido en string separado por comas: ' + arrayToString)
