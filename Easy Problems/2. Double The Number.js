/*
Problem Statement
Given an array A of size N and K. count all the number of elements such that A[i] * 2 = K.

Input
The first line of the input contains a single integer T denoting the number of test cases. 
The first line of each test case contains two space separated integer N and K respectively. 
The second line of each test case contains N space separated integers A[i].

Output
For each test case, print a single line containing count.

Constraints
1 <= T <= 10 1 <= N, K <= 100 1 <= A[i] <= 100

Sample Input
1
7 14
14 37 7 7 7 40 44

Sample Output

3
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});
rl.question("Enter the number of test cases: ", (testCases) => {
  for (let i = 0; i < testCases; i++) {
    rl.question(
      `Test Case ${i + 1}: Enter two integers separated by a space: `,
      (input1) => {
        const [N, K] = input1.split(" ").map(Number);
        rl.question(
          `Test Case ${i}: Enter ${N} integers separated by spaces: `,
          (input2) => {
            const arr = input2.split(" ").map(Number);
            let count = 0;
            for (let iter = 0; iter < arr.length; iter++) {
              if (arr[iter] * 2 === K) {
                count++;
              }
            }
            console.log(count);
            if (i === testCases - 1) {
              rl.close();
            }
          }
        );
      }
    );
  }
});
