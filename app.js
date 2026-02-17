const express = require('express');
const app = express();
const port = 3000;

const mainRoutes = require('./src/routes/main');

app.use(express.urlencoded({ extended: true})); // Isso permite que o Node entenda dados vindos de formulários HTML
app.set('view engine', 'ejs');
app.set('views', './src/views'); // Avisa onde estão os arquivos HTML/EJS
app.use(express.static('public')); // Pasta para CSS/Imagens

// "Toda vez que alguém acessar a raiz ('/'), use as regras do mainRoutes"
app.use('/', mainRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});