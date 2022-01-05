const express = require("express");
const app = express();


app.get('/', (req,res) => {
    res.send("Olá Chatbot");
})

app.get('/pergunta', (req, res) => {
    console.log(req.query);
    res.send("Qual a sua pergunta?");
})


app.post('/pedido', (req, res) => {
    console.log(req.body);
    res.send("pedido recebido");
});



app.listen(3000, '127.0.0.1', () => {    
        console.log("Servidor rodando");
});