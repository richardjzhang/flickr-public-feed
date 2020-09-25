// @flow strict
import styled from '@emotion/styled';
import { PAGE_BACKGROUND_COLOR } from 'src/styles';

const Layout: any = styled.div<{}>({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: PAGE_BACKGROUND_COLOR,
  minHeight: '100vh',
});

export default Layout;
