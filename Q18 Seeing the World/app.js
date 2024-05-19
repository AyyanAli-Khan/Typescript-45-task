"use strict";
let places_name = ["Swiss Alps", "Hunza Valley", "Singspore", "Malaysia", "Qatar"];
console.log("Array in original condition : ", places_name);
// sort array in alphabetical order
console.log("Array in alphabetical order :", [...places_name].sort());
console.log("Array in original condition : ", places_name);
// reversed the sorted array 
console.log("Array in reverse alphabetical order :", [...places_name].reverse());
console.log("Array in original condition : ", places_name);
places_name.reverse();
console.log("Reverse order of Array : ", places_name);
places_name.reverse();
console.log("Array in back to its original condition : ", places_name);
places_name.sort();
console.log("Array in alphabetical order :", places_name);
places_name.reverse();
console.log("Array in reverse alphabetical order :", places_name);
