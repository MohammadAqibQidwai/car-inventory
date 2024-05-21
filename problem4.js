function problem4(inventory) {
    const carYears = [];
    for (let car of inventory) {
        carYears.push(car.car_year);
    }
    return carYears;
}

module.exports = problem4;
