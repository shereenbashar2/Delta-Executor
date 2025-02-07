// import fetch from 'node-fetch';

const API_KEY = 'y98bAL8B5tiXaniuE17hp4XW8NkOEgASqPpSSd3r'; // Replace with your actual NASA API Key

async function fetchAsteroidData() {
    try {
        // Get today's date in YYYY-MM-DD format
        const today = new Date().toISOString().split('T')[0];

        // Get date 7 days later
        const sevenDaysLater = new Date();
        sevenDaysLater.setDate(sevenDaysLater.getDate() + 7);
        const endDate = sevenDaysLater.toISOString().split('T')[0];

        // Construct API URL
        const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${endDate}&api_key=${API_KEY}`;

        // Fetch data from NASA API
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        const asteroidDiameters = [];

        // Extract asteroid data
        for (const date in data.near_earth_objects) {
            const asteroids = data.near_earth_objects[date];
            asteroids.forEach(asteroid => {
                asteroidDiameters.push(asteroid.estimated_diameter.kilometers.estimated_diameter_max);
            });
        }

        console.log("Fetched Asteroid Diameters:", asteroidDiameters);
        return asteroidDiameters.slice(0, 10); // Ensure at least 10 values
    } catch (error) {
        console.error("Error fetching asteroid data:", error.message);
        return [];
    }
}

module.exports = fetchAsteroidData;
