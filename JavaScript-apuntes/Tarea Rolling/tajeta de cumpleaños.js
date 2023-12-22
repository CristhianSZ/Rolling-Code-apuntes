const tarjeta = document.getElementById("tarjeta");
AgregarParrafo = () => {
  const nuevoParrafo = document.createElement("p");
  tarjeta.appendChild(nuevoParrafo);
};

AgregarTexto = () => {
  const parrafos = tarjeta.getElementsByTagName("p");
  const texto = prompt("Ingresa el texto para el párrafo:");
  if (texto) {
    const nuevoTexto = document.createTextNode(texto);
    /* parrafos[0].appendChild(nuevoTexto); */
    parrafos[parrafos.length - 1].appendChild(nuevoTexto);
  }
};

AgregarSaltoLinea = () => {
  const saltoLinea = document.createElement("br");
  tarjeta.appendChild(saltoLinea);
};

TerminarTarjeta = () => {
  alert("Tarjeta de cumpleaños finalizada");
};
