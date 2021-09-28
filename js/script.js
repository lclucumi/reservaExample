//cuando el documento esté listo, hace lo de la función
$(document).ready(function () {
  $("#datepicker_llegada").datepicker();
  $("#datepicker_salida").datepicker();
  //Capturo info del formulario
  //on calcula cualquier evento en js
  //submit es para enviar cosas
  $("#formulario").on("submit", function (event) {
    //Redirecciona
    event.preventDefault();

    //llegada y salida
    let llegada = $("#datepicker_llegada").val();
    let salida = $("#datepicker_salida").val();
    localStorage.setItem("llegada", llegada);
    localStorage.setItem("salida", salida);

    //Redirecciono
    window.location.replace("confirmacion.html");
  });
});

function clickLugar(lugar) {
  localStorage.setItem("lugar", lugar.value);
  //alert(lugar.value);
}

function clickCantidadPersonas(cantPersonas) {
  localStorage.setItem("cantPersonas", cantPersonas.value);
  //alert(cantPersonas.value);
}
