/*
Problem Statement
Bob has a floating point number N. He wants to set the precision for 2 digits after the decimal point for the number. He is not good at coding, hence looking for your help.

Input
The first line contains T, the number of test cases. Next T line contains floating point number N.

Output
Print N in a separate line after setting precision for 2 digits after the decimal point:

Constraints
1 <= T <= 1000 1 <= N <= 10000

Sample Input
1
713.166

Sample Output

713.17

*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let tc;

rl.question("Enter no. of test cases: ", (answer) => {
  tc = parseInt(answer);
  let arr = [];
  let i = 0;
  function readInput() {
    rl.question("Enter number:", (answer) => {
      arr.push(parseFloat(answer));
      i++;
      if (i < tc) {
        readInput();
      } else {
        for (let i = 0; i < arr.length; i++) {
          arr[i] = arr[i].toFixed(2);
          console.log(arr[i]);
        }
        rl.close();
      }
    });
  }
  readInput();
});
