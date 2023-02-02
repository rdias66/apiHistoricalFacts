const searchFact = (year, factsArray) => {
    if(validateYearInput(year)){
        return factsArray.filter((fact) => {
            if(fact.ano === year.toString()){
                return fact;
            }
        });
    }
    return {'Erro': 'Ano inválido informado'};
}

const validateYearInput = year => {
    let validation = 1920<year<2020 ? true : false;
    return validation;
}
export {searchFact, validateYearInput}
