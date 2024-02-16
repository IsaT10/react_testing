import { render, screen } from '@testing-library/react';
import Greet from './Greet';

describe('Greet', () => {
  test('Greet renders correctly', () => {
    render(<Greet />);
    const text_element = screen.getByText(/hello/i);
    expect(text_element).toBeInTheDocument();
  });
});
