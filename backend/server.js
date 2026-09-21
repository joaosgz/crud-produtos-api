const express = require("express");
const cors = require("cors");

const {
    criarProduto,
    listarProdutos,
    buscarProduto,
    atualizarProduto,
    excluirProduto
} = require("./produtos");

const app = express();

app.use(cors());
app.use(express.json());


app.get("/produtos", (req, res) => {

    const produtos = listarProdutos();

    res.json(produtos);
});


app.get("/produtos/:id", (req, res) => {

    const produto = buscarProduto(req.params.id);

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    res.json(produto);
});


app.post("/produtos", (req, res) => {

    const {
        nome,
        categoria,
        preco,
        estoque
    } = req.body;

    if (!nome || !categoria || preco === undefined || estoque === undefined) {

        return res.status(400).json({
            mensagem: "Todos os campos são obrigatórios"
        });
    }

    const novoProduto = criarProduto(
        nome,
        categoria,
        preco,
        estoque
    );

    res.status(201).json(novoProduto);
});


app.put("/produtos/:id", (req, res) => {

    const {
        nome,
        categoria,
        preco,
        estoque
    } = req.body;

    const produtoAtualizado = atualizarProduto(
        req.params.id,
        nome,
        categoria,
        preco,
        estoque
    );

    if (!produtoAtualizado) {

        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    res.json(produtoAtualizado);
});


app.delete("/produtos/:id", (req, res) => {

    const produtoExcluido = excluirProduto(
        req.params.id
    );

    if (!produtoExcluido) {

        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    res.json({
        mensagem: "Produto excluído com sucesso",
        produto: produtoExcluido
    });
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});