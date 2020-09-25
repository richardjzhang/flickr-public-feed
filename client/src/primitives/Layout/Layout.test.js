import { render } from '@testing-library/react';
import * as React from 'react';

import Layout from '.';

test('matches snapshot', () => {
  const tree = render(<Layout>My App</Layout>);
  expect(tree).toMatchSnapshot();

  const layoutContent = tree.queryByText('My App');
  expect(layoutContent).toBeInTheDocument();
});
