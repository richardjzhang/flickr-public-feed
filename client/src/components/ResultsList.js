// @flow strict
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import * as React from 'react';
import Avatar from 'src/components/Avatar';
import {
  Card,
  CardHeader,
  CardThumbnail,
  CardContent,
} from 'src/components/Card';
import Checkbox from 'src/components/Checkbox';
import MasonryLayout from 'src/components/MasonryLayout';
import { HStack, HSpacer, VStack, VSpacer } from 'src/components/Stack';
import { BASE_UNIT, colors, fontSize, fontWeight } from 'src/styles';
import { getAuthor, getDate } from 'src/utils/flickr';
import { useWindowDimensions } from 'src/utils/hooks';

const Title = styled.div<{}>({
  fontSize: fontSize.large,
  fontWeight: fontWeight.semibold,
  color: colors.white,
});

const Description = styled.div<{}>({
  fontSize: fontSize.medium,
  color: colors.grey10,
});

function NoResults({ searchTerm }: {| searchTerm: string |}) {
  return (
    <VStack
      css={{
        padding: 8 * BASE_UNIT,
        textAlign: 'center',
      }}
    >
      <Title>
        Sorry, we couldn&#39;t find any matches for &#39;{searchTerm}&#39;
      </Title>
      <VSpacer height={4 * BASE_UNIT} />
      <Description>Please try searching with another term</Description>
    </VStack>
  );
}

// We will use the window resize as a measure for the number of columns
// rather than using a ref on MasonryLayout. This avoids all the nasty hacks
// we would need to perform to measure a ref's offset width before rendering
function getNumberOfColumns(windowWidth: number, windowColumnSize: number) {
  return Math.ceil(windowWidth / windowColumnSize);
}

const CARD_GAP = 5 * BASE_UNIT;
const CARD_WIDTH = 300;
const CardWrapper = styled.a<{}>({
  textDecoration: 'none',
  webkitAppearance: 'none',
  mozAppearance: 'none',
});

export default function ResultsList({
  searchTerm,
  results,
}: {|
  searchTerm: string,
  results: Array<any>,
|}) {
  const { width: windowWidth } = useWindowDimensions();
  const [numberOfCols, setNumberOfCols] = React.useState(
    getNumberOfColumns(windowWidth, 2 * CARD_WIDTH),
  );
  const [showTags, setShowTags] = React.useState(false);

  React.useEffect(() => {
    setNumberOfCols(
      Math.min(getNumberOfColumns(windowWidth, 2 * CARD_WIDTH), results.length),
    );
  }, [results, windowWidth]);

  if (results.length === 0) {
    return <NoResults searchTerm={searchTerm} />;
  }

  return (
    <VStack>
      <Checkbox
        value={showTags}
        onChange={() => setShowTags(!showTags)}
        text="Show tags"
      />
      <VSpacer height={4 * BASE_UNIT} />
      <MasonryLayout
        gap={CARD_GAP}
        numberOfCols={numberOfCols}
        colWidth={CARD_WIDTH}
      >
        {results.map((item) => {
          const author = getAuthor({ author: item.author });
          return (
            <CardWrapper key={item.link} href={item.link} target="_blank">
              <Card>
                <CardHeader>
                  <HStack>
                    <Avatar>{author[0].toUpperCase()}</Avatar>
                    <HSpacer width={16} />
                    <VStack>
                      <div css={{ color: colors.grey }}>{author}</div>
                      <VSpacer height={4} />
                      <div css={{ color: colors.grey90 }}>
                        {getDate({ published: item.published })}
                      </div>
                    </VStack>
                  </HStack>
                </CardHeader>
                <CardThumbnail
                  width={CARD_WIDTH}
                  src={item.media.m}
                  alt={item.title}
                />
                <CardContent>
                  <div>{item.title}</div>
                  {showTags && (
                    <React.Fragment>
                      <VSpacer height={3 * BASE_UNIT} />
                      <div
                        css={{
                          color: colors.grey90,
                          fontWeight: fontWeight.semibold,
                        }}
                      >
                        Tags:
                      </div>
                      <VSpacer height={BASE_UNIT} />
                      <div>{item.tags.split(' ').join(', ')}</div>
                    </React.Fragment>
                  )}
                </CardContent>
              </Card>
            </CardWrapper>
          );
        })}
      </MasonryLayout>
    </VStack>
  );
}
