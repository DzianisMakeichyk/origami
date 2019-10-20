import { Component } from 'react';
import App from 'next/app';
import { ApolloProvider } from 'react-apollo';

import withData from '../lib/with-data';

interface OrigamiAppProps {
  apolloClient?: any;
  Component?: Component;
  pageProps?: any;
}

class OrigamiApp extends App<OrigamiAppProps> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default withData(OrigamiApp);
