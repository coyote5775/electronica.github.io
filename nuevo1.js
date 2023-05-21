function calcularResistencia() {
  var valor1 = parseFloat(document.getElementById('valor1').value);
  var valor2 = parseFloat(document.getElementById('valor2').value);
  var tipo = document.getElementById('tipo').value;

  var resistencia;

  if (tipo === "serie") {
    resistencia = valor1 + valor2;
  } else if (tipo === "paralelo") {
    resistencia = (valor1 * valor2) / (valor1 + valor2);
  }

  var resultadoElemento = document.getElementById('resultado');
  resultadoElemento.textContent = "La resistencia resultante es: " + resistencia;
}
