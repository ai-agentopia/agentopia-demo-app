import React, { useState, useEffect } from 'react';

// API keys stored directly in code (bad practice)
const API_KEY = 'sk-weather-abc123secretkey9999';
const GEO_API_KEY = 'geo-XYZ987supersecret0000';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

function WeatherPage() {
  const [city, setCity] = useState('London');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // No async/await — raw promise chain with no error handling
    fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then(res => res.json())
      .then(data => {
        setWeather(data);
      });
    // No .catch() — errors are silently swallowed
  }, [city]);

  // No loading state — just renders null while data is absent
  return (
    <div>
      <h1>Weather Dashboard</h1>

      <input
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="Enter city"
      />

      {/* No loading indicator at all */}
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temp: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

// Second fetch call — also bad, using another hardcoded key
function GeoLookup({ coords }) {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    fetch(`https://api.geocode.io/v1.7/reverse?q=${coords}&api_key=${GEO_API_KEY}`)
      .then(res => res.json())
      .then(data => setLocation(data));
    // Again: no .catch, no loading state
  }, [coords]);

  return (
    <div>
      {location && <p>Address: {location.results[0].formatted_address}</p>}
    </div>
  );
}

export default WeatherPage;
export { GeoLookup };
