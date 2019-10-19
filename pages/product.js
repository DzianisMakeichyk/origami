/* eslint react/no-multi-comp: 0 */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import Button from '../shared/components/Button';
import Image from '../shared/components/Image';
import Layout from '../shared/components/Layout/Layout';
import Variants from '../shared/components/Switcher';

import graphSettings from '../shared/graphSettings/product';
import {
  Product,
  ProductFooter,
  ProductImageWrapper,
  ProductInfo,
  ProductWrapper,
  TextHeading,
} from '../shared/components/product/ProductStyles';

class ProductPage extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState && prevState.selectedVariant) {
      return {};
    }
    
    const { catalogue } = nextProps.data;

    if (!catalogue) {
      return {};
    }

    const { product } = catalogue;

    let selectedVariant;

    if (!product.variations) {
      return {};
    }

    if (product.default_variation_id) {
      selectedVariant = product.variations.find(
        v => v.id === product.default_variation_id,
      );
    }

    if (!selectedVariant) {
      [selectedVariant] = product.variations;
    }

    return {
      selectedVariant,
    };

  }

  state = {
    selectedVariant: null,
  };

  onDimensionValueChange = ({ dimension, value }) => {
    const { selectedVariant } = this.state;
    const newAttributes = selectedVariant.attributes.map(attr => {
      if (attr.attribute_key !== dimension.name) {
        return attr;
      }

      return {
        ...attr,
        attribute_value: value.name,
      };
    });

    const { data } = this.props;
    const { product } = data.catalogue;
    const matchedVariant = product.variations.find(v => {
      let match = true;
      newAttributes.forEach(attr => {
        if (
          !v.attributes.find(
            a =>
              a.attribute_key === attr.attribute_key &&
              a.attribute_value === attr.attribute_value
          )
        ) {
          match = false;
        }
      });
      return match;
    });

    if (matchedVariant) {
      this.setState({
        selectedVariant: matchedVariant,
      });
    }
  };

  render() {
    const { data } = this.props;
    const { catalogue } = data;
    const { selectedVariant } = this.state;
    const { product } = catalogue;

    return (
      <Product itemScope itemType="http://schema.org/Product">
        <ProductWrapper>
          <ProductImageWrapper>
            <Image
              alt={product.name}
              src={product.product_image}
              srcMobile={product.product_image_resized}
            />
          </ProductImageWrapper>

          <ProductInfo>
            <TextHeading itemProp="name">{product.name}</TextHeading>

            <Variants
              {...product}
              selectedVariant={selectedVariant}
              onDimensionValueChange={this.onDimensionValueChange}
            />

            <ProductFooter>
              <Button price={selectedVariant.price_ex_vat}>
                Add to basket
              </Button>
            </ProductFooter>
          </ProductInfo>
        </ProductWrapper>
      </Product>
    );
  }
}

class ProductPageDataLoader extends React.Component {
  static graph = graphSettings;

  render() {
    const { data } = this.props;
    const { loading, error } = data;

    if (loading) {
      return <Layout {...this.props} loading />;
    }

    if (error) {
      return (
        <Layout {...this.props} error>
          Error getting product
        </Layout>
      );
    }

    let title = 'Loading';
    if (data.catalogue) {
      title = data.catalogue.product.name;
    }

    return (
      <Layout {...this.props} title={title}>
        <ProductPage {...this.props} />
      </Layout>
    );
  }
}

export default graphql(
  ProductPageDataLoader.graph.query,
  ProductPageDataLoader.graph
)(ProductPageDataLoader);
