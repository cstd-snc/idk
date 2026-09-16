const express = require ('express') ;
const app = express() ;
const port= 3000

app.get('/', (req,res) => {
    res.send('aplicação rodando em cointeiner docker!') ;
});

app.listen(port, () => {
    console.log('servidor rodando na porta ${port}');
    /* eslint-env node */
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('aplicação rodando em container docker!');
});

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`);
});
}) ;
