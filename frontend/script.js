const API_URL = "http://localhost:3000/produtos";

async function carregarProdutos() {

    try {

        const resposta = await fetch(API_URL);

        const produtos = await resposta.json();

        const lista = document.getElementById("listaProdutos");

        lista.innerHTML = "";


        if (produtos.length === 0) {

            lista.innerHTML = `
                <p>Nenhum produto cadastrado.</p>
            `;

            return;
        }


        produtos.forEach(produto => {

            lista.innerHTML += `

                <div class="produto">

                    <div class="informacoes">

                        <h3>
                            ${produto.nome}
                        </h3>

                        <p>
                            Categoria: ${produto.categoria}
                        </p>

                        <p>
                            Preço:
                            R$ ${Number(produto.preco)
                                .toFixed(2)}
                        </p>

                        <p>
                            Estoque: ${produto.estoque}
                        </p>

                    </div>


                    <div class="acoes">

                        <button
                            class="editar"
                            onclick="editarProduto(${produto.id})"
                        >
                            Editar
                        </button>

                        <button
                            class="excluir"
                            onclick="excluirProduto(${produto.id})"
                        >
                            Excluir
                        </button>

                    </div>

                </div>

            `;
        });

    } catch (erro) {

        console.error(erro);

        alert("Erro ao carregar os produtos.");
    }
}


document
    .getElementById("produtoForm")
    .addEventListener("submit", async function(event) {

        event.preventDefault();


        const id =
            document.getElementById("produtoId").value;

        const nome =
            document.getElementById("nome").value;

        const categoria =
            document.getElementById("categoria").value;

        const preco =
            document.getElementById("preco").value;

        const estoque =
            document.getElementById("estoque").value;


        const produto = {

            nome: nome,
            categoria: categoria,
            preco: Number(preco),
            estoque: Number(estoque)

        };


        try {

            let resposta;


            // UPDATE
            if (id) {

                resposta = await fetch(
                    `${API_URL}/${id}`,
                    {
                        method: "PUT",

                        headers: {
                            "Content-Type": "application/json"
                        },

                        body: JSON.stringify(produto)
                    }
                );

            }

            // CREATE
            else {

                resposta = await fetch(
                    API_URL,
                    {
                        method: "POST",

                        headers: {
                            "Content-Type": "application/json"
                        },

                        body: JSON.stringify(produto)
                    }
                );

            }


            if (!resposta.ok) {

                throw new Error(
                    "Erro ao salvar produto"
                );

            }


            limparFormulario();

            carregarProdutos();


            alert(
                id
                    ? "Produto atualizado com sucesso!"
                    : "Produto cadastrado com sucesso!"
            );


        } catch (erro) {

            console.error(erro);

            alert("Erro ao salvar produto.");

        }

    });


async function editarProduto(id) {

    try {

        const resposta =
            await fetch(`${API_URL}/${id}`);

        const produto =
            await resposta.json();


        document.getElementById("produtoId").value =
            produto.id;

        document.getElementById("nome").value =
            produto.nome;

        document.getElementById("categoria").value =
            produto.categoria;

        document.getElementById("preco").value =
            produto.preco;

        document.getElementById("estoque").value =
            produto.estoque;


        document.getElementById("tituloFormulario")
            .textContent = "Editar Produto";


    } catch (erro) {

        console.error(erro);

        alert("Erro ao buscar produto.");

    }

}


async function excluirProduto(id) {

    const confirmar =
        confirm("Deseja realmente excluir este produto?");


    if (!confirmar) {
        return;
    }


    try {

        const resposta =
            await fetch(`${API_URL}/${id}`, {

                method: "DELETE"

            });


        if (!resposta.ok) {

            throw new Error(
                "Erro ao excluir produto"
            );

        }


        carregarProdutos();


        alert(
            "Produto excluído com sucesso!"
        );


    } catch (erro) {

        console.error(erro);

        alert("Erro ao excluir produto.");

    }

}


function limparFormulario() {

    document
        .getElementById("produtoForm")
        .reset();


    document
        .getElementById("produtoId")
        .value = "";


    document
        .getElementById("tituloFormulario")
        .textContent = "Cadastrar Produto";

}

document
    .getElementById("btnCancelar")
    .addEventListener("click", limparFormulario);


carregarProdutos();