var person_name : string = "aYYaN";

console.log("In lowercase : ");
//convert name in lower case
console.log(person_name.toLowerCase());

console.log("In uppercase : ");
//convert name in upper case
console.log(person_name.toUpperCase());

console.log("In tittlecase : ");
//convert name in title case
console.log(person_name.charAt(0).toUpperCase() + person_name.slice(1).toLowerCase());


