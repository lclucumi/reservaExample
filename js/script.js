//cuando el documento esté listo, hace lo de la función
$(document).ready(function () {
  $("#datepicker_llegada").datepicker();
  $("#datepicker_salida").datepicker();
});

let nombre = "jhon";

function clickLugar(lugar) {
  alert(lugar.value);
}

function clickCantidadPersonas(cantPersonas) {
  alert(cantPersonas.value);
}
