/* eslint-disable jest/no-disabled-tests */
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);

  const headingElement = screen.getByText(/hello, world!/i);
  expect(headingElement).toBeInTheDocument();

  const paragraphElement = screen.getByText(/welcome to my react app!/i);
  expect(paragraphElement).toBeInTheDocument();
});
