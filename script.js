document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Troca Interativa de Abas
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // 2. Filtro de Busca Dinâmica em Tempo Real
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.card');

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase().trim();

        cards.forEach(card => {
            const textContent = card.innerText.toLowerCase();
            const keywords = card.getAttribute('data-keywords') || '';

            if (textContent.includes(query) || keywords.includes(query)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // 3. Controle da Janela Modal de Emergência
    const btnModal = document.getElementById('btnModal');
    const modalEmergencia = document.getElementById('modalEmergencia');
    const closeModal = document.getElementById('closeModal');

    btnModal.addEventListener('click', () => {
        modalEmergencia.classList.add('active');
    });

    closeModal.addEventListener('click', () => {
        modalEmergencia.classList.remove('active');
    });

    window.addEventListener('click', (event) => {
        if (event.target === modalEmergencia) {
            modalEmergencia.classList.remove('active');
        }
    });
});
