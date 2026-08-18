// Base de Dados dos Artigos Detalhados (Subpáginas Dinâmicas)
const detailDatabase = {
  'cyber-tipos': {
    title: 'Formas de Abuso no Ambiente Digital',
    content: `
      <p>O cyberbullying e a violência virtual se manifestam através de diversas condutas maliciosas no ambiente online:</p>
      
      <h3>1. Doxxing</h3>
      <p>Divulgação pública e maliciosa de dados pessoais privados (endereço, telefone, fotos de familiares, local de trabalho) para incentivar o assédio coletivo contra a vítima.</p>

      <h3>2. Cyberstalking</h3>
      <p>Perseguição sistemática em redes sociais, e-mails e aplicativos de mensagem. O agressor insiste em contatos indesejados mesmo após bloqueios.</p>

      <h3>3. Linchamento Virtual</h3>
      <p>Ataques em massa organizados para difamar, humilhar e destruir a reputação de uma pessoa publicamente em posts ou comentários.</p>

      <h3>4. Divulgação Não Consentida de Conteúdo Íntimo</h3>
      <p>Compartilhamento ou ameaça de vazamento de fotos/vídeos íntimos sem autorização, prática criminosa tipificada pelo Código Penal.</p>
    `
  },
  'cyber-provas': {
    title: 'Guia de Preservação e Registro de Provas Digitais',
    content: `
      <p>Para garantir a validade jurídica de denúncias de crimes virtuais, siga os passos recomendados:</p>

      <h3>Passos Fundamentais:</h3>
      <ul>
        <li><strong>Preserve o Histórico Original:</strong> Não apague as conversas, comentários ou e-mails recebidos.</li>
        <li><strong>Capture Prints Completos:</strong> As capturas de tela devem mostrar o link completo (URL), a data, a hora do dispositivo e a identificação do perfil do agressor.</li>
        <li><strong>Copie os Links (URLs):</strong> Salve os endereços exatos das páginas ou perfis envolvidos.</li>
        <li><strong>Ata Notarial:</strong> Solicite em um Cartório de Notas o registro formal do conteúdo online. O tabelião certifica a existência das mensagens com fé pública.</li>
      </ul>
    `
  },
  'violencia-tipos': {
    title: 'Tipos de Violência Doméstica e Familiar',
    content: `
      <p>A Lei Maria da Penha (Lei nº 11.340/2006) define cinco formas principais de violência contra a mulher:</p>

      <h3>1. Violência Física</h3>
      <p>Conduta que ofenda a integridade ou saúde corporal da mulher, como tapas, empurrões, socos ou arranhões.</p>

      <h3>2. Violência Psicológica</h3>
      <p>Qualquer ação que cause dano emocional, diminuição da autoestima, manipulação, humilhação, isolamento social ou controle sobre suas decisões.</p>

      <h3>3. Violência Sexual</h3>
      <p>Ato que constranja a testemunhar, manter ou participar de relação sexual não desejada mediante intimidação, força ou ameaça.</p>

      <h3>4. Violência Patrimonial</h3>
      <p>Retenção, subtração, destruição parcial ou total de bens, instrumentos de trabalho, objetos pessoais ou recursos financeiros.</p>

      <h3>5. Violência Moral</h3>
      <p>Calúnia, difamação ou injúria que atinja a honra, dignidade e reputação da mulher.</p>
    `
  },
  'violencia-ciclo': {
    title: 'O Ciclo da Violência nas Relações Abusivas',
    content: `
      <p>Muitos relacionamentos abusivos seguem um padrão cíclico e progressivo dividido em três fases:</p>

      <h3>Fase 1: Construção da Tensão</h3>
      <p>Surgem crises de ciúme, irritabilidade sem motivo, ofensas verbais e destruição de objetos. A vítima tenta acalmar o parceiro a todo custo.</p>

      <h3>Fase 2: Explosão / Agressão</h3>
      <p>Ocorre o ato violento direto (físico, verbal, moral ou sexual). É o momento de maior vulnerabilidade e perigo imediato.</p>

      <h3>Fase 3: Lua de Mel (Reconciliação)</h3>
      <p>O agressor pede desculpas, demonstra arrependimento, faz promessas e apresenta atitudes carinhosas. Sem intervenção e apoio externo, a tensão volta a crescer e o ciclo se repete com maior gravidade.</p>
    `
  },
  'cyber-saude': {
    title: 'Saúde Mental e Fortalecimento Emocional',
    content: `
      <p>A exposição a abusos digitais e psicológicos causa desgastes significativos. Proteger a mente é prioridade:</p>

      <ul>
        <li><strong>Desconecte-se temporariamente:</strong> Afaste-se das redes sociais afetadas para recuperar o equilíbrio.</li>
        <li><strong>Fortaleça sua rede de apoio:</strong> Converse com amigos, familiares e profissionais de saúde emocional de confiança.</li>
        <li><strong>Atendimento Especializado:</strong> Ligue 188 (CVV - Centro de Valorização da Vida) para suporte emocional gratuito 24h.</li>
      </ul>
    `
  },
  'medidas-protetivas': {
    title: 'Como Funcionam as Medidas Protetivas de Urgência',
    content: `
      <p>As Medidas Protetivas são decisões judiciais rápidas emitidas para proteger a integridade da mulher:</p>

      <ul>
        <li>Afastamento imediato do agressor do lar.</li>
        <li>Proibição de aproximação física e de qualquer contato por mensagens digitais ou ligações.</li>
        <li>Encaminhamento da mulher e dependentes para abrigo seguro, se necessário.</li>
      </ul>
      <p>Podem ser solicitadas em qualquer Delegacia de Polícia ou Defensoria Pública.</p>
    `
  }
};

