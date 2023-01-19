// 1.   Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// 1a.  Programmatically subtract the value of the first element in the array from the value in the last element of the array 
// •    Do not use numbers to reference the last element, find it programmatically, 
// •    ages[7] – ages[0] is not allowed!

// 1b.  Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
// 1c.  Use a loop to iterate through the array and calculate the average age. 

let ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log("question one;", ages[0])

console.log("last element minus first element:", ages[ages.length - 1])

ages.push(1, 3, 5);
console.log(ages);
console.log("last element minus first element:", ages[ages.length - 1])

console.log(ages[ages.length - 1])
console.log(ages[ages.length - 1] - ages[0])

let sum = 0;

for(let i = 0; i < ages.length; i++) {
    // console.log(i);
    // console.log(ages[i])
    sum = sum + ages[i];
    console.log(sum);
}
console.log(sum / ages.length);

// 2.   Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
// 2a.  Use a loop to iterate through the array and calculate the average number of letters per name. 
// 2b.  Use a loop to iterate through the array again and concatenate all the names together, separated by spaces

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]
console.log(names);

let sumOfThings = 0;
for(let i = 0; i < names.length; i++) {
    // console.log[i];
    // console.log(names[i]);
    sumOfThings = sumOfThings + names[i].length;
    console.log("sum of things:", sumOfThings);
}
console.log("average:", sumOfThings / names.length);

let concat = "";
for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
    concat = concat + names[i] + " ";
}

console.log(concat);

// 3. How do you access the last element of any array?
// Access the last element of an array by array[array.length - 1]

// 4. How do you access the first element of any array?
// access them by array[0]

// 5.   Create a new array called nameLengths. Write a loop to iterate over the previously created names array 
// and add the length of each name to the nameLengths array.
// For example:
// namesArray = ["Kelly", "Sam", "Kate"] //given this array
// nameLengths = [5, 3, 4] //create this new array

// step one - Create a new array called nameLengths
let nameLengths = [];
// step two - Write a loop
// step three - iterate over the names array
console.log(names)
for (let i = 0; i < names.length; i++) {
    console.log(i, "name;", names[i], "namelength", names[i].length) 
// step four add length of each name to the nameLengths array
nameLengths.push(names[i].length)
console.log(nameLengths)
}
console.log("question five", nameLengths)

// 6.   Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
let sumOfLetters = 0;
for (let i = 0; i < names.length; i++) {
    console.log(i, "name;", names[i], "namelength", names[i].length) 
    sumOfLetters = sumOfLetters + nameLenghts[i];
    console.log("sum of nameLenths:", sumOfLetters);
}
// 7. Write a function that takes parameters, word and nameLengths, as arguments 
// and returns the word concatenated to itself nameLengths number of times.
// (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello')

// step one -  write a function that takes parameters, work and nameLenghts
function functionNew(word, nameLengths) {
    let returnedWord = '';
    for(i = 0; i < nameLengths; i++) { // loop nameLengths times
        returnedWord = returnedWord.concat(word)
    }
    return returnedWord;
}
// 8.   Write a function that takes two parameters, firstName and lastName, and returns a full name.
// The full name should be the first and the last name separated by a space.
function fullName(firstName, lastName) {
    console.log(firstName + lastName)
    return firstName + lastName
}

// 9.   Write a function that takes an array of numbers and returns true 
// if the sum of all the numbers in the array is greater than 100.
function newDay(numbers) {
    let sumTotal = 0;
    // loop through numbers array
    if (numbers > 100) {
        result == "true"; 
    } else {
        result == "false"
    } 
    return result;
}
        console.log(numbers + sumTotal)
    
    // add to sum total
    // close loop
    // return conditional
return newDay([3,4,5])


// 10.  Write a function that takes an array of numbers and returns the average of 
//all the elements in the array.
function avg(numArray) {
    let total = 0;
    for (let value of array) {
      total += value;
    }
    return total/numArray.length; 
  }

// 11.  Write a function that takes two arrays of numbers and returns true
//  if the average of the elements in the first array is greater than the average of the elements in the second array.
function array(arr1, arr2) {
    const avg1 = avg(arr1);
    const avg2 = avg(arr2);
    // same for arr2
    // return conditional avg1 > avg2
    return (avg1 > avg2)
}


// 12.  Write a function called willBuyDrink that takes a boolean isHotOutside, 
// and a number moneyInPocket, and returns true if it is hot outside 
//and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.5

}

// 13.  Create a function of your own that solves a problem. 
function addThreeNumbers(x, y, z) {
    return x + y + z
}
addThreeNumbers();
// •    In comments, write what the function does and why you created it.
The function that is created is addThreeNumbers and the purpose of the function is to add x, y, and z which represent numbers. 