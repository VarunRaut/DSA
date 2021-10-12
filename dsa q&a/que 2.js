//Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

var myArray = [20, 40, 80, 100];
var revMyArr = [].concat(myArray).reverse();
console.log(revMyArr);
// [100, 80, 40, 20]