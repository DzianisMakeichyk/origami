import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import Layout from '../shared/components/Layout/Layout';
import Products from '../shared/components/Products';
import { Outer, Header } from '../shared/ui/common';
import graphSettings from '../shared/graphSettings/index';

interface FrotPageProps {
  Component?: React.Component;
  data?: FrotPageDataProps;
}

interface FrotPageDataProps {
  loading?: boolean;
  products?: object[];
}

class FrontPage extends Component<FrotPageProps> {
  static graph = graphSettings;

  render() {
    const { data } = this.props;

    if (!data || data.loading) return <Layout {...data} />;

    return (
      <Layout>
        <Outer>
          <Header/>
          {!!data.products && <Products {...data} />}
        </Outer>
      </Layout>
    );
  }
}

export default graphql(
  FrontPage.graph.query,
  FrontPage.graph
)(FrontPage);
