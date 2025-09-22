const Person = require('./person.js').Person
const bob = new Person("Bob")
const brian = new Person("Brian")
const bella = new Person("Bella")

const persons = [bob, brian, bella]

bob.printPerson()
brian.printPerson()
bella.printPerson()

while (bob.getAge() < 15) {
    bob.becomeOlder()
}

for (let i = 0; i < 3; i++) {
    brian.becomeOlder()
}

bob.printPerson()
brian.printPerson()
bella.printPerson()

persons.forEach(person => {
    if (person.isadult()) {
    console.log(`${person.getName()} is an adult.`)
    } else {
        console.log(`${person.getName()} is not an adult.`)
    }
})