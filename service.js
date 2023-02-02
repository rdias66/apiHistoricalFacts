const searchFact = (year, factsArray) => {
        return factsArray.filter((fact) => {
            if(fact.ano === year.toString()){
                return fact;
            }
        });
}

const validateYearInput = year => {
    const validation = 1920<year<2020 ? true : false;
    return validation;
}
export {searchFact, validateYearInput}
