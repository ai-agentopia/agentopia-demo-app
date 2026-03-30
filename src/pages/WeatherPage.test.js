// Intentionally minimal — no tests for error states or loading states
import { render, screen } from '@testing-library/react';
import WeatherPage from './WeatherPage';

test('renders weather dashboard heading', () => {
  render(<WeatherPage />);
  expect(screen.getByText('Weather Dashboard')).toBeInTheDocument();
});
// No test for: loading state, error state, failed fetch, missing data fields
