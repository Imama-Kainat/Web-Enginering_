# Event Registration Platform

A web application that allows event organizers to register their events by pinning their locations on a Google Map.

## Features

- Event registration form with Google Maps integration
- Automatic capturing of latitude and longitude on map click
- MongoDB database for storing event information
- RESTful API for event management
- Event viewing page with interactive map markers

## Prerequisites

- Node.js (v14+)
- MongoDB (running locally or accessible via connection string)
- Google Maps JavaScript API Key

## Setup Instructions

1. Clone the repository
   ```
   git clone <repository-url>
   cd event-registration-platform
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Configure Google Maps API Key
   - Go to the [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project (or select an existing one)
   - Enable the Maps JavaScript API
   - Create an API key
   - Replace `YOUR_API_KEY` in `public/index.html` and `public/events.html` with your actual API key

4. Configure MongoDB
   - Make sure MongoDB is running
   - Update the connection string in `server.js` if needed

5. Start the application
   ```
   npm start
   ```

6. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## API Endpoints

- `GET /api/events` - Get all events
- `GET /api/events/:id` - Get a specific event by ID
- `POST /api/events` - Create a new event

## Project Structure

- `public/` - Static files (HTML, CSS, client-side JavaScript)
- `models/` - MongoDB schema definitions
- `server.js` - Express server and API endpoints

## Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- Database: MongoDB with Mongoose
- Maps: Google Maps JavaScript API 