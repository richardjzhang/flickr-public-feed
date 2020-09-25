import { render } from '@testing-library/react';
import * as React from 'react';

import LoadingSpinner from '.';

test('matches snapshot', () => {
  const tree = render(<LoadingSpinner />);
  expect(tree).toMatchSnapshot();
});
