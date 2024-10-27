export const Car = {
  TOYOTA: { mark : "Toyota", year: 2019, model: "Model"},
  HONDA: "Honda",
  FORD: "Ford"
}

//console.log(Car.TOYOTA);
 
const func = (car) => {
  switch (car) {
    case Car.TOYOTA:
      return `${Car.TOYOTA.mark} ${Car.TOYOTA.model} ${Car.TOYOTA.year}`;
    case Car.HONDA:
      return Car.HONDA;
    case Car.FORD:
      return Car.FORD;
    default:
      return "Unknown car";
  }
}

