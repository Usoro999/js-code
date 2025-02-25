class Patient{

  constructor(name, surname, ...address) {
    this.name = name;
    this.surname = surname;
    this.address = new Address(...address);
  }
}

class Address { 

  constructor(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
  }
}