$(() => {
  const buttons = {
    numbers: $('span:not(.operator)'),
    operators: $('.operator:not(#clear, #equals)'),
    clear: $('#clear'),
    equals: $('#equals'),
    screen: $('#screen')
  }
  const calc = new Calculator(buttons)
  calc.init()
})
