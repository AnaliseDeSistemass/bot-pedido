const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req,res) => {
    res.send("Olá Chatbot");
})

app.get('/pedido', (req, res) => {
    console.log(req.query);
    res.send("Qual a sua pergunta?");
})


app.post('/pedido', (req, res) => {
    console.log(req.body);
    const produto = req.body.produto;
    const tamanho = req.body.tamanho;
    const sabor = req.body.sabor;
    const pg = req.body.formaPagamento;
    const nome = req.body.nome;

    const pedido = {
        produto,
        tamanho,
        sabor,
        pg,
        nome,
    }
    res.json(pedido);
});



app.listen(3000, '127.0.0.1', () => {    
        console.log("Servidor rodando");
});