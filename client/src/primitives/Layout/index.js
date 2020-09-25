// @flow strict
import styled from '@emotion/styled';
import * as React from 'react';
import { PAGE_BACKGROUND_COLOR } from 'src/styles';

const LayoutStyle = styled.div<{}>({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: PAGE_BACKGROUND_COLOR,
  minHeight: '100vh',
});

export default function Layout({ children }: {| children: React$Node |}) {
  return <LayoutStyle>{children}</LayoutStyle>;
}
