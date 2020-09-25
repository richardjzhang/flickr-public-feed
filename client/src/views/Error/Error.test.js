import { render } from '@testing-library/react';
import React from 'react';

import Error from '.';

test('renders Error', () => {
  const { queryByText } = render(<Error />);
  const errorMessage = queryByText(
    'Something went wrong! Please try refreshing the page or contacting support.',
  );
  expect(errorMessage).toBeInTheDocument();
});
