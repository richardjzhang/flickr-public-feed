import { render } from '@testing-library/react';
import * as React from 'react';

import MagnifyingGlass from '.';

describe('MagnifyingGlass', () => {
  test('renders MagnifyingGlass correctly', () => {
    const tree = render(<MagnifyingGlass />);
    expect(tree).toMatchSnapshot();
  });

  test('renders MagnifyingGlass correctly with size prop', () => {
    const tree = render(<MagnifyingGlass size={40} />);
    expect(tree).toMatchSnapshot();
  });
});
