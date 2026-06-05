import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app successfully', () => {
  render(<App />);
  // Check if some basic content is rendered, for example, the language switcher buttons
  const enButtons = screen.getAllByText(/EN/i);
  const ruButtons = screen.getAllByText(/РУ/i);
  expect(enButtons.length).toBeGreaterThan(0);
  expect(ruButtons.length).toBeGreaterThan(0);
});
