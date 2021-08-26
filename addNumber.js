
/*-----------------------------------------------------------------
Challenge: 01-addOne

Difficulty: Basic

Prompt:

Write a function called addOne that takes a single number as an argument and returns that number plus 1.

Examples:

addOne(1) //=> 2
addOne(-5) //=> -4
-----------------------------------------------------------------*/
function addOne(num){
    return num + 1;
  }
console.log(addOne(5))  


/*-----------------------------------------------------------------
Challenge: 02-addTwoNumbers

Difficulty: Basic  

Prompt:

Write a function called addTwoNumbers that accepts two numeric arguments and returns the sum of those two numbers.
If either argument is not a Number, return the value of NaN.

Examples:

addTwoNumbers(5, 10) //=> 15
addTwoNumbers(10, -2) //=> 8
addTwoNumbers(0, 0) //=> 0
addTwoNumbers('Hello', 5) //=> NaN
-----------------------------------------------------------------*/
// Your solution for 02-addTwoNumbers here:

function addTwoNumbers(a, b) {
  if (!isNaN(a + b)) {
    return a + b
  } else {
    return NaN
  }
}
console.log(addTwoNumbers(3, 7))
console.log(addTwoNumbers('Hello', 5))