// @flow strict
import styled from '@emotion/styled';
import * as React from 'react';
import { BASE_UNIT, colors, fontSize } from 'src/styles';

const CARD_PADDING = 3 * BASE_UNIT;
export const Card = styled.div<{}>({
  width: 300,
  display: 'flex',
  flexDirection: 'column',
  borderRadius: BASE_UNIT,
  backgroundColor: colors.white,
  transition: 'box-shadow, transform 0.25s ease',
  overflow: 'hidden',
  cursor: 'pointer',
  boxShadow:
    '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  '&:hover': {
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
    transform: 'scale(1.05)',
  },
});

export const CardHeader = styled.div<{}>({
  padding: CARD_PADDING,
  display: 'flex',
  alignItems: 'center',
});

const CardThumbnailStyle = styled.img<{
  height?: number,
  width: number,
}>((props) => ({
  height: props.height,
  width: props.width,
}));

export function CardThumbnail({
  height,
  width,
  ...rest
}: {|
  alt: string,
  height?: number,
  src: string,
  width: number,
|}) {
  return <CardThumbnailStyle height={height} width={width} {...rest} />;
}

export const CardContent = styled.div<{}>({
  padding: CARD_PADDING,
  fontSize: fontSize.small,
  color: colors.grey,
});
