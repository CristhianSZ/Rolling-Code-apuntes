var xhr = new XMLHttpRequest();

xhr.open("POST", "/api/insertCar", true);

xhr.setRequestHeader("Content-Type", "application/json");

var data = {
  make: document.getElementById("make").value,
  model: document.getElementById("model").value,
  year: document.getElementById("year").value
};

xhr.send(JSON.stringify(data));

xhr.onload = function() {
  if (xhr.status === 200) {
    alert("El automóvil se insertó correctamente.");
  } else {
    alert("Ocurrió un error al insertar el automóvil.");
  }
};
