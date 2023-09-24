let mostExpensiveItem = function (items) {
  // set up maxCost and mostExpensive and initialise
  let maxCost = 0;
  let mostExpensive = null;

  // loop around array
  for (const item of items) {
    // calculate cost of current item (price*stock)
    const cost = item.price * item.stock;
    // compare current item cost against maxCost
    if (cost > maxCost) {
      maxCost = cost;
      mostExpensive = item;
    }
  }

  // if cost > maxCost
  //      set maxCost to cost
  //      set mostExpensive to item
  // endif
  //endloop

  // return maxCost, mostExpensive
  return mostExpensive;
};

// Test data
const items = [
  { item: "irn bru", price: 3.25, stock: 50 },
  { item: "fanta", price: 3.98, stock: 45 },
  { item: "diet coke", price: 4.4, stock: 38 },
  { item: "7up", price: 3.99, stock: 42 },
];

console.log(mostExpensiveItem(items));
