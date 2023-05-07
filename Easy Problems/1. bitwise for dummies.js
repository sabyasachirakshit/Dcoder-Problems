/* 

Problem Statement
This is to provide you with an introductory experience of bit-wise operations. There are basically six bit-wise operations in any programming language : - AND(&), OR(|), XOR(^), NOT(~), left-shift operator(<<) and right-shift operator(>>). You will be given 2 numbers a and b to perform AND, OR and XOR operations and 2 number p and q to perform bit-wise shifting operations(left and right) and a number x to perform the NOT(~) operation. Print the output upon performing these operations each in a newline.

Input
five positive integers a, b, p, q and x separated by a space.

Output
In the three lines, print the output upon performing Bitwise AND, OR, XOR operations respectively on 'a' and 'b'. In the next two lines, print the output of left-shifting 'p' by 'q' bits and right-shifting 'p' by 'q' bits, respectively. In the last line, print the output upon performing the bit-wise NOT operation on 'x'.

Constraints
0 ≤ a, b, p, q, x ≤ 255

Sample Input
2 4 2 1 6

Sample Output

0
6
6
4
1
-7 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let numbers;

rl.question("Enter a line of numbers separated by spaces: ", (answer) => {
  numbers = answer.split(" ").map((num) => {
    if (Number(num) < 0) {
      return -Number(num);
    }
    return Number(num);
  });
  let output_arr = [];
  output_arr.push(numbers[0] & numbers[1]);
  output_arr.push(numbers[0] | numbers[1]);
  output_arr.push(numbers[0] ^ numbers[1]);
  output_arr.push(numbers[2] << numbers[3]);
  output_arr.push(numbers[2] >> numbers[3]);
  output_arr.push(~numbers[4]);
  output_arr.map((item) => {
    console.log(item);
  });
  rl.close();
});
