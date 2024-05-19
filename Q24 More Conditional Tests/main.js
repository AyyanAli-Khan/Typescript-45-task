"use strict";
//     =======================================  Tests for equality and inequality with strings ===================================
let language = "Urdu";
console.log("Testing equality and inquality with strings :");
console.log(language == "urdu"); //false
console.log(language.toLowerCase() == "urdu"); //true
console.log(language == "Urdu"); //true
console.log(language.toUpperCase() == "urdu".toUpperCase()); //true
console.log(language.charAt(0) == "u", "\n"); // false
//  Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Testing equality and inequality, greater than and less than, greater than or equal to, and less than or equal to with numbers", "\n");
let firstNum = 20;
let secondNum = 13;
let thirdNum = 20;
console.log("Is firstNum is greater than  secondNum | predict  true");
console.log(firstNum > secondNum);
console.log("Is firstNum equals to secondNum | predict  false");
console.log(firstNum == secondNum);
console.log("Is thirdNum greater than or equals to secondNum | predict  true");
console.log(thirdNum >= secondNum);
console.log("Is firstNum less than or equals to secondNum | predict  false");
console.log(firstNum <= secondNum);
console.log("secondNum greater than firstNum | predict  false");
console.log(secondNum > firstNum);
console.log("Is firstNum greater than secondNum | predict  true");
console.log(secondNum < firstNum);
console.log("Is thirdNum equals to secondNum | predict  true");
console.log(thirdNum == firstNum);
console.log("Is thirdNum equals to secondNum | predict  false");
console.log(thirdNum == secondNum);
console.log("Is thirdNum equals to secondNum | predict  true");
console.log(thirdNum == firstNum, "\n");
//==================================================== Tests using "and" and "or" operators ===========================================
console.log("Testing 'or' 'and' operator");
let country = "Pakistan";
console.log(country == "Pakistan" && country.toLowerCase() == "PAKISTaN".toLowerCase()); //true because both conditions are true
console.log(firstNum > secondNum && secondNum == firstNum); //false
console.log(country == "pakistan" || country.toLowerCase() == "PAKISTaN".toLowerCase()); //true because one conditions is true
console.log(firstNum > secondNum || secondNum == firstNum, "\n"); //true
//=================================================== Test whether an item is in or not in  array =================================
console.log("Testing with items of array: ");
let books = ["engish", "urdu", "science", "computer"];
console.log("Is 'urdu' is in books? | predict  true");
console.log(books.includes("urdu"));
console.log("Is 'maths' is in books? | predict  false");
console.log(books.includes("maths"));
console.log("Is 'science' is in books? | predict  true");
console.log(books.includes("science"));
console.log("Is 'chemistry' is not in books?");
console.log(!books.includes("chemistry"));
console.log("Is 'sindhi' is not in books?");
console.log(!books.includes("sindhi"));
console.log("Is 'history' is not in books?");
console.log(!books.includes("history"));
