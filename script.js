document.getElementById('traducir').addEventListener('click', function () {
    const texto = document.getElementById('texto').value;
    const idiomaOrigen = 'es';
    const idiomaDestino = 'en';

    // Llama a la API de Google Translate
    fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${idiomaOrigen}&tl=${idiomaDestino}&dt=t&q=${texto}`)
        .then(response => response.json())
        .then(data => {
            const traduccion = data[0][0][0];
            document.getElementById('resultado').textContent = traduccion;
        })
        .catch(error => {
            console.error('Error al traducir:', error);
        });
});
