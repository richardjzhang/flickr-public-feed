// @flow strict
/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import Logo from 'src/components/Logo';
import ResultsList from 'src/components/ResultsList';
import SearchBar from 'src/components/SearchBar';
import { VStack, VSpacer } from 'src/components/Stack';
import LoadingSpinner from 'src/primitives/LoadingSpinner';
import { BASE_UNIT } from 'src/styles';
import { useFlickrFetch } from 'src/utils/hooks';

const NO_VALUE = '';
function PublicFeed() {
  const [searchTerm, setSearchTerm] = React.useState(NO_VALUE);
  const { isLoading, results } = useFlickrFetch(searchTerm);

  return (
    <VStack
      css={{
        alignItems: 'center',
        flex: 1,
      }}
    >
      <VSpacer height={12 * BASE_UNIT} />
      <Logo />
      <VSpacer height={15 * BASE_UNIT} />
      <SearchBar
        value={searchTerm}
        onChange={(v) => setSearchTerm(v)}
        dataTestId="PublicFeed-search-bar"
      />
      {isLoading && (
        <React.Fragment>
          <LoadingSpinner />
          {/* Offset space above Logo */}
          <VSpacer height={15 * BASE_UNIT} />
          {/* Add some space to center LoadingSpinner in viewport */}
          <VSpacer height={18 * BASE_UNIT} />
        </React.Fragment>
      )}
      {!isLoading && searchTerm !== NO_VALUE && results != null && (
        <React.Fragment>
          <VSpacer height={18 * BASE_UNIT} />
          <ResultsList searchTerm={searchTerm} results={results} />
        </React.Fragment>
      )}
    </VStack>
  );
}

export default PublicFeed;
