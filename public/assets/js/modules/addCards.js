function adicionarCard(titulo, imagemSrc, descricao, linkProjeto, linkCodigo) {
    const card = document.createElement('div');
    card.className = 'card-projetos fade-in';

    // [ELEMENTOS DO TITULO E IMG]
    const cardTitulo = document.createElement('div');
    cardTitulo.className = 'card-titulo';
    const h3 = document.createElement('h3');
    h3.textContent = titulo;
    const img = document.createElement('img');
    img.src = imagemSrc;
    img.alt = `Imagem do projeto ${titulo}`;
    img.className = 'card-imagem';

    cardTitulo.appendChild(h3);
    cardTitulo.appendChild(img);

    // [ELEMENTOS DA DESCRIÇÃO]
    const cardDescricao = document.createElement('div');
    cardDescricao.className = 'card-descricao';
    const p = document.createElement('p');
    p.textContent = descricao;
    cardDescricao.appendChild(p);

    // [DEFINE OS LINKS E OS BOTÕES PARA O PROJETO]
    const cardBotoes = document.createElement('div');
    cardBotoes.className = 'card-botoes';
    const linkProjetoElement = document.createElement('a');
    linkProjetoElement.href = linkProjeto;
    linkProjetoElement.className = 'botoes-card';
    linkProjetoElement.textContent = 'Ver projeto';

    const linkCodigoElement = document.createElement('a');
    linkCodigoElement.href = linkCodigo;
    linkCodigoElement.className = 'botoes-card';
    linkCodigoElement.textContent = 'Ver código';

    cardBotoes.appendChild(linkProjetoElement);
    cardBotoes.appendChild(linkCodigoElement);

    // [MONTA O CARD]
    card.appendChild(cardTitulo);
    card.appendChild(cardDescricao);
    card.appendChild(cardBotoes);

    // [ENCONTRA O CARD "Em Desenvolvimento"]
    const cardEmDesenvolvimento = document.getElementById('card-em-desenvolvimento');

    // [INSERE O NOVO CARD ANTES DO ÚLTIMO CARD]
    cardEmDesenvolvimento.parentNode.insertBefore(card, cardEmDesenvolvimento);
}

// Exemplo de uso
adicionarCard(
    'Projeto de Exemplo',
    './assets/images/geral/exemplo-projeto.png',
    'Um exemplo de descrição extensa, que pode contemplar uma quantidade considerável de texto no card!',
    '#',
    '#'
);
adicionarCard(
    'Projeto de Exemplo',
    './assets/images/geral/exemplo-projeto.png',
    'Um exemplo de descrição extensa, que pode contemplar uma quantidade considerável de texto no card!',
    '#',
    '#'
);