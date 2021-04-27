function language() {
    var idioma = document.getElementById('language').value
    if (idioma == 'ES') {
        window.location.href = '../index.html'
    } else {
        window.location.href = './EN/index.html'
    }
}