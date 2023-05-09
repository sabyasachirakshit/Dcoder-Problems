/*
Problem Statement
The SwapMaster is known to be the greatest and fastest swapper of all time. You intend to bring him down and become the new SwapMaster of the city. Through some secret sources, you found out that The SwapMaster undertook yet another task from Dr. Symmetry. The task he undertook is to perform a Symmetric Swap on an array A of numbers. Perform this task before SwapMaster to become the new SwapMaster. A Symmetric Swap involves swapping a number in an array with its symmetric position in the array. For example, if you want to swap element at position 2, you will swap it with the 2nd element from the back of the array.

Input
First line contains N, denoting the number of elements in the array A. Next line contains N space-separated positive numbers.

Output
Print the array after performing the Symmetric Swap on it.

Constraints
2 ≤ N ≤ 100 1 ≤ A[i] ≤ 1000

Sample Input
6
1 2 3 4 5 6

Sample Output

6 5 4 3 2 1 
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.question(
  "Enter length of array: ",
  (answer) => {
    length_of_array = parseInt(answer);
    rl.question("Enter Array:", (answer) => {
      array = answer.split(" ");
      if(array.length%2===0){
        let swap_array=[];
        let mid=array.length/2;
        let helper=mid-1;
        let helper2=array.length-1;
        for(let j=mid;j<array.length;j++){
            swap_array.push(array[helper2]);
            helper2--;
        }
        for(let i=0;i<mid;i++){
            swap_array.push(array[helper]);
            helper--;
        }
        console.log(swap_array);
      }else{
        mid_element=((length_of_array+1)/2)-1;
        let fin_array=[];
        let helper=mid_element-1;
        let helper2=array.length-1;
        for(let j=mid_element+1;j<array.length;j++){
            fin_array.push(array[helper2]);
            helper2--;
        }
        fin_array.push(array[mid_element]);
        for(let i=-1;i<mid_element-1;i++){
            fin_array.push(array[helper]);
            helper--;
        }
        console.log(fin_array);
      }
      rl.close();
    });
  }
);

