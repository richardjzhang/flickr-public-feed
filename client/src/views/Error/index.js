// @flow strict
import styled from '@emotion/styled';
import * as React from 'react';
import Layout from 'src/primitives/Layout';
import Main from 'src/primitives/Main';
import { colors, fontSize, fontWeight } from 'src/styles';

const ErrorMessage = styled.div<{}>({
  margin: 'auto',
  fontSize: fontSize.large,
  fontWeight: fontWeight.semibold,
  color: colors.white,
});

export default function Error() {
  return (
    <Layout>
      <Main>
        <ErrorMessage>
          Something went wrong! Please try refreshing the page or contacting
          support.
        </ErrorMessage>
      </Main>
    </Layout>
  );
}
