function verficarContrasea() {
  const contraseña = prompt("Ingrese su contraseña");
  contraseña.length >= 5
    ? alert("La contraseña se ha guardado")
    : alert("La contraseña debe tener almenos 5 caracteres. Prueva de nuevo");
}
verficarContrasea();
