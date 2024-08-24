// Función para realizar la suma
document.getElementById('btn-sumar').addEventListener('click', function() {
    // captura los valores de los campos de entrada y los convierte a números
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);
    
    // Calcula la suma
    const resultado = valor1 + valor2;
    
    // Muestra el resultado en el span con la clase 'resultado' que está en el html.
    document.querySelector('.resultado').textContent = resultado;
});

// Función para realizar la resta
document.getElementById('btn-restar').addEventListener('click', function() {
    // Obtiene los valores de los campos de entrada y los convierte a números
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);
    
    // calculo de la resta
    let resultado = valor1 - valor2;
    
    // la condición dice que si el resultado es negativo debe mostrar un 0.
    if (resultado < 0) {
        resultado = 0;
    }
    
    // Muestra el resultado en el span con la clase 'resultado' que está en el html
    document.querySelector('.resultado').textContent = resultado;
});