function Car() {
}
Car.prototype.type = 'sedan'
Car.prototype.wheels = '17`'
Car.prototype.getCarType = function() {
  return `Type of car: ${this.type}`;
};
Toyota.prototype = new Car()   // 1 Toyota inherits type and wheels from Car

function Toyota(model, year) {
  Car.call(this); // Call the constructor of Car
  this.model = model;
  this.year = year;

}
Toyota.prototype.getModelInfo = function() {
  return `Model: ${this.model}, Year: ${this.year}`;
};
const myCar = new Toyota('Yaris', '2022')
console.log(myCar.getModelInfo()); // type can be used by myCar
console.log(myCar.getCarType());
console.log(myCar);


// 2 Inheritance from Car with constructor
Toyota.prototype = Object.create(Car.prototype)
const corolla = new Toyota('model', 'year')
console.log(corolla.type + corolla.getModelInfo);

