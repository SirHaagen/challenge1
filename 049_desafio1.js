
//----------------------------------------------------------------------------------------
//! 1 - ELIMINAR DE UN ARREGLO LOS ELEMENTOS DUPLICADOS
//----------------------------------------------------------------------------------------

let arreglo= [1,5,8,2,5,4,2,1,10,1,7,9,3,10,5,2,7];

let metodoSet= new Set(arreglo);
/*
el método Set funciona como constructor, por eso necesita del operador new para crear
una nueva instancia de Set. Con Set se crea una colección con elementos únicos entre llaves.

con el set como conjunto de valores se pueden emplear los siguientes métodos:

new Set() -------->	Creates a new Set
add()	------------> Adds a new element to the Set
delete()	--------> Removes an element from a Set
has()	------------> Returns true if a value exists
clear()	----------> Removes all elements from a Set 
size	------------> Returns the number elements in a Set
También se puede utilizar forEach()
ejm:
let mySet1 = new Set()
mySet1.add(1)             // Set [ 1 ]
mySet1.add(5)             // Set [ 1, 5 ]
*/
console.log(metodoSet.has(11))

console.log(metodoSet);

//Para convertir en arreglo, aplico el spread operator (convertir a conjunto de valores)
//y entre llaves [] para pasar estos a arreglo

let arregloNuevo= [...new Set(arreglo)];

//R/
console.log(arregloNuevo);


//----------------------------------------------------------------------------------------
//! 2 - AHORA ORGANIZAR LOS ELEMENTOS DEL ARREGLO DE MENOR A MAYOR
//----------------------------------------------------------------------------------------

arregloNuevo.sort((a,b)=>a-b);
/* El método sort() ordena los elementos de un arreglo (array) localmente y devuelve 
el arreglo ordenado. Se utiliza la función flecha con a y b (función de comparación) 
para comparar los elementos y colocar de primero el menor y luego el mayor. */

//R/
console.log(arregloNuevo);

console.log(arregloNuevo.reverse());


/* Si el resultado es negativo, a se ordena antes que b.
Si el resultado es positivo, b se ordena antes de a.
Si el resultado es 0, nada cambia. */


//----------------------------------------------------------------------------------------
//! 3 - AHORA QUIERO QUE ME MUESTRE EL ARREGLO LOS ELEMENTOS ORGANIZADOS AL AZAR
//----------------------------------------------------------------------------------------

/* Si se necesita un arerglo donde sus elementos cambien de posición al azar, entonces
modifico la función de comparación: */

arregloNuevo.sort(()=>Math.round(Math.random())*10-10);

//R/
console.log(arregloNuevo);


//----------------------------------------------------------------------------------------
//! 4 - AHORA QUIERO QUE ME MUESTRE SOLAMENTE LOS 2 PRIMEROS ELEMENTOS DEL ARERGLO
//----------------------------------------------------------------------------------------

arregloNuevo.length=2; 

//R/
console.log(arregloNuevo);