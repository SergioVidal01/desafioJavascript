// Función para cambiar el color de la caja grande
function changeColor(color) {
    document.getElementById('caja').style.backgroundColor = color;
}

// Asignación de eventos de clic a cada botón usando sus IDs
document.getElementById('btn-1').addEventListener('click', function() {
    changeColor(this.style.backgroundColor);
});

document.getElementById('btn-2').addEventListener('click', function() {
    changeColor(this.style.backgroundColor);
});

document.getElementById('btn-3').addEventListener('click', function() {
    changeColor(this.style.backgroundColor);
});

document.getElementById('btn-4').addEventListener('click', function() {
    changeColor(this.style.backgroundColor);
});

document.getElementById('btn-5').addEventListener('click', function() {
    changeColor(this.style.backgroundColor);
});

document.getElementById('btn-6').addEventListener('click', function() {
    changeColor(this.style.backgroundColor);
});