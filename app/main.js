const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("$ ", (answer) => {
  // console.log("prompt: "+ answer)
  rl.close();
  
});
