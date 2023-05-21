var fruits = ["apple", "banana", "orange", "grape", "mango", 100402, true];
// console.log(fruits.length);

var fruit1 =[1,2,3,4,5,6,7,fruits];
console.log(fruit1);
console.log(fruit1.length);
// console.log(typeof(fruits));

//insert another element in js
fruits.push("Papaya");
fruits.push("Litchi");
console.log(fruits);

//pop element
fruits.pop();
console.log(fruits);

//concatination
var fruit2= ["aam","seb","chiku"];

var fruit_total=fruit1.concat(fruit2);
console.log(fruit_total);
