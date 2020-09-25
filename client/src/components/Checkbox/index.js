// @flow strict
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { HStack, HSpacer } from 'src/components/Stack';
import { BASE_UNIT, colors, fontSize, fontWeight } from 'src/styles';

const CheckboxStyle = styled.input<{}>({
  height: 4 * BASE_UNIT,
  width: 4 * BASE_UNIT,
  borderRadius: BASE_UNIT,
  backgroundColor: colors.white,
  margin: 0,
  cursor: 'pointer',
});

const Text = styled.div<{}>({
  color: colors.grey,
  fontSize: fontSize.medium,
  fontWeight: fontWeight.semibold,
});

export default function Checkbox({
  value,
  onChange,
  text,
}: {|
  value: boolean,
  onChange: () => void,
  text: string,
|}) {
  return (
    <HStack
      css={{
        alignItems: 'center',
        padding: `${2 * BASE_UNIT}px ${4 * BASE_UNIT}px`,
        width: 'fit-content',
        backgroundColor: colors.white,
        borderRadius: BASE_UNIT,
      }}
    >
      <CheckboxStyle type="checkbox" checked={value} onChange={onChange} />
      <HSpacer width={2 * BASE_UNIT} />
      <Text>{text}</Text>
    </HStack>
  );
}
