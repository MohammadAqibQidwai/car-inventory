function problem3(inventory) {
    const carModels = [];
    for (let car of inventory) {
        carModels.push(car.car_model);
    }
    carModels.sort();
    return carModels;
}

module.exports = problem3;
