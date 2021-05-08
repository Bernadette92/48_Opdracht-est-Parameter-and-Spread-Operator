// rest parameter
const optellen = function (eerste, ...args) {
  return args.reduce((acc, item) => {
    return acc + item;
  }, eerste);
};

console.log(optellen(1, 2, 3, 4, 5, 6)); // verwachte uitkomst: 21

// spread operator
const optel = function (...cijfers) {
  return cijfers.reduce((acc, item) => {
    return acc + item;
  });
};

const cijfers = [1, 2, 3];

console.log(optel(...cijfers));
// verwachte uitkomst: 6
