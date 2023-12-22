import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HelloWorld from './HelloWorld';

describe('<HelloWorld />', () => {
  test('it should mount', () => {
    render(<HelloWorld />);
    
    const helloWorld = screen.getByTestId('HelloWorld');

    expect(helloWorld).toBeInTheDocument();
  });
});