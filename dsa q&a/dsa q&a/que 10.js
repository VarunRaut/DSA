//Q10. Write a program to find the smallest number using a stack.



var numbers = [2, 4, 9, 2, 0, 16, 24];

var sorted = numbers.slice().sort(function(a, b) {
  return a - b;
});

var smallest = sorted[0],                      
    secondSmallest = sorted[1],                
    secondLargest = sorted[sorted.length - 2], 
    largest  = sorted[sorted.length - 1];

console.log('Smallest: ' + smallest);
console.log('Second Smallest: ' + secondSmallest);
console.log('Second Largest: ' + secondLargest);
console.log('Largest: ' + largest);
