class Person {
    name = ""
    age = 0
    kaal = 0 
    pikkus = 0

    getPikkus() {
        return this.pikkus
    }

    setPikkus(pikkus) {
        if (pikkus < 0) {
            console.log("Height cannot be negative.")
            return
        } else {        
        this.pikkus = pikkus
        }
    }

    getkaal() {
        return this.kaal
    }

    setkaal(kaal) {
        if (kaal < 0) {
            console.log("Weight cannot be negative.")
            return
        } else {        
        this.kaal = kaal
        }
    }

    becomeHeavier() {
        this.kaal++
    }

    isfat() {
        if (this.kaal < 100) {
            return false
        }
        return true
    }

    ispikk() {  
        if (this.pikkus < 180) {
            return false
        }
        return true
    }

    constructor(name, pikkus, kaal ) {
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
        console.log(`name: ${this.name}, age: ${this.age} weight: ${this.kaal} height: ${this.pikkus} BMI: ${this.BMI().toFixed(2)}`)
    }

    BMI() {
        const heightInMeters = this.pikkus / 100;
        return this.kaal / (heightInMeters * heightInMeters);
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