function analyzeAsteroidData(asteroidDiameters) {
    if (asteroidDiameters.length === 0) {
        console.log("No asteroid data to analyze.");
        return { total: 0, average: 0 };
    }

    const total = asteroidDiameters.length;
    const sum = asteroidDiameters.reduce((acc, diameter) => acc + diameter, 0);
    const average = sum / total;

    console.log(`Total asteroids: ${total}`);
    console.log(`Average diameter: ${average.toFixed(3)} km`);

    return { total, average };
}

module.exports = analyzeAsteroidData;
