import React from 'react';
import App from 'next/app';
import { ApolloProvider } from 'react-apollo';

import withData from '../lib/with-data';

class OrigamiApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </>
    );
  }
}

export default withData(OrigamiApp);
