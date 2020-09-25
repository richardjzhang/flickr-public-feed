// @flow strict
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { HStack, HSpacer } from 'src/components/Stack';
import { BASE_UNIT, colors, fontSize, fontWeight } from 'src/styles';

const CheckboxStyle = styled.input<{}>({
  borderRadius: BASE_UNIT,
  backgroundColor: colors.white,
  margin: 0,
});

const Text = styled.div<{}>({
  color: colors.grey10,
  fontSize: fontSize.small,
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
    <HStack css={{ alignItems: 'center' }}>
      <CheckboxStyle type="checkbox" value={value} onChange={onChange} />
      <HSpacer width={BASE_UNIT} />
      <Text>{text}</Text>
    </HStack>
  );
}
