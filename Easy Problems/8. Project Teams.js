/*
Problem Statement
There are N students in a class and Teacher want to divide these students into some groups .
Teacher told  that groups consisting of two or less students not allowed , 
so Teacher want to have as many groups consisting of three or more students as possible.
Divide the students so that the number of groups consisting of three or more students is maximized.

Input
Single integer N

Output
Maximum number of groups can be formed

Constraints
1<=N<100000

Sample Input
6

Sample Output

2 
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.question("Enter the number of students: ", (answer) => {
  const N = parseInt(answer);
  let groups_of_3 = Math.floor(N / 3);
  let remaining_students = N % 3;
  if (N < 3) {
    console.log("0");
  } else if (remaining_students === 0) {
    console.log(groups_of_3);
  } else if (remaining_students === 1) {
    console.log(groups_of_3 - 1);
  } else {
    console.log(groups_of_3);
  }
  rl.close();
});
