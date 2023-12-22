/* const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let NumeroIngresado = parseInt(prompt("Ingresa un numero"));

let busquedaNumero = numeros.find((numero) => numero === NumeroIngresado)
  ? console.log(NumeroIngresado, "se encontro")
  : console.log(NumeroIngresado, "no se encontro");

alert(typeof busquedaNumero); */

/* La expresión numeros.find((numero) => numero === NumeroIngresado) evaluará a undefined si el número no se encuentra en el array, ya que find devuelve undefined cuando no encuentra ningún elemento que cumpla con la condición.

Después de eso, el operador ternario realiza la operación de impresión con console.log, y la expresión completa, por lo tanto, evalúa a undefined. Por lo tanto, busquedaNumero será undefined.

En cuanto al alert(typeof(busquedaNumero)), mostrará "undefined" porque busquedaNumero es undefined. */

//Solucion mas apropiada

/* const numeros = [10, 5, 8, 3, 12, 7];
const numeroIngresado = parseInt(prompt('Ingrese un número:'));
const mensaje = numeros.find(numero => numero === numeroIngresado)
  ? `El número ${numeroIngresado} está en la lista.`
  : `El número ${numeroIngresado} no está en la lista.`;

alert(mensaje); */
//Con alt derecho y el boton } me salen las `comillas invertidas o "backticks" o "backquotes" `

