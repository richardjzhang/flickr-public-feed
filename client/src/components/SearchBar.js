// @flow strict
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import MagnifyingGlass from 'src/icons/MagnifyingGlass';
import { BASE_UNIT, colors, fontSize } from 'src/styles';

const InputWrapper = styled.div<{}>({
  position: 'relative',
  width: '100%',
  maxWidth: 600,
});

const INPUT_HEIGHT = 50;
const ICON_SIZE = 20;
const Input = styled.input<{}>({
  border: `2px solid ${colors.grey90}`,
  borderRadius: 32,
  boxSizing: 'border-box',
  color: colors.grey,
  fontSize: fontSize.medium,
  height: INPUT_HEIGHT,
  paddingLeft: 3 * ICON_SIZE,
  paddingRight: 5 * BASE_UNIT,
  width: '100%',
  transition: 'border-color 0.25s ease',

  ':focus': {
    borderColor: '#1e90ff',
    outline: 'none',
  },

  '::placeholder': {
    color: colors.grey90,
  },
});

const IconWrapper = styled.div<{}>({
  position: 'absolute',
  left: ICON_SIZE,
  top: (INPUT_HEIGHT - ICON_SIZE) / 2,
});

export default function SearchBar({
  value,
  onChange,
}: {|
  value: string,
  onChange: (string) => void,
|}) {
  return (
    <InputWrapper>
      <IconWrapper>
        <MagnifyingGlass size={ICON_SIZE} />
      </IconWrapper>
      <Input
        value={value}
        onChange={(e) => onChange(e != null ? e.target.value : '')}
        placeholder="Search for photos"
      />
    </InputWrapper>
  );
}
