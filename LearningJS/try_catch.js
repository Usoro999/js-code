// Throw an Error

const throwSomeError = function() {
  throw new Error('Some Error')
}



try {
  throwSomeError()
} catch (error) {
  console.log(error.message);
  console.error(error)
} finally {
  console.log('You always will see me');
  
}