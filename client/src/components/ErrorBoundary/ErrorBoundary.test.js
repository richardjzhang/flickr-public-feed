import { render } from '@testing-library/react';
import * as React from 'react';

import ErrorBoundary from '.';

test('matches snapshot', () => {
  const tree = render(<ErrorBoundary>App</ErrorBoundary>);
  expect(tree).toMatchSnapshot();
});
