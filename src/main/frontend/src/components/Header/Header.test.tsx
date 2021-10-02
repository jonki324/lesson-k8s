import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Test', () => {
  it('render test', () => {
    render(<Header />);
    const actual = screen.getByText(/MyApp/i);
    expect(actual).toBeInTheDocument();
  });
});
