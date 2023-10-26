/* Se declara una variable  */

/* let alumnos = [Mario, 2344, true, function () {}, {}];
 */

/* Todo tipo de datos dentro de un arreglo */

/* ¿Como accedo a esos datos ? */
let alumnos = ["Pablo", "Walter", "Fabrizio"];

alumnos[1];
console.log(alumnos[1]);
//Y si quiera saber la ultima posicion de un elemento ?
//Como se la cantidad de elemento de los los arreglos con la propiedad .length
console.log(alumnos.length);
//Supongo tengo un arreglo demasiado lago y quiero acceder al ultimo elemento como lo hago ?
console.log(alumnos[alumnos.length - 1]);
//Resto -1 ya que las posicioes comienzan en 0 y se me proporcionan la cantidad de elementos
//Primero doy con la cantidad de posiciones haciendo vector.length
/* Que pasaria si fuera una variable con un string dentro como valor al que se le aplica el .lenght? */
//Me devuelva la cantidad de caracteres a diferencia de la cantidad de elementos en un vector

//Agregar elementos al vector metodo:.push()
alumnos.push("Jose", "Florencia", "Jhonny");

//Recorrer un arreglo
for (let i = 0; i < alumnos.length; i++) {
  console.log(alumnos[i]);
}
//aroja por consola los nombre dentro del vector al recorrerlo y pasar por cada posicion
//Como obtener la posicion de un elemento con el metodo .indexOf?
console.log(alumnos.indexOf("Claudio"));
//.indexOf() recibe como parametro el elemento al que yo quiero obtener la posicion
//Que pasa si envio algo que no existe?
//Por defecto devuelve un -1

//Como eliminar 1 o varios arreglos .splice piede dos paremetros posicion del elemento a eliminar y desde esa posicion cuantos elementos quiero eliminar
alumnos.splice(3, 1);

//Buscar elemento
console.log(alumnos.includes("Jose"));
//Regresa un true lo que significa que jose si esta en el arreglo y si no esta me regresa un false
//ordenar por orden alfabetico
console.log(alumnos.sort());
//ordenar en reversar por orden alfabetico
console.log(alumnos.reverse());
//Concatenar arreglos .concat
let alumnos2 = ["Roberto", "Alberto", "Sofía"];

let comision = alumnos.concat(alumnos2);
