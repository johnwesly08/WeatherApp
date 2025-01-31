# Weather App 🌤️

This is a weather forecasting application built using the MERN stack (MongoDB, Express, React, Node.js). The app fetches real-time weather data and presents it to the user in a clean, responsive interface, allowing users to search for weather information by city and see details like temperature, humidity, wind speed, and more

## Features

- 🌍 Search for weather information by city
- 📅 View current weather conditions
- 🌡️ Display temperature, humidity, and wind speed
- 🖥️ Responsive design compatible with mobile and desktop
- 🌦️ Displays weather icons and condition summaries
- 🚀 Built with modern technologies: React for the frontend, Express and Node.js for the backend, and MongoDB for data storage

## Tech Stack

- **Frontend**: React.js
- **Backend**: Express.js, Node.js
- **Database**: MongoDB (for user preferences or historical data)
- **API**: Weather API (such as OpenWeatherMap, WeatherStack, or similar)

## Installation

### Prerequisites
- Node.js and npm installed
- MongoDB installed or access to a MongoDB Atlas cluster
- API key from the weather API provider

### Steps

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/weather-app.git
    cd weather-app
    ```

2. **Set up the backend**:
    - Navigate to the `server` directory:
      ```bash
      cd server
      ```
    - Install dependencies:
      ```bash
      npm install
      ```
    - Create a `.env` file and add the following:
      ```
      PORT=5000
      MONGO_URI=your_mongodb_connection_string
      WEATHER_API_KEY=your_weather_api_key
      ```
    - Start the backend server:
      ```bash
      npm run start
      ```

3. **Set up the frontend**:
    - Navigate to the `client` directory:
      ```bash
      cd ../client
      ```
    - Install dependencies:
      ```bash
      npm install
      ```
    - Start the frontend development server:
      ```bash
      npm run start
      ```

4. **Access the app**:
   - Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Project Structure

```plaintext
weather-app/
├── client/             # React frontend
│   ├── public/         # Static assets
│   ├── src/            # React components, pages, and styles
│   └── .env            # Frontend environment variables
├── server/             # Node.js and Express backend
│   ├── models/         # MongoDB models
│   ├── routes/         # Express routes
│   └── .env            # Backend environment variables
└── README.md
