// @flow strict

import styled from '@emotion/styled';
import { colors, fontSize } from 'src/styles';

const Avatar = styled.div<{}>({
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

export default Avatar;
