function problem1(inventory) {
    for (let car of inventory) {
        if (car.id === 33) {
            return `Car 33 is a ${car.car_year} ${car.car_make} ${car.car_model}`;
        }
    }
    return null;
}

module.exports = problem1;
