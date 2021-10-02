import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';

describe('Layout Test', () => {
  it('render test', () => {
    render(<Layout>test</Layout>);
    const actual = screen.getByText(/test/i);
    expect(actual).toBeInTheDocument();
  });
});
