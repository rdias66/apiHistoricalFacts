//npm init
//npm install express
import facts from './data_collection.js';
import {searchFact, validateYearInput, findFactPos} from './service.js';

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

app.post('/', (req, res) => {
    const newFactYear = req.query.ano;
    if(!validateYearInput(newFactYear)){
        const newFact = {Ano: newFactYear , Fato: req.query.fato }  
        facts.push(newFact);
        res.status(200);
    }
    res.status(400).send("Fato ja existe no ano informado");

});

app.delete('/', (req, res) => {
    const yearToDelete = req.query.ano;
    if(validateYearInput(year)){
        facts.splice(findFactPos(year), 1);
        res.status(200).send("Fato do ano" + year + "deletado");
    }
    res.status(400).send("Ano informado invalido");
});

app.listen(port, () => {
    const date = new Date();
    console.log("Server initiated at port" + port + "on" + date);
});
