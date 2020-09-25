// @flow strict
import styled from '@emotion/styled';
import * as React from 'react';
import { colors, fontSize } from 'src/styles';

const AvatarStyle = styled.div<{}>({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
  backgroundColor: colors.peachPink,
  color: colors.white,
  fontSize: fontSize.medium,
  fontWeight: 600,
  flexShrink: 0,
  borderRadius: '50%',
});

export default function Avatar({ children }: {| children: React$Node |}) {
  return <AvatarStyle>{children}</AvatarStyle>;
}
