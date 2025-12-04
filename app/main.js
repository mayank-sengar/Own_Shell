const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Print the prompt explicitly so it's visible even when stdout isn't a TTY
process.stdout.write("$ ");

rl.on("line", (answer) => {
  console.log("prompt: " + answer);
  rl.close();
});