// Frases de Apoio
const reflectionQuotes = [
  '"A informação clara e o acolhimento seguro transformam vidas."',
  '"Você não está sozinha. Buscar ajuda é um ato de coragem e proteção."',
  '"O respeito e a dignidade devem estar presentes em todos os ambientes."',
  '"Cuidar da sua paz emocional e segurança é o seu maior direito."',
  '"Nenhuma forma de intimidação ou controle deve ser aceita em silêncio."'
];

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initEmergencyExit();
  initQuoteGenerator();
});

function initNavigation() {
  const navButtons = document.querySelectorAll('.nav-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');
      closeDetail();

      navButtons.forEach(btn => btn.classList.remove('active'));
      tabPanels.forEach(panel => panel.classList.remove('active'));

      button.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
    });
  });
}

function openDetail(articleId) {
  const mainView = document.getElementById('main-view');
  const detailView = document.getElementById('detail-view');
  const container = document.getElementById('detail-content-container');

  const article = detailDatabase[articleId];

  if (article) {
    container.innerHTML = `
      <h2>${article.title}</h2>
      ${article.content}
    `;

    mainView.classList.add('hidden');
    detailView.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function closeDetail() {
  const mainView = document.getElementById('main-view');
  const detailView = document.getElementById('detail-view');

  detailView.classList.add('hidden');
  mainView.classList.remove('hidden');
}

function initEmergencyExit() {
  const exitBtn = document.getElementById('quick-exit-btn');
  if (exitBtn) {
    exitBtn.addEventListener('click', () => {
      window.location.replace('https://www.google.com.br');
    });
  }
}

function initQuoteGenerator() {
  const quoteBtn = document.getElementById('new-quote-btn');
  const quoteText = document.getElementById('reflection-quote');

  if (quoteBtn && quoteText) {
    quoteBtn.addEventListener('click', () => {
      const randomIndex = Math.floor(Math.random() * reflectionQuotes.length);
      quoteText.textContent = reflectionQuotes[randomIndex];
    });
  }
}
