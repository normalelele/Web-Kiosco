function entrarPantallaCompleta() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
    }
}

window.addEventListener("load", entrarPantallaCompleta);
document.addEventListener("click", entrarPantallaCompleta);