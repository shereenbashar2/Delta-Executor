const fetchAsteroidData = require('./asteroidFetcher');
const analyzeAsteroidData = require('./asteroidAnalyzer');

async function main() {
    const asteroidDiameters = await fetchAsteroidData();
    analyzeAsteroidData(asteroidDiameters);
}

main();
