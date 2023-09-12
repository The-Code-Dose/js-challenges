const ingredients = [
  { name: "Dough", quantity: 1, price: 2.5 },
  { name: "Tomato Sauce", quantity: 1, price: 1.0 },
  { name: "Cheese", quantity: 2, price: 3.0 },
  { name: "Pepperoni", quantity: 10, price: 2.5 },
  { name: "Mushrooms", quantity: 8, price: 1.5 },
  { name: "Green Peppers", quantity: 5, price: 1.0 },
  { name: "Onions", quantity: 4, price: 0.75 },
  { name: "Olives", quantity: 6, price: 1.25 },
  { name: "Bacon", quantity: 3, price: 2.0 },
  { name: "Sausage", quantity: 5, price: 2.5 },
];

const initial = 0;

const totalCost = ingredients.reduce((sum, current) => {
  return sum + current.price;
}, initial);
console.log(totalCost);
