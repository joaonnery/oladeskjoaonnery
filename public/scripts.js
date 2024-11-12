function pesquisar() {
    alert("Função de pesquisa ainda não implementada.");
}

function showContent(category) {
    const contentDisplay = document.getElementById('content-display');
    contentDisplay.style.display = 'block';
    if (category === 'Tutoriais') {
        contentDisplay.innerHTML = "<h2>Tutoriais</h2><p>Informações sobre o navegador de desktop.</p>";
    } else if (category === 'Informacoes') {
        contentDisplay.innerHTML = "<h2>Informações</h2><p>Informações sobre proteção.</p>";
    } else if (category === 'Arquivos') {
        contentDisplay.innerHTML = "<h2>Arquivos</h2><p>Informações sobre recompensas.</p>";
    } else if (category === 'Downloads') {
        contentDisplay.innerHTML = "<h2>Downloads</h2><p>Informações sobre sincronização.</p>";
    }
}

