let numbers = [15, 25, 35, 45, 55, 65];

let sumUsingForEach = 0;

numbers.forEach(num => {
    sumUsingForEach += num;
});

console.log(sumUsingForEach)

let sumUsingReduce = numbers.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(sumUsingReduce);