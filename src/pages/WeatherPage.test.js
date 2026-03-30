// Intentionally minimal — demonstrates the impact of missing error/loading/null-safety patterns.
import { render, screen } from '@testing-library/react';
import WeatherPage from './WeatherPage';

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({}),
    })
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('renders weather dashboard heading', () => {
  render(<WeatherPage />);
  expect(screen.getByText('Weather Dashboard')).toBeInTheDocument();
});

// Tests intentionally absent to illustrate the cost of missing coverage:
//
//   missing: no loading-state test
//     → users see a blank UI while the fetch is in flight; regressions are undetectable
//
//   missing: no failed-fetch test
//     → the silent .catch() omission is invisible — broken network goes undetected
//
//   missing: no error-payload null-safety test
//     → a 404 API response (e.g. { cod: 404, message: 'city not found' }) crashes
//       the component tree by dereferencing weather.main.temp on a non-object;
//       a test here would have caught this immediately
