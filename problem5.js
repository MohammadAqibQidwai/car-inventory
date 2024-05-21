function problem5(carYears) {
    const olderCars = [];
    for (let year of carYears) {
        if (year < 2000) {
            olderCars.push(year);
        }
    }
    return olderCars;
}

module.exports = problem5;
