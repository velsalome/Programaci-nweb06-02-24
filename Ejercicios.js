//Realizado por Salomé Campiño Vélez. Encontrarás solución y códigos de prueba de los siguientes 11 problemas:

// 20. Generar contraseña
function password(str) {
    return str.toLowerCase().replace(/\s+/g, '').replace(/a/g, '4').replace(/e/g, '3').replace(/i/g, '1').replace(/o/g, '0');
}

// 21. Encontrar números pares en un arreglo
function pares(arr) {
    return arr.filter(num => num % 2 === 0);
}

// 22. Encontrar posiciones de números pares
function posiciones(arr) {
    return arr.reduce((acc, curr, index) => {
        if (curr % 2 === 0) acc.push(index);
        return acc;
    }, []);
}

// 23. Duplicar elementos de un arreglo
function duplicar(arr) {
    return arr.map(num => num * 2);
}

// 24. Encontrar palabras que empiecen por "a"
function empiezanConA(arr) {
    return arr.filter(str => str.toLowerCase().startsWith('a'));
}

// 25. Encontrar palabras que terminan en "s"
function terminanConS(arr) {
    return arr.filter(str => str.toLowerCase().endsWith('s'));
}

// 26. Imprimir una matriz
function imprimirMatriz(matriz) {
    matriz.forEach(fila => fila.forEach(elemento => console.log(elemento)));
}

// 27. Traducir números a palabras
function numerosAPalabras(arr) {
    const palabras = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    return arr.map(num => palabras[num] || '');
}

// 28. Traducir palabras a números
function palabrasANumeros(arr) {
    const numeros = {
        cero: 0, uno: 1, dos: 2, tres: 3, cuatro: 4,
        cinco: 5, seis: 6, siete: 7, ocho: 8, nueve: 9
    };
    return arr.map(palabra => numeros.hasOwnProperty(palabra) ? numeros[palabra] : -1);
}

// 29. Número de asteriscos en un arreglo
function numAsteriscos(arr) {
    return arr.filter(elemento => elemento === '*').length;
}

// 30. Número de asteriscos en una matriz
// Reutilizando la función numAsteriscos para una matriz
function numAsteriscosMatriz(matriz) {
    return matriz.flat().filter(elemento => elemento === '*').length;
}

// Código de prueba
console.log(password("hola")); // "h0l4"
console.log(password("esta es una prueba")); // "3st43sun4pru3b4"
console.log(password("")); // ""

console.log(pares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(pares([])); // []

console.log(posiciones([1, 2, 3, 4, 5, 6])); // [1, 3, 5]
console.log(posiciones([])); // []

console.log(duplicar([1, 2, 3])); // [2, 4, 6]
console.log(duplicar([])); // []

console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])); // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])); // []
console.log(empiezanConA([])); // []

console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])); // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])); // []
console.log(terminanConS([])); // []

console.log("Imprimir matriz:");
imprimirMatriz([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);

console.log(numerosAPalabras([0, 1, 2, 3, 4])); // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([5, 6, 7, 8, 9])); // ["cinco", "seis", "siete", "ocho", "nueve"]

console.log(palabrasANumeros(["cero", "uno", "dos", "tres", "what?", "cuatro"])); // [0, 1, 2, 3, -1, 4]
console.log(palabrasANumeros(["cinco", "seis", "siete", "ocho", "nueve"])); // [5, 6, 7, 8, 9]

console.log(numAsteriscos(['', '*', '', '*'])); // 2
console.log(numAsteriscos(['*', '*', '*'])); // 3
console.log(numAsteriscos([])); // 0

console.log(numAsteriscosMatriz([
  ['*', '', '*'],
  ['', '*', ''],
  ['*', '', '*']
])); // 5

//Fin