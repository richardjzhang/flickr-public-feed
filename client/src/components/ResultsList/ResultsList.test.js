import { render } from '@testing-library/react';
import * as React from 'react';

import ResultsList from '.';
import { mockResults } from './mock';

describe('renders correctly', () => {
  test('renders no results when there is no search', () => {
    const tree = render(<ResultsList searchTerm="" results={[]} />);
    expect(tree).toMatchSnapshot();

    // There should be no columns present
    const firstColumn = tree.queryByTestId('MasonryLayout-Column-0');
    expect(firstColumn).not.toBeInTheDocument();

    // Empty list of results should return no results
    const noResults = tree.getByTestId('ResultsList-no-results');
    expect(noResults).toBeInTheDocument();
  });

  test('renders no results when search returns nothing', () => {
    const tree = render(<ResultsList searchTerm="weofiwe" results={[]} />);
    expect(tree).toMatchSnapshot();

    // There should be no columns present
    const firstColumn = tree.queryByTestId('MasonryLayout-Column-0');
    expect(firstColumn).not.toBeInTheDocument();

    // Empty list of results should return no results
    const noResults = tree.getByTestId('ResultsList-no-results');
    expect(noResults).toBeInTheDocument();
  });

  test('renders results when search returns something', () => {
    const tree = render(
      <ResultsList searchTerm="super" results={mockResults} />,
    );
    expect(tree).toMatchSnapshot();

    // There should be at least 1 column present
    const firstColumn = tree.getByTestId('MasonryLayout-Column-0');
    expect(firstColumn).toBeInTheDocument();

    // No results should not be in the document
    const noResults = tree.queryByTestId('ResultsList-no-results');
    expect(noResults).not.toBeInTheDocument();
  });
});
