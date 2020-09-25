// @flow strict
/** @jsx jsx */
import { jsx } from '@emotion/core';

export function HStack(props: any) {
  return <div css={{ display: 'flex' }} {...props} />;
}

export function VStack(props: any) {
  return <div css={{ display: 'flex', flexDirection: 'column' }} {...props} />;
}

export function VSpacer({
  height = 30,
  grow = false,
}: {
  height?: number,
  grow?: boolean,
}) {
  return <div css={{ height, flexShrink: 0, ...(grow ? { flex: 1 } : {}) }} />;
}

export function HSpacer({
  width = 30,
  grow = false,
}: {
  width?: number,
  grow?: boolean,
}) {
  return (
    <div
      css={{
        width,
        flexShrink: 0,
        display: 'inline-block',
        ...(grow ? { flex: 1 } : {}),
      }}
    />
  );
}
