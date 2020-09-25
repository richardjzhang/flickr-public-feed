// @flow strict
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { VStack } from 'src/components/Stack';

export default function Main({ children }: {| children: React$Node |}) {
  return (
    <VStack
      css={{
        flexGrow: 1,
        padding: 32,
      }}
    >
      {children}
    </VStack>
  );
}
