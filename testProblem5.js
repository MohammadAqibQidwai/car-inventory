const problem4 = require('../problem4');
const problem5 = require('../problem5');
const inventory = require('../inventory');

const carYears = problem4(inventory);
const olderCars = problem5(carYears);
console.log(olderCars.length);
