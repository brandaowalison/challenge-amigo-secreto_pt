let amigos = [];

const adicionarAmigo = () => {
    const input = document.querySelector('#amigo');
    const nome = input.value.trim();

    if (!nome) {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nome);
    input.value = '';
    atualizarLista();
};

const atualizarLista = () => {
    const lista = document.querySelector('#listaAmigos');
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
};

const sortearAmigo = () => {
    const resultado = document.querySelector('#resultado');

    if (amigos.length === 0) {
        resultado.innerHTML = '<li>Adicione pelo menos um amigo para realizar o sorteio</li>';
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = `<li>🎉 O amigo secreto é: <strong>${amigoSorteado}</strong>!</li>`;
    amigos = []; // limpa lista de amigos
    document.querySelector('#listaAmigos').innerHTML = '';
};
