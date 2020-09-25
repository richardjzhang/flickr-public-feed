import { render } from '@testing-library/react';
import * as React from 'react';

import { HStack, HSpacer, VStack, VSpacer } from '.';

describe('Stack components', () => {
  test('VStack', () => {
    const tree = render(
      <VStack>
        <div>Vertical</div>
        <div>Stack</div>
      </VStack>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('VSpacer', () => {
    const tree = render(<VSpacer />);
    expect(tree).toMatchSnapshot();
  });

  test('VSpacer with prop', () => {
    const tree = render(<VSpacer height={40} />);
    expect(tree).toMatchSnapshot();
  });

  test('HStack', () => {
    const tree = render(
      <HStack>
        <div>Horizontal</div>
        <div>Stack</div>
      </HStack>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('HSpacer', () => {
    const tree = render(<HSpacer />);
    expect(tree).toMatchSnapshot();
  });

  test('HSpacer with prop', () => {
    const tree = render(<HSpacer width={40} />);
    expect(tree).toMatchSnapshot();
  });
});
