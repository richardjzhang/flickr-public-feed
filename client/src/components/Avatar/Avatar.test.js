import { render } from '@testing-library/react';
import * as React from 'react';

import Avatar from '.';

test('renders Avatar correctly', () => {
  const tree = render(<Avatar>A</Avatar>);
  expect(tree).toMatchSnapshot();

  const avatarLetter = tree.queryByText('A');
  expect(avatarLetter).toBeInTheDocument();
});
