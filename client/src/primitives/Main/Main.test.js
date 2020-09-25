import { render } from '@testing-library/react';
import * as React from 'react';

import Main from '.';

test('matches snapshot', () => {
  const tree = render(<Main>My App</Main>);
  expect(tree).toMatchSnapshot();

  const mainContent = tree.queryByText('My App');
  expect(mainContent).toBeInTheDocument();
});
