import { Component } from 'react';
import Head from 'next/head';
import { getDataFromTree } from 'react-apollo';

import initApollo from './init-apollo';

export default App => {
  return class Apollo extends Component {
    static displayName = 'withApollo(App)';

    static async getInitialProps(ctx) {
      const { Component, router } = ctx;

      const appProps = {
        pageProps: {
          router
        }
      };

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const apollo = initApollo();
      if (!process.browser) {

        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <App
              {...appProps}
              Component={Component}
              router={router}
              apolloClient={apollo}
            />,
            {
              router
            }
          );
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          console.error('Error while running `getDataFromTree`', error);
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();
      }

      // Extract query data from the Apollo store
      const apolloState = apollo.cache.extract();

      // Run the initial props from the component
      if (App.getInitialProps) {
        // Get the component data from the cache
        if (!process.browser && Component.graph) {
          try {
            ctx.ctx.graphData = apollo.cache.readQuery({
              query: Component.graph.query,
              ...Component.graph.options(ctx)
            });
          } catch (e) {
            console.log('Could not get from cache');
          }
        }

        const { pageProps } = await App.getInitialProps(ctx);
        Object.assign(appProps.pageProps, pageProps);
      }

      return {
        ...appProps,
        apolloState
      };
    }

    constructor(props) {
      super(props);
      this.apolloClient = initApollo(props.apolloState);
    }

    render() {

      return (
        <App {...this.props} apolloClient={this.apolloClient} />
      );
    }
  };
};
