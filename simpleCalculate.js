const actions = {
    plus: (a, b) => a + b,
    minus: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiplication: (a, b) => a * b,
}

const calculate = (arg1, arg2, func) => {
    return func(arg1, arg2)
}

const selectedAction = "minus"

console.log(calculate(18, 3, actions[selectedAction]))