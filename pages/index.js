import React from 'react';
import { graphql } from 'react-apollo';

import Layout from '../shared/components/Layout/Layout';
import Products from '../shared/components/Products';
import { Outer, Header } from '../shared/ui/common';
import graphSettings from '../shared/graphSettings/index';

class FrontPage extends React.Component {
  static graph = graphSettings;

  render() {
    const { router, data } = this.props;

    if (!data || data.loading) return <Layout loading />;

    return (
      <Layout router={router} title="Front page">
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
