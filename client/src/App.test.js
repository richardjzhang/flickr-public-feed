import { render } from '@testing-library/react';
import React from 'react';

import App from './App';

test('renders App', () => {
  const { getByTestId } = render(<App />);
  const logo = getByTestId('Logo-svg');
  const searchBar = getByTestId('PublicFeed-search-bar');
  expect(logo).toBeInTheDocument();
  expect(searchBar).toBeInTheDocument();
});
