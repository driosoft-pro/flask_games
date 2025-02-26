// Lógica de la barra de navegación para alternar entre las calculadoras
// Agrega un evento de clic al enlace de la calculadora básica
document.getElementById('basic-calculator-link').addEventListener('click', function () {
    // Muestra la sección de la calculadora básica
    document.getElementById('basic-calculator').style.display = 'block';
    // Oculta la sección del generador de tablas de verdad
    document.getElementById('truth-table-generator').style.display = 'none';
});

// Agrega un evento de clic al enlace del generador de tablas de verdad
document.getElementById('truth-table-link').addEventListener('click', function () {
    // Oculta la sección de la calculadora básica
    document.getElementById('basic-calculator').style.display = 'none';
    // Muestra la sección del generador de tablas de verdad
    document.getElementById('truth-table-generator').style.display = 'block';
});
