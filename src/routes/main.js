// Arquivo: src/routes/main.js
const express = require('express');
const router = express.Router();

// 1. Movemos a lista para FORA das rotas.
// Assim, ela fica na memória enquanto o servidor estiver ligado.
// (Num sistema real, aqui entraria o Banco de Dados)
let produtos = [
    { nome: 'Teclado Mecânico', preco: 150 },
    { nome: 'Mouse Gamer', preco: 80 }
];

// Rota 1: Página Inicial (Lista)
router.get('/', (req, res) => {
    res.render('index', { produtos: produtos });
});

// Rota 2: Exibir o Formulário (GET)
router.get('/criar', (req, res) => {
    res.render('criar');
});

// Rota 3: Receber os dados do Formulário (POST)
router.post('/adicionar', (req, res) => {
    // req.body é onde estão os dados que vieram do formulário HTML
    // Os nomes 'nome_prod' e 'preco_prod' devem ser iguais aos do HTML
    const novoProduto = {
        nome: req.body.nome_prod,
        preco: req.body.preco_prod
    };

    // Adiciona na nossa lista em memória
    produtos.push(novoProduto);

    // Manda o usuário de volta para a tela inicial para ver o resultado
    res.redirect('/');
});

// Rota 4: Deletar um produto
// O ":id" é um curinga. Ele pega qualquer coisa que vier depois da barra.
router.get('/deletar/:id', (req, res) => {
    const index = req.params.id; // Pega o número que veio no link
    
    // O comando .splice(posicao, quantidade) remove itens do array
    produtos.splice(index, 1); 
    
    // Recarrega a página inicial
    res.redirect('/');
});

module.exports = router;