import { render, screen } from '@testing-library/react';
import Portfolio from './Main';

test('renders learn react link', () => {
  render(<Portfolio />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
