import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home page hero', () => {
  render(<App />);
  expect(screen.getByText(/Multi Domain Document Classification System/i)).toBeInTheDocument();
});
