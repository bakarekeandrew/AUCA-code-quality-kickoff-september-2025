/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 3
// export default function findLargestNumber(numbers) {
//   let largest = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//       largest = numbers[i];
//     }
//   }
//   return largest;
// }

// const findLargestNumber = numbers => Math.max(...numbers);
// export default findLargestNumber;

export default function getLargestNumber(numbers = []) {
  if (numbers.length === 0) return undefined;
    let largest = numbers[0];
    for (const number of numbers) {
        if (number > largest) largest = number;
    }
    return largest;
}