/*
Problem Statement
Cody has a sequence of characters N. He likes a sequence if it contains his favourite sequence as a substring. Given the sequence and his favourite sequence F, check whether the favourite sequence is present in the sequence.

Input
The first line of input contains a single line T, which represents the number of test cases. Each test case consists of 2 strings separated by space N and F respectively.

Output
Print "Yes" if the sequence contains the favorite sequence in it, otherwise print "No".

Constraints
1<=T<=10. 1<=|N|,|F|<=100. All the characters are lowercase alphabets.

Sample Input
2
abcde abc
pqrst pr

Sample Output

Yes
No
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.question("Enter number of test cases: ", (answer) => {
  const numTests = parseInt(answer);
  let testCases = [];

  rl.on("line", (line) => {
    testCases.push(line);
    if (testCases.length === numTests) {
      for (let i = 0; i < numTests; i++) {
        let arr=testCases[i].split(" ");
        if(arr[0].includes(arr[1])){
            console.log("Yes");
        }else{
            console.log("No");
        }
      }
      rl.close();
    }
  });
});
