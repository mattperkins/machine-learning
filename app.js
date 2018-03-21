const brain = require("brain.js")

const network = new brain.NeuralNetwork()

// data as arrays
// network.train([
// {input: [50,150], output:[1] },
// {input: [30,60], output:[0] },
// {input: [73,250], output:[1] },
//])

// data as objects
//network.train([
// {input: {height: 60, weight: 150}, output: {adult: 1}},
// {input: {height: 30, weight: 60}, output: {adult: 0}},
// {input: {height: 73, weight: 250}, output: {adult: 1}}
//])


network.train([
 { input: { r: 0.62, g: 0.72, b: 0.88, }, output: { light: 1 } }, 
 { input: { r: 0.1, g: 0.84, b: 0.72, }, output: { light: 1 } },
 { input: { r: 0.33, g: 0.24, b: 0.29, }, output: { dark: 1 } },
 { input: { r: 0.74, g: 0.78, b: 0.86, }, output: { light: 1 } },
 { input: { r: 0.31, g: 0.35, b: 0.41, }, output: { dark: 1 } },
// { input: { r: 0, g: 1, b: 0.65, }, output: { light: 1 } },
])

// const result = network.run([70,200]) - use with arrays (above)
// const result = network.run({height:70, weight: 200}) - use with objects (above)

const result = network.run({ r: 0, g: 1, b: 0.65})
console.log(result)
