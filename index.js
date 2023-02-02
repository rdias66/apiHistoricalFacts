//npm init
//npm install express
import facts from './data_collection.js';
import {searchFact, validateYearInput} from './service.js';

const express = require('./express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    const year = req.query.ano;
    if(validateYearInput(year)){
        res.status(200).json(searchFact(year, facts));
    }
    res.status(400).json({'Erro' : "Ano informado inválido"});
});

app.listen(port, () => {
    const date = new Date();
    console.log("Server initiated at port" + port + "on" + date);
});
