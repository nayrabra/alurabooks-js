//metodo sort para ordenar os livros da aplicação por preço
let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco);
    exibirLivrosNaTela(livrosOrdenados);
}

