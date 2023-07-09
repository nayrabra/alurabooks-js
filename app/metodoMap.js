//metodo map executa uma função para cada elemento do array e devolve um novo array como resultado
//através do método map foi aplicado um desconto no preco de cada livro, que só será aplicado na sessão "livros disponíveis"
function aplicarDesconto(livros) {
    const desconto = 0.3;
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return livrosComDesconto;
}
