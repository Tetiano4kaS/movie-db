import React from 'react';
import { render, screen } from '@testing-library/react';
import MainContainer from './components/MainContainer/MainContainer';

test('renders learn react link', () => {
  render(<MainContainer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
