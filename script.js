document.addEventListener('DOMContentLoaded', () => {
    const blocoDeNotas = document.getElementById('blocoDeNotas');
    const btnSalvarNota = document.getElementById('btnSalvarNota');
    const btnLimparNotas = document.getElementById('btnLimparNotas');

    // 1. Carregar nota salva, se existir
    const notaSalva = localStorage.getItem('minhaNota');
    if (notaSalva) {
        blocoDeNotas.value = notaSalva;
    }

    // 2. Salvar a nota apenas quando o botão for clicado
    btnSalvarNota.addEventListener('click', () => {
        localStorage.setItem('minhaNota', blocoDeNotas.value);
        console.log("Nota salva manualmente no localStorage.");
    });

    // 3. Limpar a nota e remover do localStorage
    btnLimparNotas.addEventListener('click', () => {
        blocoDeNotas.value = '';
        localStorage.removeItem('minhaNota');
        console.log("Nota removida do localStorage.");
    });
});
