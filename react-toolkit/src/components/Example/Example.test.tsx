import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Example from './Example';

describe('<Example />', () => {
  test('it should mount', () => {
    render(<Example />);
    
    const example = screen.getByTestId('Example');

    expect(example).toBeInTheDocument();
  });
});