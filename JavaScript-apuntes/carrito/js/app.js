const productos = [
  { nombre: "libro1", precio: 50 },
  { nombre: "libro2", precio: 100 },
  { nombre: "libro3", precio: 150 },
  { nombre: "libro4", precio: 200 },
  { nombre: "libro5", precio: 250 },
];

let carrito = [];

let seleccion = prompt("Hola desea comprar algun producto si o no");

while (seleccion != "si" && seleccion != "no") {
  alert("pro favor ingresa si o no");
  seleccion = prompt("hola desea comprar algo si o no");
}
if (seleccion == "si") {
  alert("a continuacion nuestra lista de productos");
  let todolosProductos = productos.map(
    (producto) => producto.nombre + " " + producto.precio + "$"
  );
  alert(todolosProductos.join(" - "));
} else if (seleccion == "no") {
  alert("gracias por venir hasta pronto");
}
while (seleccion != "no") {
  let producto = prompt("agregar un producto a tu carrito");
  let precio = 0;

  if (
    producto == "libro1" ||
    producto == "libro2" ||
    producto == "libro3" ||
    producto == "libro4" ||
    producto == "libro5"
  ) {
    switch (producto) {
      case "libro1":
        precio = 50;
        break;
      case "libro2":
        precio = 100;
        break;
      case "libro3":
        precio = 150;
        break;
      case "libro4":
        precio = 200;
        break;
      case "libro5":
        precio = 250;
        break;
      default:
        break;
    }
    let unidades = parseInt(prompt("Cuantas unidades quiere llevar"));
    carrito.push({ producto, unidades, precio });
    console.log(carrito);
  } else {
    alert("no tenemos ese producto");
  }

  seleccion = prompt("desa seguir comprandro?");
  while (seleccion === "no") {
    alert("gracias por la compra! hasta pronto");
    carrito.forEach((carritoFinal) => {
      console.log(
        `producto: ${carritoFinal.producto}, unidades: ${
          carritoFinal.unidades
        }, total a pagar por producto ${
          carritoFinal.unidades * carritoFinal.precio
        }`
      );
    });
    break;
  }
}
/*  el representa cada uno de los elementos de mi arreglo 
    ecc es el acumulador
    el ultimo parametro es 0 significa que algo se inicializa en 0 */
const total = carrito.reduce((ecc, el) => acc + el.precio * el.unidades, 0);
console.log(`el total a pargar por su compre es: ${total}`);
