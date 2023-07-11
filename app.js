// 1-1 --------------------------------------------------------------------------
// function countOccurences(string, char) {
//   let counter = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === char) {
//       counter++;
//     }
//   }
//   return counter;
// }

// console.log(countOccurences("TemoAchiGiorgi", "i"));

// 1-2 -----------------------------------------------------------------------

// function bubbleSort(arr) {
//   return arr.sort((a, b) => b - a);

//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] < arr[j + 1]) {
//         let temp = arr[j + 1];
//         arr[j + 1] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }

// console.log(a, b);

// console.log(
//   bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
// );

// let a = 5;
// let b = 10;
// b = temp; // 5
// [a, b] = [b, a];

// a = b; // 10

// 1-3 ---------------------------------------------------------------------

// function longestCountry(countries) {
//   let longestCountry = "";

//   for (let i = 0; i < countries.length; i++) {
//     if (countries[i].length > longestCountry.length) {
//       longestCountry = countries[i];
//     }
//   }
//   return longestCountry;
// }

// console.log(
//   longestCountry(["Germany", "Australia", "United States of America"])
// );
