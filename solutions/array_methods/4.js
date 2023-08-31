const fruits = [
  { name: "Apple", color: "Red", price: 1.5 },
  { name: "Banana", color: "Yellow", price: 0.5 },
  { name: "Orange", color: "Orange", price: null },
  { name: "Grapes", color: "Purple", price: 3 },
  { name: "Watermelon", color: "Green", price: 4 },
  { name: "Strawberry", color: "Red", price: 2.5 },
  { name: "Mango", color: "Yellow", price: null },
  { name: "Pineapple", color: "Yellow", price: null },
  { name: "Cherry", color: "Red", price: 2 },
  { name: "Blueberry", color: "Blue", price: 2.8 },
];

const availableFruits = fruits.filter(fruit => fruit.price !== null);

const updatedPrice = availableFruits.map(fruit => {
  return {...fruit, price : fruit.price * 2};
});

updatedPrice.forEach(fruit => console.log(`${fruit.name} : $ ${fruit.price}`));

const orderPrice = updatedPrice.reduce((acc, curr) => {
  return acc + curr.price;
}, 0)
console.log("Total updated Price: " + orderPrice)