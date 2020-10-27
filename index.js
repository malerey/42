

// METODOS DE ARRAYS 

// const primeraLetra = string.charAt(0)
// sintaxis de metodos
// nombreDeLaVariable.nombreDelMetodo(parametroOptativo)

const nombres = ["Appa", "Ana", "Elsa", "Olaf", "Sven", "Kicillof", "Hans"]
console.log(nombres)


// slice 
// NO modifica el array original
// retorna un nuevo array, desde la posicion indicada en el primer parametro, 
// hasta la posicion indicada en el segundo (NO INCLUIDA)
// Si no pongo el segundo parametro, sigue hasta el final
// const nuevoArray = nombres.slice(2, 5)
// console.log(nuevoArray)

// console.log(nombres)

// splice 
// mdifica el array original 
// primer parametro, a partir de que posicion quitamos o agregamos cosas
// segundo parametro, cuantos elementos eliminamos a partir de esa posicion (INCLUSIVE)
// si lo dejamos en 0, no se elimina nada
// tercer y siguientes parametros, elementos a agregar en esa posicion 
// nombres.splice(2, 0, "Mushu", "Caro", "El cangrejo de la sirenita", "El mapacha de Pocahontas")
// console.log(nombres)

// join 

// recibe un array y retorna un string 
// donde los elementos se unen entre si con lo que sea que pasemos como parametro
// const arrayUnido = nombres.join(" - ")
// console.log(arrayUnido)

// para hacer una lista en html a partir de un array
//const nombresDiv = document.getElementById("nombres")
// nombresDiv.innerHTML = '<ul class="rojo"><li>' + nombres.join("</li><li>") + '</li></ul>'


// includes 
// busca si el elemento pasado como parametro esta dentro del array
// no modifica el array original
// retorna true o false
// console.log(nombres.includes("Olaf"))

// sort 
// modifica el array original
// sirve para ordenar alfabeticamente
// nombres.sort()
// console.log(nombres)
// NO sirve para numeros, da malos resultados
// const numeros = [99, 9, 99999, 6, 5, 2, 32, 57, 2435, 876]
// numeros.sort()
// console.log(numeros)


// concat 
// no modifica los arrays originales
// retorna un nuevo array
// const numeros1 = [1, 2, 3, 4]
// const numeros2 = [5, 6, 7, 8]
// const arraysUnidos = numeros1.concat(numeros2)
// console.log(arraysUnidos)



// push 
// agregar un elemento al final del array
// nombres.push("Sven")
// console.log(nombres)

// // shift 
// // quitar el primer elemento del array
// nombres.shift()
// console.log(nombres)


// // unshift
// // agregar un elemento al principio del array
// nombres.unshift("Angie en frances")
// console.log(nombres)


// // pop
// // saca el ultimo elemento del array
// nombres.pop()
// console.log(nombres)



// EJERCITACION OBLIGATORIA 

// contiene(numero, numeros)
// Crear una funci´ón contiene que 
// tome como argumentos un número numero y un array de números numeros 
// y devuelva true o false dependiendo de si dicho numero se encuentra en el 
// array de numeros. Ejemplo:

// contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]) // true
// contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]) // false
// invertirCaso(string)


// Crear una función invertirCaso que tome como argumento un string
//  y devuelva un string donde cada letra tiene el caso invertido, es decir, 
// cada letra está mayúscula si estaba en minúscula, y viceversa.

// invertirCaso('Ada Lovelace') // 'aDA lOVELACE'
// invertirCaso('feliz cumple') // 'FELIZ CUMPLE'
// invertirCaso('jAvAsCrIpT') // 'JaVaScRiPt'
// gano(tragamonedas)


// Crear una función gano que tome como argumento un array tragamonedas con 5 
// símbolos y devuelva true si son iguales y false sino. Si el array tiene más de 5 
// símbolos, s´ólo debe comparar los 5 primeros.

// gano(['⭐️', '⭐️', '⭐️', '💫', '✨']) // false
// gano(['💫', '💫', '💫', '💫', '💫']) // true
// gano(['💫', '💫', '💫', '💫', '💫', '⭐️']) // true
// estanJuntos(personajes)

// Crear una función estanJuntos que tome como argumento un array de 
// strings personajes, y devuelva true si Sam se encuentra al lado de Frodo,
//  ya sea antes o después, o false sino. Ejemplo:

// estanJuntos(['Sam', 'Frodo', 'Legolas']) //true
// estanJuntos(['Aragorn', 'Frodo', 'Frodo']) //true
// estanJuntos(['Sam', 'Orco', 'Frodo']) //true
