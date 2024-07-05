function adicionarCard(titulo, imagemSrc, descricao, linkProjeto, linkCodigo) {
    const card = document.createElement('div');
    card.className = 'card-projetos';

    // Define elementos da div de título
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

    const cardDescricao = document.createElement('div');
    cardDescricao.className = 'card-descricao';

    // Define elementos da div de descrição
    const p = document.createElement('p');
    p.textContent = descricao;
    cardDescricao.appendChild(p);
    const cardBotoes = document.createElement('div');

    cardBotoes.className = 'card-botoes';
    const linkProjetoElement = document.createElement('a');

    // Define elementos do link para o projeto
    linkProjetoElement.href = linkProjeto;
    linkProjetoElement.className = 'botoes-card';
    linkProjetoElement.textContent = 'Ver projeto';

    const linkCodigoElement = document.createElement('a');
    linkCodigoElement.href = linkCodigo;
    linkCodigoElement.className = 'botoes-card';
    linkCodigoElement.textContent = 'Ver código';

    cardBotoes.appendChild(linkProjetoElement);
    cardBotoes.appendChild(linkCodigoElement);

    // Monta o card completo
    card.appendChild(cardTitulo);
    card.appendChild(cardDescricao);
    card.appendChild(cardBotoes);

    // Encontra o card "Em Desenvolvimento"
    const cardEmDesenvolvimento = document.getElementById('card-em-desenvolvimento');

    // Insere o novo card antes do card "Em Desenvolvimento"
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