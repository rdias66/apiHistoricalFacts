const searchFact = (year, factsArray) => {
        return factsArray.filter((fact) => {
            if(fact.ano === year.toString()){
                return fact;
            }
        });
}

const findFactPos = (year, factsArray) => {
        for(index = 0; i < factsArray.length; i++){
                if(factsArray[i].ano == year){
                return factsArray[i];
                }
        }

}

const validateYearInput = year => {
    const validation = 1920<year<2020 ? true : false;
    return validation;
}
export {searchFact, validateYearInput}
