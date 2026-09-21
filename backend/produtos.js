let produtos = [
    {
        id: 1,
        nome: "Teclado Mecânico",
        categoria: "Informática",
        preco: 150.00,
        estoque: 10
    },
    {
        id: 2,
        nome: "Mouse Gamer",
        categoria: "Informática",
        preco: 80.00,
        estoque: 20
    },
    {
        id: 3,
        nome: "Monitor 24 Polegadas",
        categoria: "Informática",
        preco: 750.00,
        estoque: 5
    }
];


function criarProduto(nome, categoria, preco, estoque) {

    const novoProduto = {
        id: produtos.length > 0
            ? produtos[produtos.length - 1].id + 1
            : 1,

        nome: nome,
        categoria: categoria,
        preco: Number(preco),
        estoque: Number(estoque)
    };

    produtos.push(novoProduto);

    return novoProduto;
}


function listarProdutos() {
    return produtos;
}


function buscarProduto(id) {

    return produtos.find(produto => produto.id === Number(id));
}


function atualizarProduto(id, nome, categoria, preco, estoque) {

    const produto = produtos.find(
        produto => produto.id === Number(id)
    );

    if (!produto) {
        return null;
    }

    produto.nome = nome;
    produto.categoria = categoria;
    produto.preco = Number(preco);
    produto.estoque = Number(estoque);

    return produto;
}


function excluirProduto(id) {

    const indice = produtos.findIndex(
        produto => produto.id === Number(id)
    );

    if (indice === -1) {
        return null;
    }

    const produtoExcluido = produtos.splice(indice, 1);

    return produtoExcluido[0];
}


module.exports = {
    criarProduto,
    listarProdutos,
    buscarProduto,
    atualizarProduto,
    excluirProduto
};