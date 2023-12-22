const pintarCarrito = () => {
  //paso esto vacio al documento para que borre todo lo que hace la funcion luego de precionado el boron y asi evitar la acumulacion del las tres partes del contenedor que se estan creando
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  //se va a crear un modal, se compone de tres cosas un header, (Ca y en el otro extremo para cerrar el modal x), en el medio los cuerpo para los productos y por ultimo es el footer con el total a pagar
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
      <h1 class="modal-header-title">Carrito.</h1>
      `;
  modalContainer.append(modalHeader);
  const modalbutton = document.createElement("h1");
  modalbutton.innerText = "x";
  modalbutton.className = "modal-header-button";

  modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  modalHeader.append(modalbutton);

  carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio} $</p>
        <span class="restar"> - </span>
        <p>Cantidad: ${product.cantidad}</p>
        <span class="sumar"> + </span>
        <p>Total: ${product.cantidad * product.precio}</p>
        <span class="delete-product">❌</span>
        `;
    modalContainer.append(carritoContent);
    //primero debo capturar los botones + y - luego darle un escuchador de eventos y por ultimo que cuando hagan click sobre estos se realize la funcion esperada
    //el querySelector no es otra manera de capturar id o clases
    let restar = carritoContent.querySelector(".restar");
    restar.addEventListener("click", () => {
      if (product.cantidad !== 1) {
        product.cantidad--;
      }
      saveLocal();
      pintarCarrito();
    });
    let sumar = carritoContent.querySelector(".sumar");
    sumar.addEventListener("click", () => {
      product.cantidad++;
      saveLocal();
      pintarCarrito();
    });
    let eliminar = carritoContent.querySelector(".delete-product");

    eliminar.addEventListener("click", () => {
      eliminarProducto(product.id);
    });
    /* let eliminar = document.createElement("span");
  
      eliminar.innerText = "❌";
      eliminar.className = "delete-product";
      carritoContent.append(eliminar);
      eliminar.addEventListener("click", eliminarProducto); */
  });

  const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

  const totalBuying = document.createElement("div");
  totalBuying.className = "total-content";
  totalBuying.innerHTML = `total a pagar: ${total} $`;
  modalContainer.append(totalBuying);
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = (id) => {
  const foundId = carrito.find((element) => element.id === id);

  console.log(foundId);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
  });
  carritoCounter();
  saveLocal(); //me va a setear de nuevo el carrito luego de haber eliminado
  pintarCarrito();
};

const carritoCounter = () => {
  cantidadCarrito.style.display = "block";

  const carritoLength = carrito.length;

  localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

  cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};
carritoCounter();
