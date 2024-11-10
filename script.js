document.addEventListener('DOMContentLoaded', () => {
    const launcherButton = document.getElementById('launcher_button');

    // Cargar imágenes anticipadamente
    const normalImageUrl = 'https://github.com/JeamDeveloper/Lightning-Cube/blob/5aff47a73f83947efecd99b74e50855641235ed6/resources/images/buttons/GreenLauncherButton.png?raw=true';
    const pressedImageUrl = 'https://github.com/JeamDeveloper/Lightning-Cube/blob/5aff47a73f83947efecd99b74e50855641235ed6/resources/images/buttons/GreenPressesLauncherButton.png?raw=true';
    
    const normalImage = new Image();
    normalImage.src = normalImageUrl;
    const pressedImage = new Image();
    pressedImage.src = pressedImageUrl;

    // Cambiar imagen sin animación ni fade
    launcherButton.addEventListener('mouseenter', () => {
        launcherButton.style.backgroundImage = `url(${pressedImageUrl})`;
    });

    launcherButton.addEventListener('mouseleave', () => {
        launcherButton.style.backgroundImage = `url(${normalImageUrl})`;
    });

    // Detectar si el usuario viene de un enlace de Linkvertise
    let linkvertiseTimer;
    if (document.referrer.includes("linkvertise")) {
        linkvertiseTimer = setTimeout(() => {
            // Si estuvo 25 segundos en Linkvertise, descarga el archivo directamente
            downloadFile();
        }, 25000); // 25 segundos
    }

    // Función para iniciar la descarga
    function downloadFile() {
        // Archivo a descargar
        const fileUrl = 'https://github.com/JeamDeveloper/Lightning-Cube/raw/1e1601e5a777ace72d251f81ff61dc84400cb57d/resources/extra/Murder%20Mystery%20Assistant%20+.mcpack';

        // Crea un enlace de descarga dinámico
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'Murder Mystery Assistant +.mcpack'; // Nombre del archivo

        // Simula un click para iniciar la descarga
        link.click();
    }

    // Detectar cuando el usuario vuelve a la página desde Linkvertise
    window.addEventListener('focus', () => {
        if (linkvertiseTimer) {
            clearTimeout(linkvertiseTimer);
            // Iniciar descarga directamente después de 25 segundos si vino de Linkvertise
            downloadFile();
        }
    });
});