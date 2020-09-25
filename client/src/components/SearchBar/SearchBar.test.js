import { render } from '@testing-library/react';
import * as React from 'react';

import SearchBar from '.';

describe('SearchBar', () => {
  test('matches snapshot', () => {
    const tree = render(
      <SearchBar value="" onChange={() => {}} dataTestId="search-bar-id" />,
    );
    expect(tree).toMatchSnapshot();
  });

  test('matches snapshot', () => {
    const tree = render(
      <SearchBar
        value="My search value"
        onChange={() => {}}
        dataTestId="search-bar-id"
      />,
    );
    expect(tree).toMatchSnapshot();
  });
});
