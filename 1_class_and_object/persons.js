const Person = require('./person.js').Person
const bob = new Person("Bob")
const brian = new Person("Brian")
const bella = new Person("Bella")

const persons = [bob, brian, bella]

while (bella.getPikkus() < 170) {
    bella.setPikkus(bella.getPikkus() + 1)
}

for (let i = 0; i < 190; i++) {
    brian.setPikkus(brian.getPikkus() + 1)
}

bob.setPikkus(160)

while (bob.getkaal() < 100) {
    bob.becomeHeavier()
}

for (let i = 0; i < 50; i++) {
    brian.becomeHeavier()
}

bella.setkaal(45)

while (bob.getAge() < 15) {
    bob.becomeOlder()
}

for (let i = 0; i < 6; i++) {
    brian.becomeOlder()
}

bella.setAge(18)

bob.printPerson()
brian.printPerson()
bella.printPerson()

persons.forEach(person => {
    if (person.ispikk()) {
    console.log(`${person.getName()} is tall.`)
    } else {
        console.log(`${person.getName()} is not tall.`)
    }
})

persons.forEach(person => {
    if (person.isadult()) {
    console.log(`${person.getName()} is an adult.`)
    } else {
        console.log(`${person.getName()} is not an adult.`)
    }
})

persons.forEach(person => {
    if (person.isfat()) {
    console.log(`${person.getName()} is fat.`)
    } else {
        console.log(`${person.getName()} is not fat.`)
    }
})