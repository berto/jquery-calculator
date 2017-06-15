class Calculator {
  constructor(buttons) {
    this.value = ''
    this.operator = ''
    this.reset = false
    this.numbers = buttons.numbers
    this.operators = buttons.operators
    this.clear = buttons.clear
    this.equals = buttons.equals
    this.screen = buttons.screen
    this.operations = {
      '÷': (num1, num2) => num1 / num2,
      'x': (num1, num2) => num1 * num2,
      '-': (num1, num2) => num1 - num2,
      '+': (num1, num2) => Number(num1) + Number(num2)
    }
  }
  init() {
    this.clearDisplay()
    this.numbers.click(this.handleNumber.bind(this))
    this.operators.click(this.handleOperator.bind(this))
    this.clear.click(this.handleClear.bind(this))
    this.equals.click(this.handleEquals.bind(this))
  }
  handleNumber(event) {
    this.handleReset()
    let number = event.target.innerHTML
    let screenValue = this.screen.html()
    screenValue =  screenValue === '0' ? '' : screenValue 
    if (this.operator) {
      let total = screenValue + number  
      this.displayValue(total)
    } else {
      screenValue = screenValue + number 
      this.displayValue(screenValue)
    }
  }
  handleOperator(event) {
    let operator = event.target.innerHTML
    if (this.operator && !this.reset) {
      this.calculate()
    } 
    this.value = this.screen.html()
    this.operator = operator 
    this.reset = true
  }
  handleClear() {
    this.value = ''
    this.operator = ''
    this.reset = false
    this.clearDisplay()
  }
  handleEquals() {
    if (this.operator) {
      this.calculate()
      this.operator = ''
      this.reset = true
    }
  }
  handleReset() {
    if (this.reset) {
      this.clearDisplay()
      this.reset = false
    }
  }
  calculate() {
    let calculator = this.operations[this.operator]
    let total = calculator(this.value, this.screen.html()) 
    this.value = total
    this.displayValue(total)
  }
  displayValue(number) {
    this.screen.html(number)
  }
  clearDisplay() {
    this.screen.html('0')
  }
}
