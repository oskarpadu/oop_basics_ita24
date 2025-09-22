class Person {
    name = ""
    age = 0

    constructor(name) {
        this.name = name
    }

    becomeOlder() {
        this.age++
    }

    isadult() {
        if (this.age < 18) {
            return false
        }
        return true
    }

    printPerson() { 
        console.log(`name: ${this.name}, age: ${this.age}`)
    }

    getName() {
        return this.name
    }

    setAge(age)  {
        this.age = age
    }

    getAge() {
        return this.age
    }
} 

module.exports = { Person }