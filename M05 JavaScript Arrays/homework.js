/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
  return array.pop();
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:

   for (var i = 0; i < array.length; i++){
      array[i]++;
   } return array;

   // O tambien asi:  sumaUno = array.map((num)=> {
   //    return num + 1;
   // })
   // return sumaUno;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   // var unirString = palabras.join(' ');
   // return unirString;
   // ooooo esto pasa porque son palabras y deben tener un espacio en medio, no como el ejemplo del string mal escrito
   return palabras.join(' ');
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   // if (array.includes(elemento)){
   //    return true;
   // } else return false;

   // o tambien podria ser
   for (let i = 0; i < array.length; i++){
      if (array[i] === elemento){
         return true;
      }
   } return false;

}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   // arrayOfNums = [];
   var suma = 0;
   for (let i = 0; i < arrayOfNums.length; i++){
      suma = suma + arrayOfNums[i];
   } return suma;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:.
   // resultadosTest = []
   var suma = 0;
   var promedio = 0;

   for (let i = 0; i < resultadosTest.length; i++){
      suma = suma + resultadosTest[i];
      promedio = suma / resultadosTest.length;
   } return promedio;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   // arrayOfNums =     [20, 13, 30, 16];
   var max = arrayOfNums[0];

   for (let i = 1; i < arrayOfNums.length; i++){
      if (max < arrayOfNums[i]){
         max = arrayOfNums[i]; 
      }
   } return max;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length < 1) {
      return 0;
   }
   var total = 1;

   for (let i = 0; i < arguments.length; i++) {
      total = total * arguments[i];
   }
   return total;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
  var contar = 0;

  for (let i = 0; i < array.length; i++){
   if (array[i] > 18){
      contar++;
   }
  } return contar;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 1 || numeroDeDia === 7) {
      return "Es fin de semana";
   } else return "Es dia laboral";
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var numero = num.toString();
   if (numero.charAt(0) === "9"){
      return true;
   } 
   else return false;
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var numero = array[0];
   for (let i = 1; i < array.length; i++){
      if (array[i] !== numero){
         return false;
      }
   } return true;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
var newArr = [];
for (let i = 0; i < array.length; i++){
   if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
      newArr.push(array[i]);
   }
}
if (newArr.length < 3){
   return "No se encontraron los meses pedidos";
}
return newArr;
 
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tablaArr = [];
   var multip = 6;
   for(let i = 0; i < 11; i++){
      multip = [i] * 6;
      tablaArr.push(multip);
   } return tablaArr;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var Arr = [];
   for (let i = 0; i < array.length; i++){
      if (array[i] > 100){
         Arr.push(array[i]);
      }
   } return Arr;

}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   // (-2) 0 2 4 6  
   //i= 0  1 2 3 4
var newArray = [];
var suma = num;
for (var i = 0; i < 10; i++){
   suma = suma + 2;
   if (suma === i) break;
   else {
      newArray.push(suma);
   }
} 
if (i < 10){
   return "Se interrumpió la ejecución";
}
return newArray;
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var newArr = [];
   var suma = num;
   for (var i = 0; i < 10; i++){
      if (i === 5) continue;
      else {
         suma = suma + 2;
         newArr.push(suma);
      }
   }
   return newArr;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
