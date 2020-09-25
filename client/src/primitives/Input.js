// @flow strict
import styled from '@emotion/styled';
import * as React from 'react';
import { BASE_UNIT, colors, fontSize } from 'src/styles';

const INPUT_HEIGHT = 50;
const ICON_SIZE = 20;
const InputStyle = styled.input<{}>({
  border: `1px solid ${colors.grey90}`,
  borderRadius: 32,
  boxSizing: 'border-box',
  color: colors.grey,
  fontSize: fontSize.medium,
  height: INPUT_HEIGHT,
  paddingLeft: ICON_SIZE,
  paddingRight: 2 * BASE_UNIT,
  width: '100%',
  maxWidth: 600,
  transition: 'border-color 0.25s ease',

  ':focus': {
    borderColor: '#1e90ff',
    outline: 'none',
  },

  '::placeholder': {
    color: colors.grey90,
  },
});

export default function Input({
  placeholder,
  value,
  onChange,
  ...rest
}: {|
  placeholder: string,
  value: string,
  onChange: () => void,
|}) {
  return (
    <InputStyle
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
}
