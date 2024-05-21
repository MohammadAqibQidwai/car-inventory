function problem2(inventory) {
    if (inventory.length === 0) return null;
    const lastCar = inventory[inventory.length - 1];
    return `Last car is a ${lastCar.car_make} ${lastCar.car_model}`;
}

module.exports = problem2;
