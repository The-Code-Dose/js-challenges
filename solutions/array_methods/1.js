let numbers = [15, 25, 35, 45, 55, 65];

let sumUsingForEach = 0;

numbers.forEach(num => sumUsingForEach += num);

console.log(sumUsingForEach)

const sumUsingReduce = numbers.reduce((acc, curr) => acc + curr);

console.log(sumUsingReduce);
