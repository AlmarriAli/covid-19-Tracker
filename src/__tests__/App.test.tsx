
import { render, screen } from '@testing-library/react';
import App from '../App';
import React from 'react';



global.React = React; // this also works for other globally available libraries



test('renders learn react link', async () => {
  render(<App />);
  const linkElement = screen.getByTestId('World Data summary');
  expect(linkElement).toBeInTheDocument();
});
