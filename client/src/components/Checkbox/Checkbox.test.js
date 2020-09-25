import { render } from '@testing-library/react';
import * as React from 'react';

import Checkbox from '.';

describe('Checkbox', () => {
  test('renders correctly with value of false', () => {
    const tree = render(
      <Checkbox value={false} onChange={() => {}} text="Checkbox text" />,
    );
    expect(tree).toMatchSnapshot();

    const checkboxText = tree.queryByText('Checkbox text');
    expect(checkboxText).toBeInTheDocument();
  });

  test('renders correctly with value of true', () => {
    const tree = render(
      <Checkbox value={true} onChange={() => {}} text="Checkbox text" />,
    );
    expect(tree).toMatchSnapshot();

    const checkboxText = tree.queryByText('Checkbox text');
    expect(checkboxText).toBeInTheDocument();
  });
});
