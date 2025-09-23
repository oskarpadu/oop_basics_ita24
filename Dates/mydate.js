class MyDate   {
    constructor(day, month, year) {
        this.day = day
        this.month = month
        this.year = year
        const validation = this.isValid()
        if (validation.valid === false) {
            console.log(validation.error)
        }  
    }

    getDay() {
        return this.day
    }

    getMonth() {
        return this.month
    }

    getYear() {
        return this.year
    }
    
    isValid() {
        if (!Number.isInteger(this.day)) {
            return { valid: false, error: "Päev peab olema täisarv." }
        }
        if (!Number.isInteger(this.month)) {
            return { valid: false, error: "Kuu peab olema täisarv." }
        }
        if (!Number.isInteger(this.year)) {
            return { valid: false, error: "Aasta peab olema täisarv." }
        }
        if (this.month < 1 || this.month > 12) {
            return { valid: false, error: "Kuu peab olema vahemikus 1–12." }
        }
        const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        const maxDay = daysInMonth[this.month - 1]
        if (this.day < 1 || this.day > maxDay) {
            return { valid: false, error: `Kuu ${this.month} jaoks peab päev olema vahemikus 1–${maxDay}.` }
        }
        return { valid: true }
    }

    printdate() {
    console.log(`${this.day}.${this.month}.${this.year}`)
    }
    
}  

module.exports = { MyDate }