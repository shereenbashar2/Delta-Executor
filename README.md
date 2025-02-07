# 🚀 Asteroid Data Retrieval and Analysis

This project fetches and analyzes asteroid data from NASA's Near Earth Object Web Service (NeoWs) API. The activity is designed for a team-based collaborative workflow using Git.

## 📌 Project Overview

- **Fetch asteroid data** using JavaScript `fetch` with `async/await`
- **Analyze the retrieved data** for insights
- **Collaborate using Git** to manage workflow effectively

---

## 🔑 Getting Started

1. **Get an API Key**  
   - Visit [NASA API](https://api.nasa.gov/) and generate your API Key.
   - You’ll receive an email with your API Key.

2. **Set Up the Repository**  
   - One team member should create a repository.
   - Ensure the repository includes:
     - `package.json` (for dependencies)
     - `.gitignore` (to ignore `node_modules`)

---

## 🏗️ Team Collaboration

The team will be divided into **two sub-groups**:

### 1️⃣ Fetching Data  
📌 **Task:** Retrieve asteroid data from NASA's API.

- Create a file: `asteroidFetcher.js`
- Fetch asteroid data from:
https://api.nasa.gov/neo/rest/v1/feed?start_date=$today&end_date=$sevenDaysLater&api_key=API_KEY
- Extract the **diameters (km)** of asteroids approaching Earth in the next 7 days.
- Ensure error handling for API failures.

### 2️⃣ Data Analysis  
📌 **Task:** Analyze the fetched asteroid data.

- Create a file: `asteroidAnalyzer.js`
- Compute:
- **Total count** of asteroids.
- **Average diameter** of asteroids.
- Log the results.

---

## 🚀 Branching & Workflow

- Each sub-group creates **feature branches**:
feature/fetching_data feature/analyze_stats
- Merge work into the `main` branch after completion.

---

## 🔗 Final Integration

After merging, create a **main file (`index.js`)** to:

1. Import functions from `asteroidFetcher.js` & `asteroidAnalyzer.js`
2. Run the fetch function and pass the data to the analyzer
3. Display the final results

---

## 🏆 Bonus Challenge  

Enhance the project by fetching and analyzing additional asteroid data attributes!

---

Happy coding! 🚀🌍


