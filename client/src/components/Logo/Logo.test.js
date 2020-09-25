import { render } from '@testing-library/react';
import * as React from 'react';

import Logo from '.';

describe('Logo', () => {
  test('renders correctly', () => {
    const tree = render(<Logo />);
    expect(tree).toMatchSnapshot();
  });

  test('renders correctly with height and width props', () => {
    const tree = render(<Logo height={200} width={660} />);
    expect(tree).toMatchSnapshot();
  });
});
