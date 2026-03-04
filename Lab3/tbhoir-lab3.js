// Tanuj Pravin Bhoir
// ITMD 541-01 Graduate Student

// Exercise #1
function minMaxAverage(arr) {
  const total = arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const average = arr.reduce((sum, n) => sum + n, 0) / total;
  console.log(`Total Numbers: ${total}, Min Value: ${min}, Max Value: ${max}, Average: ${average}`);
}

// Test Cases - Exercise 1
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
minMaxAverage([1, 5, 3, 5, 10, 12, 8, 6]);
minMaxAverage([100, 200, 300, 400, 500]);

// Exercise #2
function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }
  console.log(`${str}: ${count} vowels`);
  return count;
}

// Test Cases - Exercise 2
countVowels("Winter");
countVowels("JavaScript");
countVowels("Programming");

// Exercise #3
function sortNumbers(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  console.log(`Original Array: [${arr}] Sorted Array: [${sorted}]`);
  return sorted;
}

// Test Cases - Exercise 3
sortNumbers([9, 4, 6, 2]);
sortNumbers([15, 3, 99, 7, 42]);
sortNumbers([1, 100, 50, 25, 75]);

// Exercise #4
function celsiusToFahrenheit(c) {
  const celsius = parseFloat(c); // handles both number and string inputs (Graduate requirement)
  if (isNaN(celsius)) {
    console.log("Invalid input: please provide a numeric value.");
    return;
  }
  const fahrenheit = (celsius * 9 / 5) + 32;
  console.log(`${celsius.toFixed(1)} Celsius = ${fahrenheit.toFixed(1)} Fahrenheit`);
  return fahrenheit;
}

// Test Cases - Exercise 4 (numbers)
celsiusToFahrenheit(30);
celsiusToFahrenheit(0);
celsiusToFahrenheit(100);

// Graduate Requirement: string number inputs
celsiusToFahrenheit("35");
celsiusToFahrenheit("22");

// Exercise #5 (Graduate Requirement)
function sortAndIntroduce(people) {
  const sorted = [...people].sort((a, b) => a.age - b.age);
  const introductions = sorted.map(p => `${p.name} is ${p.age} and from ${p.city}`);
  introductions.forEach(intro => console.log(intro));
  return introductions;
}

// Test Cases - Exercise 5
const group1 = [
  { name: 'Alice', age: 34, city: 'Chicago' },
  { name: 'Bob', age: 22, city: 'New York' },
  { name: 'Carmen', age: 28, city: 'Los Angeles' },
  { name: 'David', age: 19, city: 'Houston' },
  { name: 'Eva', age: 45, city: 'Phoenix' }
];

const group2 = [
  { name: 'Frank', age: 31, city: 'San Diego' },
  { name: 'Grace', age: 25, city: 'Chicago' },
  { name: 'Henry', age: 40, city: 'Boston' },
  { name: 'Isla', age: 17, city: 'Seattle' },
  { name: 'Jake', age: 55, city: 'Miami' }
];

console.log("--- Group 1 ---");
sortAndIntroduce(group1);
console.log("--- Group 2 ---");
sortAndIntroduce(group2);
