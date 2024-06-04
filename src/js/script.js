

function searchById() {
    var input = removeSpecialChars(document.getElementById('searchInput').value.trim().toLowerCase());

    var resultDiv = document.getElementById('result');
    var videos = document.querySelectorAll('.videos-secao > div');
    var found = false;

    // Resetar a visibilidade dos vídeos antes de iniciar a nova pesquisa
    videos.forEach(function (video) {
        video.style.display = 'block';
    });

    resultDiv.innerHTML = ''; // Limpa o resultado da pesquisa

    if (input === "") {
        // Se a entrada estiver vazia, mostramos todos os vídeos e saímos da função
        videos.forEach(function (video) {
            video.style.display = 'block';
        });
        document.getElementById('voltarButton').style.display = 'none'; // Esconde o botão "Voltar"
        return;
    }

    videos.forEach(function (video) {
        var title = removeSpecialChars(video.querySelector('h2').textContent.trim().toLowerCase());

        if (title.includes(input)) { // Verifica se a entrada do usuário está contida no título
            video.style.display = 'block'; // Mostra a div do vídeo encontrado
            resultDiv.appendChild(video.cloneNode(true)); // Adiciona a div encontrada na área de resultados
            found = true;
        } else {
            video.style.display = 'none'; // Esconde as outras divs de vídeo
        }
    });

    if (found) {
        document.getElementById('voltarButton').style.display = 'block'; // Mostra o botão "Voltar"
    } else {
        resultDiv.innerHTML = "Nenhum resultado encontrado para: " + input;
        document.getElementById('voltarButton').style.display = 'none'; // Esconde o botão "Voltar" se nada for encontrado
    }
}

function removeSpecialChars(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s]/g, '');
}

