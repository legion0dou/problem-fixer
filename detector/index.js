const speedDetector = require("./speedDetector");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the car's speed: ", (speed) => {
  const result = speedDetector(parseFloat(speed));
  console.log(result);
  rl.close();
});
