import React from 'react';
import { render, screen } from '@testing-library/react';
import PageHeader from './PageHeader';

describe('PageHeader Test', () => {
  it('render test', () => {
    render(<PageHeader>test</PageHeader>);
    const actual = screen.getByText(/test/i);
    expect(actual).toBeInTheDocument();
  });
});
