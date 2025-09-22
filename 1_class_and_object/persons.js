const Person = require('./person.js').Person
const bob = new Person("Bob")
console.log(bob.age)
console.log("name: " + bob.name)
console.log(`age: ${bob.getAge()}`)  