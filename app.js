const express = require('express');
const app = express();
const port = 3000;

// configurar o express como motor de visualização
app.set('view engine', 'ejs');
app.set('views', './src/views'); 

// Pasta pública para CSS e Imagens
app.use(express.static('public'));

// Rota inicial
app.get('/', (req, res) => {

    // Simula dados vindo do banco
    const produtos = [
        {nome: 'teclado mecanico', preco:150},
        { nome: 'mouse gamer', preco: 80}
    ];
    res.render('index', {produtos: produtos});
});

app.listen(port, () => {
    console.log(`servidor rodando em localhost:&{port}`);
});