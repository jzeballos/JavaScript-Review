/* Make sure you do these last */

/*
Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.
plusOneSum([1, 2, 3, 4]); // 14
*/
plusOneSum = function(arr) {
  var suma = 0;
  for (var i in arr) {
    suma +=  arr[i] + 1;
  }
  return suma;
}

/*
Write a function that accepts a multi dimensional array and returns a flattened version.
flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]
*/

flatten = function(arr) {
  var newArray = [];

    for (var i in arr) {
      console.log(typeof(arr[i]));
      console.log(arr[i]);
      if (typeof(arr[i]) === 'number') {
        newArray.push(arr[i]);
      } else {
        newArray = newArray.concat(flatten(arr[i]));
      }
    }

  return newArray;
}
console.log(flatten([1, 2, [3, [4], 5, 6], 7]));

/*
Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]
*/
orden = function(arr) {
  var newArr = [];
  var contN = 0;
  // var contL = 0;
  var letters = [];
  for (var i in arr) {
    if (arr[i][0] === 'a') {
      contN++;
      }
    if (letters.indexOf(arr[i][0]) < 0) {
      letters.push(arr[i][0]);
    }
  }
  for (var j = 0; j < contN; j++) {
    for (var i in letters) {
      newArr.push(letters[i] + j);
    }
  }
  console.log(contN);
  console.log(letters);
  console.log(newArr);
}
orden(['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3']);
/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.

*/
missing = function(arr1, arr2) {
  length1 = arr1.length;
  length2 = arr2.length;
  for (var i in arr1) {
    if (arr2.indexOf(arr1[i]) < 0) {
      return arr1[i];
    }
  }
}
console.log(missing([1, 2, 3, 4], [1, 2, 4]));

/*
Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).
Example
longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]
*/
longestWords = function(str) {
  str =str.toLowerCase();
  var strArr = str.split(' ');
  var letters = 0;
  var newArr = [];
  for (var i in strArr) {
    if (strArr[i].length > letters) {
      letters = strArr[i].length;
    }
  }
  for (var i in strArr) {
    if (strArr[i].length === letters && newArr.indexOf(strArr[i]) < 0) {
      newArr.push(strArr[i]);
    }
  }
  return newArr;
}
console.log(longestWords("I gave a present to my parents"));

/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/
natMult = function(num1, num2, max) {
  var total = 0;
  for (var i = 2; i < max; i++) {
    if (i % num1 === 0 || i % num2 === 0) {
      total += i;
    }
  }
  return total;
}
console.log(natMult(3, 5, 1000));

/*
Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".
*/
elimDup = function(str) {
  newArray = [];
  for (var i in str) {
    if (newArray.indexOf(str[i]) < 0 || str[i] === ' ') {
      newArray += str[i];
    }
  }
  return newArray;
}
console.log(elimDup('tree traversal Jorge'));

/*
Write a sum method which will work properly when invoked using either syntax below.
console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5
*/
sum = function() {
  if (arguments.length === 2) {
    return arguments[0] + arguments[1];
  } else {
    var temp = arguments[0];
    return function(x) {
      return x + temp;
    }
  }
}
console.log(sum(4, 5));
