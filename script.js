document.addEventListener('DOMContentLoaded', function() {
    const btnAjuda = document.getElementById('btnAjuda');
    const painelAjuda = document.getElementById('painelAjuda');

    // Alterna a exibição do painel de contatos de emergência
    btnAjuda.addEventListener('click', function() {
        painelAjuda.classList.toggle('hidden');

        if (painelAjuda.classList.contains('hidden')) {
            btnAjuda.innerText = 'Ver Números Úteis';
        } else {
            btnAjuda.innerText = 'Ocultar Números Úteis';
        }
    });
});
