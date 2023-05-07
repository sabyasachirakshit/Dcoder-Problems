/*
Problem Statement
You are given an array of N length. You have to rotate the array rightwards by K rotations, that is, shift each element to the right by K positions. Print the rotated array.

Input
First line contains N and K. Second line contains N integers denoting the array.

Output
Print the array after the rotation.

Constraints
1 <= N, K <= 100000 1 <= Arr[i] <= 10^9

Sample Input
5 2
1 2 3 4 5

Sample Output

4 5 1 2 3 
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let numbers;

rl.question(
  "Enter length of array, and how many rotations? seperated by comma: ",
  (answer) => {
    numbers = answer.split(" ");
    length_of_array = numbers[0];
    rotations = numbers[1];
    rl.question("Enter Array:", (answer) => {
      array = answer.split(" ");
      for (let i = 0; i < parseInt(rotations); i++) {
        array.unshift(array.splice(-1, 1)[0]);
      }
      console.log("After rotations, array becomes:", array);
      rl.close();
    });
  }
);
