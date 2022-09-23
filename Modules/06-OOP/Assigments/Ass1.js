// Naman's JS Calculator

class Calculator {
    constructor(value1) {
        this.value1 = value1
    }
    add(input) {
        console.log(`${this.value1} + ${input} = ${this.value1 + input}`)
        this.value1 = this.value1 +input
        return this
    }
    subtract(input) {
        console.log(`${this.value1} - ${input} = ${this.value1 - input}`)
        this.value1 = this.value1 - input
        return this
    }
    divide(input) {
        console.log(`${this.value1} / ${input} = ${this.value1 / input}`)
        this.value1 = this.value1 / input
        return this
    }
    multiply(input) {
        console.log(`${this.value1} * ${input} = ${this.value1 * input}`)
        this.value1 = this.value1 * input
        return this
    }
}
const calculator = new Calculator(0)

calculator.add(6).subtract(1).multiply(3).divide(2)
