// @flow strict
import styled from '@emotion/styled';
import * as React from 'react';
import { VSpacer } from 'src/components/Stack';

const FlexGrid = styled.div<{ gap: number }>((props) => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  marginRight: -props.gap,
}));

const Col = styled.div<{ gap: number, width: number }>((props) => ({
  width: props.width,
  marginRight: props.gap,
  marginBottom: -props.gap,
}));

const constructColumns = (
  children: React$Node,
  cols: Array<Array<React$Node>>,
  gap: number,
) => {
  React.Children.forEach(children, (child, i) =>
    cols[i % cols.length].push(
      <React.Fragment key={i}>
        {child}
        <VSpacer height={gap} />
      </React.Fragment>,
    ),
  );
  return cols;
};

type Props = {|
  children: React$Node,
  gap: number,
  numberOfCols: number,
  colWidth: number,
|};

export default function MasonryLayout({
  children,
  gap,
  numberOfCols,
  colWidth,
}: Props) {
  const cols = constructColumns(
    children,
    [...Array(numberOfCols)].map(() => []),
    gap,
  );

  return (
    <FlexGrid gap={gap}>
      {[...Array(numberOfCols)].map((_, index) => (
        <Col key={index} gap={gap} width={colWidth}>
          {cols[index]}
        </Col>
      ))}
    </FlexGrid>
  );
}
