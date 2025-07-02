//kept repeating this code, so I tried to dry it out
const optionSelector = (arr) => arr[Math.floor(Math.random() * arr.length)]

function crust() {
  const options = ['thin', 'hand tossed', 'pan']

  return optionSelector(options)
}

function cheese() {
  const options = ['provolone', 'parmesan', 'mozzarella']

  return optionSelector(options)
}

function veggies() {
  const options = ['green Peppers', 'onions', 'mushrooms', 'banana peppers']

  return optionSelector(options)
}

function meat() {
  const options = ['pepperoni', 'sausage', 'ham']

  return optionSelector(options)
}

function createPizza() {
  return `Your random pizza is a ${crust()} pizza with ${meat()}, ${veggies()}, and ${cheese()}!`
}

console.log(createPizza())
