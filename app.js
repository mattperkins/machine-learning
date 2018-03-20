const brain = require("brain.js")

const network = new brain.NeuralNetwork()

// data as arrays
// network.train([
// {input: [50,150], output:[1] },
// {input: [30,60], output:[0] },
// {input: [73,250], output:[1] },
//])

// data as objects
network.train([
 {input: {height: 60, weight: 150}, output: {adult: 1}},
 {input: {height: 30, weight: 60}, output: {adult: 0}},
 {input: {height: 73, weight: 250}, output: {adult: 1}}
])

// const result = network.run([70,200])
const result = network.run({height:70, weight: 200})
console.log(result)
