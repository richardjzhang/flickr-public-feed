// @flow strict
import * as React from 'react';
import ErrorPage from 'src/views/Error';

type Props = {|
  children: React.Node,
|};

type State = {|
  error: ?Error,
|};

class ErrorBoundary extends React.Component<Props, State> {
  state = { error: undefined };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error) {
    console.error(error.message);
  }

  render() {
    if (this.state.error) {
      return <ErrorPage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
