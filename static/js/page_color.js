// Cambiar estilos de botones según el tema activo
function updateButtonStyles() {
    const body = document.body;
    const langBtn = document.getElementById('lang-btn');
    const themeBtn = document.getElementById('theme-btn');

    if (body.classList.contains('dark-mode')) {
        langBtn.classList.remove('btn-secondary');
        langBtn.classList.add('btn-light'); // Cambiar a un color claro
        themeBtn.classList.remove('btn-dark');
        themeBtn.classList.add('btn-light'); // Cambiar a un color claro
    } else {
        langBtn.classList.remove('btn-light');
        langBtn.classList.add('btn-secondary'); // Cambiar a un color oscuro
        themeBtn.classList.remove('btn-light');
        themeBtn.classList.add('btn-dark'); // Cambiar a un color oscuro
    }
}

// Inicializa los estilos al cargar la página
updateButtonStyles();

// Lógica para el cambio de tema
document.getElementById('theme-btn').addEventListener('click', function() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    // Cambiar el icono del botón de tema
    if (body.classList.contains('dark-mode')) {
        this.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        this.innerHTML = '<i class="fas fa-moon"></i>';
    }

    // Actualiza los estilos de los botones
    updateButtonStyles();
});