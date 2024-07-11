// Declare kelvin variable
const kelvin = 293;
// Declare celsius variable with a substaction
let celsius = kelvin - 273;
// Declare fahrenheit variable and calculate it
let fahrenheit = Math.floor(celsius * (9 / 5) + 32);
// Create newton temperature
let newton = Math.floor(celsius * (33 / 100));

// Print with text
console.log(`The temperature is ${kelvin} degrees kelvin`);
console.log(`The temperature is ${celsius} degrees Celsius`);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
console.log(`The temperature is ${newton} degrees Newton`);
