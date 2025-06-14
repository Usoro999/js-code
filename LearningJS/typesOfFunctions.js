

// Expression functions
const expressionFunction = function (parameter) {
    const par = parameter ** 2;
    console.log(par);
    return par; 
}
expressionFunction(1990);

// Declaration functions
function declareFunction(parameter) {
    const par = parameter ** 2;
    console.log(par);
    return par;
}
declareFunction(1990);

// Arrow functions
const arrowFunction = parameter => parameter ** 2;
arrowFunction(1990);

const arrowBigFunction = parameter => {
    const par = parameter ** 2;
    console.log(par);
    return par;
}
const p = arrowBigFunction(1990);

const arrowBigFunction2 = (parameter, parameter2, parameter3) => {
    const par = parameter ** 2;

    console.log(par + parameter2 + parameter3);
    return par;
}
arrowBigFunction2(3,5,3,6)