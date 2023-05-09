/*

Problem Statement
Steve is playing a quiz game with his brother John. As Steve just learned the concept of leap year, John wanted to test his knowledge. For that, John started to ask Steve whether a year is a leap year or not by giving him a random year. Steve is little confused and he asks your help to the quiz.

Input
The first line of input contains one integer T. Next T lines will have years given by John.

Output
For each test case print "Yes" if it is a leap year else "No".

Constraints
1<=T<=100. 10^3<=Year<=10^5.

Sample Input
2
2000
2017

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
        if(parseInt(testCases[i])%4===0){
            console.log("Yes");
        }
        else{
            console.log("No");
        }
      }
      rl.close();
    }
  });
});
