document.addEventListener("DOMContentLoaded", function () {
  var calculator_screen = document.getElementById('calculator-screen');

  // Recorre todos los botones de la calculadora para asignarles el evento click
  Array.from(document.querySelectorAll('button')).forEach(el => {
    // Agregar una funcion y evento a click todos los botones
    el.addEventListener('click', function (event) {
      calculator_screen.style.color = '#000000';
      var l = calculator_screen.value.length;

      if (this.value == "A") {
        calculator_screen.value = calculator_screen.value = "";
        return;
      }

      if (this.value == "C") {
        calculator_screen.value = calculator_screen.value = calculator_screen.value.substring(0, l - 1);
        return;
      }

      if (this.value == "=") {
        try {
          // Evalua los datos ingresados y muestra el resultado en la pantalla de la calculadora
          calculator_screen.value = eval(calculator_screen.value);
        } catch (error) {
          calculator_screen.style.color = '#FF0000';
        }
        return;
      }
      // Actualiza la pantalla de la calculadora
      calculator_screen.value = calculator_screen.value + this.value;
    });
  });
});