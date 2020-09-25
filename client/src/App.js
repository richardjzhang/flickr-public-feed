// @flow strict
import * as React from 'react';
import ErrorBoundary from 'src/components/ErrorBoundary';
import Layout from 'src/primitives/Layout';
import Main from 'src/primitives/Main';
import PublicFeed from 'src/views/PublicFeed';

function App() {
  return (
    <ErrorBoundary>
      <Layout>
        <Main>
          <PublicFeed />
        </Main>
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
