import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('App test render header', () => {
  render(<App />);
  const actual = screen.getByText(/Memo List/i);
  expect(actual).toBeInTheDocument();
});
