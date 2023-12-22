const shopContent = document.getElementById("shopContent");
//hay que capturar como arriba lo que se haga en el carrito
const verCarrito = document.getElementById("verCarrito");
//y otra vez debo capturar mi id modal en una constante
const modalContainer = document.getElementById("modal-container");
//ahora se va a capturar el span
const cantidadCarrito = document.getElementById("cantidadCarrito");
//Ahora carrito no puede ser un array vacio para que se recupera los datos de Local Storage se debe hacer lo siguiente
/* let carrito = []; */
let carrito = JSON.parse(localStorage.getItem("carrito")) || []; //yo soy lo que sea que este guardado en Local Storage

//funcion asincrona
const getProductos = async () => {
  const response = await fetch("data.json");
  const data = await response.json();
  data.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
      <img src="${product.img}">
      <h3>${product.nombre}</h3>
      <p class="price">${product.precio} $</p>
      `;

    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);
    //para darle funcionalidad a los botones se tienen que tener en cuenta que es DETECTAR UN EVENTO de ESCUCHARLO y de ejectura una accion a partir de que se detecto el evento
    comprar.addEventListener("click", () => {
      const repeat = carrito.some(
        (repeatProduct) => repeatProduct.id === product.id
      );
      if (repeat) {
        carrito.map((prod) => {
          if (prod.id === product.id) {
            prod.cantidad++;
          }
        });
      } else {
        carrito.push({
          id: product.id,
          img: product.img,
          nombre: product.nombre,
          precio: product.precio,
          cantidad: product.cantidad,
        });
      }
      console.log(carrito);
      console.log(carrito.length);
      carritoCounter();
      saveLocal(); // con esto se realiza toda la logica y ahora gracias a esta funcion se va a guardar en el local Storage
    });
  });
};
getProductos();

/* Para trabajar con local storage se necesita entender dos cosas
set item es para setear algo al local storage, es decir guardo lo que quiero guardar en el local storage

get item  obtengo eso que guarde 
*/

//set item se necesita una clave y un valor en este caso el valor es un array, pero falta de agregar algo JSON.stringify porque solo se puede mandar string
const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

//get item ahora hay que recuperar lo que se guardo en local storage, pero hay que hacer la conversion de JSON a datos que se enviaron

/* JSON.parse(localStorage.getItem("carrito")); */
