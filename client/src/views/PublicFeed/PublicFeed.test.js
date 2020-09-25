import { render } from '@testing-library/react';
import React from 'react';

import PublicFeed from '.';

test('renders PublicFeed', () => {
  const { getByTestId } = render(<PublicFeed />);
  const logo = getByTestId('Logo-svg');
  const searchBar = getByTestId('PublicFeed-search-bar');
  expect(logo).toBeInTheDocument();
  expect(searchBar).toBeInTheDocument();
});
