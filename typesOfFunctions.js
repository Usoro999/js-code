

// Expression functions
const expressionFunction = function (parametr) {
    const par = parametr ** 2;
    console.log(par);
    return par; 
}
expressionFunction(1990);

// Declaration functions
function declareFunction(parametr) {
    const par = parametr ** 2;
    console.log(par);
    return par;
}
declareFunction(1990);

// Arrow functions
const arrowFunction = parametr => parametr ** 2;
arrowFunction(1990);

const arrowBigFunction = parametr => {
    const par = parametr ** 2;
    console.log(par);
    return par;
}
const p = arrowBigFunction(1990);

const arrowBigFunction2 = (parametr, parametr2, parametr3) => {
    const par = parametr ** 2;

    console.log(par + parametr2 + parametr3);
    return par;
}