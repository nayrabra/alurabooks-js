//método reduce para descobrir o valor total de todos livros disponíveis
function calcularValorTotalDeLivrosDisponiveis(livros) {
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);
}
