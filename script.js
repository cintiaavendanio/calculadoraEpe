function calcular(event) {
  event.preventDefault();

  const costoServicio = 102;
  let costoTotal = 0;
  let ivaTipoUsuario = document.querySelector(
    'input[name="TipoUsuario"]:checked'
  ).value;

  console.log({ ivaTipoUsuario });

  let ZonaDeDomicilio = document.getElementById("ZonaDeDomicilio").value;
  console.log("ZonaDeDomicilio");

  let cantidadKWh = document.getElementById("cantidadKWh").value;
  console.log("cantidadKWh");

  // validacion de cantidad de Kwh:
  if (cantidadKWh <= 0) {
    document.getElementById("resultado").innerHTML =
      "Debe ingresar una cantidad de kwh mayor a cero";
    return;
    //con return no continua la ejecucion.
  }

  costoTotal =
    parseFloat(costoServicio) +
    parseFloat(cantidadKWh) *
      parseFloat(ZonaDeDomicilio) *
      (1 + parseFloat(ivaTipoUsuario));

  document.getElementById("resultado").innerHTML = Number(
    costoTotal.toFixed(2)
  );
}
