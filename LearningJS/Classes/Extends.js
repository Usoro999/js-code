class NewArray extends Array{
  sum() {
    return this.reduce((acc, el)=> acc+= el)
  }
}

const myArray = new NewArray(10, 20, 30)
const res = myArray.sum()
console.log(res)
