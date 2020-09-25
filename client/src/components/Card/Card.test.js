import { render } from '@testing-library/react';
import * as React from 'react';

import { Card, CardHeader, CardThumbnail, CardContent } from '.';

const placeholderThumbnail = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="300"
    height="150"
    viewBox="0 0 300 150"
  >
    <rect fill="#ddd" width="300" height="150" />
    <text
      fill="rgba(0,0,0,0.5)"
      fontFamily="sans-serif"
      fontSize="30"
      dy="10.5"
      fontWeight="bold"
      x="50%"
      y="50%"
      textAnchor="middle"
    >
      300×150
    </text>
  </svg>
);

describe('Card components', () => {
  test('renders Card correctly', () => {
    const tree = render(<Card>Card</Card>);
    expect(tree).toMatchSnapshot();

    const cardText = tree.queryByText('Card');
    expect(cardText).toBeInTheDocument();
  });

  test('renders CardHeader correctly', () => {
    const tree = render(<CardHeader>Card Header</CardHeader>);
    expect(tree).toMatchSnapshot();

    const cardHeaderText = tree.queryByText('Card Header');
    expect(cardHeaderText).toBeInTheDocument();
  });

  test('renders CardThumbnail correctly', () => {
    const tree = render(
      <CardThumbnail
        src={placeholderThumbnail}
        height={64}
        width={64}
        alt="Card thumbnail"
      />,
    );
    expect(tree).toMatchSnapshot();
  });

  test('renders CardContent correctly', () => {
    const tree = render(<CardContent>Card Content</CardContent>);
    expect(tree).toMatchSnapshot();

    const cardContentText = tree.queryByText('Card Content');
    expect(cardContentText).toBeInTheDocument();
  });
});
