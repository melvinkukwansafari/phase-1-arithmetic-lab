
// Write your code here
let num1=31;
let num2=2;
const multiply=num1*num2
console.log(31*2)

// Generate a random integer greater than 0
const random = Math.floor(Math.random() * 100) + 1;

function getRandom() {
    // Generate a random decimal number between 0 (inclusive) and 1 (exclusive)
    let randomDecimal = Math.random();
  
    // Multiply the random decimal by 10 and round it down to the nearest integer
    // using Math.floor(). This will give us a random integer between 0 and 9.
    let random = Math.floor(randomDecimal * 10);
  
    // Add 1 to the random integer, so that the result is greater than 0.
    return random + 1;
  }
  let num3=14;
  let num4=10;
  let mod = num3 % num4;
  console.log(mod);

  let max = Math.max(1, 20, 3);
  console.log(max);