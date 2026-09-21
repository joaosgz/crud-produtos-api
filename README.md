# CRUD de Produtos - API

Projeto desenvolvido para a disciplina de **Desenvolvimento de APIs** do curso de **Sistemas de Informação**.

## Sobre o projeto

O projeto consiste em uma aplicação CRUD (Create, Read, Update e Delete) para gerenciamento de produtos.

Os dados são armazenados temporariamente em um **Array no back-end**, sem utilização de banco de dados.

## Tecnologias utilizadas

* Node.js
* Express
* JavaScript
* HTML
* CSS
* Fetch API
* CORS

## Funcionalidades

* Cadastrar produtos
* Listar produtos
* Buscar produto por ID
* Atualizar produtos
* Excluir produtos

## Estrutura do projeto

```text
crud-produtos/
├── backend/
│   ├── produtos.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── .gitignore
└── README.md
```

## Rotas da API

| Método | Rota            | Descrição                     |
| ------ | --------------- | ----------------------------- |
| GET    | `/produtos`     | Lista todos os produtos       |
| GET    | `/produtos/:id` | Busca um produto pelo ID      |
| POST   | `/produtos`     | Cadastra um novo produto      |
| PUT    | `/produtos/:id` | Atualiza um produto existente |
| DELETE | `/produtos/:id` | Exclui um produto             |

## Como executar

### 1. Acesse a pasta do backend

```bash
cd backend
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor

```bash
node server.js
```

O servidor será executado em:

```text
http://localhost:3000
```

### 4. Execute o front-end

Abra o arquivo `frontend/index.html` no navegador.

Também é possível utilizar uma extensão como o **Live Server** no VS Code.

## Observação

Como os produtos são armazenados em um Array, os dados cadastrados são perdidos quando o servidor é encerrado ou reiniciado.


**João Paulo Gomes**