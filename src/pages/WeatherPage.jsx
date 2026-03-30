import React, { useState, useEffect } from 'react';

// API keys loaded from environment variables — never hardcode secrets in source
// See .env.example for required variable names
const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const GEO_API_KEY = process.env.NEXT_PUBLIC_GEO_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

function WeatherPage() {
  const [city, setCity] = useState('London');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    setLoading(true);
    setError(null);

    fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        return res.json();
      })
      .then(data => {
        if (!cancelled) {
          setWeather(data);
          setLoading(false);
        }
      })
      .catch(err => {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => { cancelled = true; };
  }, [city]);

  return (
    <div>
      <h1>Weather Dashboard</h1>

      <input
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="Enter city"
      />

      {loading && <p>Loading weather data...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {!loading && !error && weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temp: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

function GeoLookup({ coords }) {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    setLoading(true);
    setError(null);

    fetch(`https://api.geocode.io/v1.7/reverse?q=${coords}&api_key=${GEO_API_KEY}`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        return res.json();
      })
      .then(data => {
        if (!cancelled) {
          setLocation(data);
          setLoading(false);
        }
      })
      .catch(err => {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => { cancelled = true; };
  }, [coords]);

  return (
    <div>
      {loading && <p>Looking up location...</p>}
      {error && <p style={{ color: 'red' }}>Geo error: {error}</p>}
      {!loading && !error && location && (
        <p>Address: {location.results[0].formatted_address}</p>
      )}
    </div>
  );
}

export default WeatherPage;
export { GeoLookup };
