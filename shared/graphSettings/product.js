import gql from 'graphql-tag';

export default {
  query: gql`
    query PRODUCT_QUERY($url: String!, $id: String!) {
      catalogue(url: $url, tenantID: $id) {
        id
        content_fields
        product {
          id
          name
          product_image
          product_image_resized
          price
          fields
          dimensions {
            id
            name
            values {
              id
              name
            }
          }

          variations {
            price_ex_vat
            attributes {
              attribute_key
              attribute_value
            }
          }
        }
      }
    }
  `,

  options: ctx => {
    const { router } = ctx;
    return {
      variables: {
        url: router.asPath || router.pathname,
        id: __appConfig.TENANT_ID
      }
    };
  },

  props: props => {
    const { data } = props;
    const { catalogue } = data;

    return {
      data: {
        ...data,
        catalogue,
      },
    };
  },
};
