function searchById() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    if (input.trim() === "") {

        return;
    }

    var resultDiv = document.getElementById('result');
var ids = ["UnDestino", "Valiente", "Prófugos", "Alas", "VivesEnMí", "SiempreJuntos", "AlzoMiBandera","TengoUnCorazón","Vuelo","Invisibles","Sobre ruedas","Chicas así","Qué más da","En ti","ARodarMiVida","i'dBeCrazy","LaVidaEsUnSueño"]; 

// IDs corrigidos
    var found = false;
    ids.forEach(function (id) {
        var div = document.getElementById(id);
        if (id.toLowerCase().indexOf(input) !== -1) { // Verifica se a entrada do usuário está contida no ID
            div.style.display = "block"; // Mostra a div do vídeo encontrado
            resultDiv.innerHTML = ""; // Limpa o resultado da pesquisa
            found = true;
        } else {
            div.style.display = "none"; // Esconde as outras divs de vídeo
        }
    });
    if (!found) {
        resultDiv.innerHTML = "Nenhum resultado encontrado para: " + input;
    }
}
