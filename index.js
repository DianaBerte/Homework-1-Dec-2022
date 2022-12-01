function printTitle(titleString) {
    console.log(`\n--------------------------------${titleString}-------------------------------\n`);
  }

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

printTitle("Exercise 1")

function area(l1, l2) {
   return l1 * l2;
}

console.log("Calculating the area of the rectangle:", area(3, 5))

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
printTitle("Exercise 2")

function crazySum(intg1, intg2) {
    if (intg1 === intg2) {
        return (intg1 + intg2) *3;
        console.log("Returning the sum of the values multiplied by 3:", (intg1 + intg2) * 3)
    } else {
        return intg1 + intg2;
        console.log("Returning the sum of the values:", (intg1 + intg2))
    }
} 
// How do I make appear in the terminal the console.log expressed in the function?

console.log("CrazySum is:", crazySum(3, 3))

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

printTitle("Exercise 3")

function crazyDiff (givenNumber, number19) {
    if (number19 > 19) {
        return (givenNumber - number19) *3
    }
}

console.log("CrazyDiff is:", crazyDiff(10, 20))

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

printTitle("Exercise 4")

function boundary (n) {
    if (n === 20 || n === 100 || n === 400 || n > 20 && n < 100) {
    return "True"
    }
}

console.log("Returning 'True' if the number is within 20 and 100 or if it's equal to 400:", boundary(99))