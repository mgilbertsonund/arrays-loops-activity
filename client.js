/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 */
let hobbies = ['reading', 'painting', 'pickleball'];
for (let hobby of hobbies){
     console.log(hobby);
}
console.log('Total hobbies:', hobbies.length);
// Example output
// 1. swimming
// 2. board games
// 3. painting
// Total hobbies: 3

/**
 * #2 Colors
 * ---------
 * 1. Create an array of colors as strings
 *    (include the color 'teal' at least once)
 * 2. Create a variable tealCount
 * 3. Write a loop that counts the number of times teal 
 *    is in the array
 * 4. Output the array and number of times teal was found
 */
let colors = ['light blue', 'blue', 'red', 'teal', 'purple', 'teal'];
let tealCount = 0;
for (index = 0; index < colors.length; index += 1){
     if (colors[index] === 'teal'){
          tealCount += 1;
          console.log(tealCount);
     }     
}

// Example output
// green, red, teal, orange, teal
// Teal was found 2 times


/**
 * #3 Even & Odd
 * -------------
 * 1. Create an array of numbers (at least 5 numbers)
 * 2. Create variables oddNumbers and evenNumbers (empty arrays)
 * 3. Write a loop that puts all the odd numbers in the oddNumbers 
 *    array and even numbers in the evenNumbers array.
 * 4. Output the original array, odd number array and even number array
 */
let numbers = [25, 7, 3, 13, 10, 20];
let oddNumbers = [];
let evenNumbers = [];
for (let index = 0; index < numbers.length; index += 1){
     if (numbers[index] % 2 == 0){
          evenNumbers.push(numbers[index]);
     } else {
          oddNumbers.push(numbers[index]);
     }
}
console.log(oddNumbers);
console.log(evenNumbers);

// Example output
// 3, 7, 2, 8, 11, 4, 2
// Odd 3, 7, 11
// Even 2, 8, 4, 2


/**
 * #4 Flipping Switches
 * --------------------
 * 1. Create an array of boolean values (some true and some false)
 * 2. Create a variable toggled (empty array)
 * 3. Write a loop that adds the opposite value to the toggled array
 * 4. Output both arrays
 */
let array = [true, false, false, true, false, true, true];
let toggled = [];
for (let index = 0; index < array.length; index +=1){
     // if its true, then run this if to switch to false
     if (array[index] === true){
          array[index] = false;
          toggled.push(array[index]);
     } else {
          array[index] = true;
          toggled.push(array[index]);
     }
}
console.log(toggled);
// Example output
// true, false, true, true
// Toggled false, true, false, false


/**
 * #5 (STRETCH) Remove 0's
 * --------------------
 * 1. Create an array of numbers which has one or more 0's
 *    at the end (e.g. 3, 0, 2, 8, 0, 0, 0)
 * 2. Write a loop that removes 0 from the end of the array
 *    NOTE: You should not need a second array here.
 * 3. Output the array
 *
 * Hint: Try using a while loop for this one.
 */
let numbersArray = [12, 1, 5, 6, 9, 0, 0];
while (numbersArray[numbersArray.length - 1] === 0){
     numbersArray.pop();
}
console.log(numbersArray);
// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8


/**
 * #6 (STRETCH) Highest & Lowest
 * --------------------
 * 1. Create a largish array of numbers (e.g. 2, 2, -3, 7, 4, 1, 7, 12, 8)
 * 2. Create two variables high & low.
 * 3. Loop over all numbers in the array keeping track of the highest
      and lowest numbers.
 * 3. Log the highest and lowest number to the console
 */
let numbersArrayy = [1, 2, 4, 6, 8, 13, -1, -10, 100, -45];
let high = 0;
let low = 0;
for (index = 0; index < numbersArrayy.length; index +=1){
     // check if number is greater than 0, if so, set as high. repeat
     // after on instance, high is 1
     if(numbersArrayy[index] > high){
          high = numbersArrayy[index];
     } else {
          // check if number is lower than 0, if so, set as low. repeat
          // after one instance, low is still 0
          numbersArrayy[index] < low;
          low = numbersArrayy[index];
     }
}
console.log(high, low);

// Example output
// 2, 2, -3, 7, 4, 1, 7, 12, 8
// High: 12
// Low: -3
