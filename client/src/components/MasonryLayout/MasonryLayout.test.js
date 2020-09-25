import { render } from '@testing-library/react';
import * as React from 'react';

import MasonryLayout from '.';

describe('MasonryLayout', () => {
  test('renders correctly', () => {
    const tree = render(
      <MasonryLayout gap={20} numberOfCols={4} colWidth={300}>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </MasonryLayout>,
    );
    expect(tree).toMatchSnapshot();

    // There should be four columns present
    const firstColumn = tree.getByTestId('MasonryLayout-Column-0');
    const secondColumn = tree.getByTestId('MasonryLayout-Column-1');
    const thirdColumn = tree.getByTestId('MasonryLayout-Column-2');
    const fourthColumn = tree.getByTestId('MasonryLayout-Column-3');

    expect(firstColumn).toBeInTheDocument();
    expect(secondColumn).toBeInTheDocument();
    expect(thirdColumn).toBeInTheDocument();
    expect(fourthColumn).toBeInTheDocument();
  });
});
