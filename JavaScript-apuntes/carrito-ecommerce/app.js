const productos = [
  { nombre: "libro1", precio: 50 },
  { nombre: "libro2", precio: 100 },
  { nombre: "libro3", precio: 150 },
  { nombre: "libro4", precio: 200 },
  { nombre: "libro5", precio: 250 },
];

let carrito = [];

let seleccion = prompt("hola desea comprar algun producto si o no");
/* utiliza algo similar a las "Guard Clause"  donde se invertian las condiciones afirmativas y devuelva o salga rapidamente de una funcion si la condicion no se cumple*/
while (seleccion != "si" && seleccion != "no") {
  alert("por favor ingresa si o no");
  seleccion = prompt("hola desea comprar algo si o no");
}

if (seleccion == "si") {
  alert("a continuacion nuestra lista de prductos");
  /* Podria mostrar con un console.log(productos) todos los producotes desde la consola del navegador pero si lo quiero pasar por el document me exige si o si recorrer el array que yo tengo, por ejemplo con .forEach o .map b*/
  let todolosProductos = productos.map(
    (producto) => producto.nombre + " " + producto.precio + "$"
  );
  /* Arriba estoy recorriendo la lista de productos y accediendo a su nombre y precio mientras se guardan en la variable todos los productos */
  alert(todolosProductos.join(" - "));
  /* Con el metodo .join voy a recorrer todos los elementos que en este caso serian objetos pero los va a separar con - para que quede mas prolijo */
} else if (seleccion == "no") {
  alert("Gracias por venir hasta pronto");
}

