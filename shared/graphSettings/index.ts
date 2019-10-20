import gql from 'graphql-tag';

export default {
  query: gql`
    query CATEGORY_QUERY($url: String!, $id: String!) {
      catalogue(url: $url, tenantID: $id) {
        ...stuff
      }
      illustrations: catalogue(url: "/illustrations", tenantID: $id) {
        ...stuff
      }
    }
    fragment stuff on Catalogue {
      id
      children {
        id
        name
        link
        product {
          id
          sku
          name
          product_image
          product_image_resized
          price
          price_from
          link
        }
      }
    }
  `,

  options: (ctx: any) => {
    const { router } = ctx;

    return {
      variables: {
        url: router.asPath || router.pathname,
        id: 'demo',
      }
    };
  },

  props: (props: any) => {
    const { data } = props;
    const { illustrations } = data;

    return {
      data: {
        ...data,
        products: !illustrations ? [] : [...illustrations.children]
      }
    };
  }
};
