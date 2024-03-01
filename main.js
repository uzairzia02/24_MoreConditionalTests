"use strict";
//test for equality
console.log("Test for equality : Uzair === Uzair : ", "Uzair" === "Uzair");
//test for inequality
console.log("Test for inequality : Uzair as string != Umair : ", "Uzair" != "Umair");
//test for lower case
console.log("test for lower case : Imran.toLowerCase() === Imran : ", "Imran".toLowerCase() === "Imran");
//Numerical tests involving equality 
console.log("Numerical tests for equality  : 45 === 45: ", 45 === 45);
//Numerical tests involving inequality
console.log("Numerical tests for inequality : 45 !== 45: ", 45 != 55);
//greater than 
console.log("test for greater than : 45 > 35: ", 45 > 35);
// less than
console.log("test for less than : 45 < 35: ", 45 < 35);
// greater than or equal to
console.log("test for greater than or equal to : 45 >= 55: ", 45 >= 55);
// less than or equal to
console.log("test for ess than or equal to: 45 <= 34: ", 45 <= 34);
//Tests using "and" operator
console.log("Testing for and Operator: 2 is equal to 2 and 5 is less than 10: ", 2 === 2 && 5 < 10);
//Tests using  "or" operator
console.log("Testing for or Operator: 2 is equal to 4 or 5 is less than 10: ", 2 === 4 || 5 < 10);
//Test whether an item is in the array
let cars = ['Honda', 'toyota', 'suzuki'];
console.log("Test & confirm toyota in present in the aray: ", cars.includes("toyota"));
//Test  an item is not in the array
console.log("Test and confirm that Tesla in not present in the array:  ", !cars.includes("Tesla")); //! is used for not
