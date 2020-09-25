// @flow strict
/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import Logo from 'src/components/Logo';
import ResultsList from 'src/components/ResultsList';
import SearchBar from 'src/components/SearchBar';
import { VStack, VSpacer } from 'src/components/Stack';
import Layout from 'src/primitives/Layout';
import LoadingSpinner from 'src/primitives/LoadingSpinner';
import Main from 'src/primitives/Main';
import { prepareTags } from 'src/utils/flickr';

const NO_VALUE = '';

function App() {
  const [searchTerm, setSearchTerm] = React.useState(NO_VALUE);
  const [results, setResults] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    let isSubscribed = true;
    if (searchTerm !== '') {
      setIsLoading(true);
      const tags = prepareTags(searchTerm);
      fetch(`/flickr/${tags}`)
        .then((res) => res.json())
        .then((data) => {
          if (isSubscribed) {
            setResults(data.items);
            setIsLoading(false);
          }
        })
        .catch((e) => {
          throw e;
        });
    }
    if (searchTerm === '') setIsLoading(false);
    return () => {
      isSubscribed = false;
    };
  }, [searchTerm]);

  return (
    <Layout>
      <Main>
        <VStack
          css={{
            alignItems: 'center',
            flex: 1,
          }}
        >
          <VSpacer height={48} />
          <Logo />
          <VSpacer height={60} />
          <SearchBar value={searchTerm} onChange={(v) => setSearchTerm(v)} />
          {isLoading && (
            <React.Fragment>
              <LoadingSpinner />
              {/* Offset space above Logo */}
              <VSpacer height={60} />
              {/* Add some space to center LoadingSpinner in viewport */}
              <VSpacer height={72} />
            </React.Fragment>
          )}
          {!isLoading && searchTerm !== NO_VALUE && (
            <React.Fragment>
              <VSpacer height={72} />
              <ResultsList searchTerm={searchTerm} results={results} />
            </React.Fragment>
          )}
        </VStack>
      </Main>
    </Layout>
  );
}

export default App;
