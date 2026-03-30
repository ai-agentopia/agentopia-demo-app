import React, { useState, useEffect } from 'react';

// API key is loaded from an environment variable.
// See .env.example for the required variable name.
// Never hardcode API keys or secrets directly in source files.
const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

function WeatherPage() {
  const [city, setCity] = useState('London');
  const [weather, setWeather] = useState(null);

  // BAD PRACTICE: `city` state updates on every onChange keystroke, so this
  // effect fires a new fetch request for every character typed. A debounce or
  // "fetch only on submit" approach would prevent the API from being hammered.
  useEffect(() => {
    fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then(res => res.json())
      .then(data => setWeather(data));
    // BAD PRACTICE: No .catch() — network failures and non-2xx responses are
    // silently swallowed. The user sees nothing when the request fails.
  }, [city]);

  // BAD PRACTICE: No loading state — there is no visual feedback while the
  // fetch is in flight, so the UI appears blank or stale until data arrives.

  return (
    <div>
      <h1>Weather Dashboard</h1>

      <input
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="Enter city"
      />

      {weather && (
        <div>
          <h2>{weather.name}</h2>
          {/*
            BAD PRACTICE: No null-safety on nested API response fields.
            If the API returns an error payload such as { cod: 404, message: 'city not found' },
            accessing `weather.main.temp` will throw a TypeError and crash the entire
            component tree. The missing .catch() above makes this easy to trigger —
            just type an invalid city name.
          */}
          <p>Temp: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherPage;
