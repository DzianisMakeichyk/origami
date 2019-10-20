/* eslint react/no-multi-comp: 0 */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import Button from '../shared/components/Button';
import Image from '../shared/components/Image';
import Layout from '../shared/components/Layout/Layout';
import Switcher from '../shared/components/Switcher';

import graphSettings from '../shared/graphSettings/product';
import {
  ProductContainer,
  ProductFooter,
  ProductImageWrapper,
  ProductInfo,
  ProductWrapper,
  TextHeading,
} from '../shared/components/Product/ProductStyles';

interface ProductPageProps {
  data?: ProductPageDataProps;
  nextProps?: any;
  prevState?: any;
}

interface ProductPageDataProps {
  catalogue?: ProductProps;
  loading?: boolean;
  error?: boolean;
  products?: object[];
}

interface ProductProps {
  product?: ProductDetailsProps;
}

interface ProductDetailsProps {
  name?: string;
  product_image?: string;
  product_image_resized?: string;
  variations?: object[];
}

interface DimensionValueProps {
  dimension?: ProductPageDimensionProps;
  value?: ProductPageValueProps;
}

interface ProductPageDimensionProps {
  id?: number;
  name?: string;
  values?: object[];
}

interface ProductPageValueProps {
  id?: number;
  name?: string;
  values?: object[];
}

class ProductPage extends Component<ProductPageProps> {
  static getDerivedStateFromProps( nextProps: any, prevState: any ) {
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
        (v: any) => v.id === product.default_variation_id,
      );
    }

    if (!selectedVariant) {
      [selectedVariant] = product.variations;
    }

    return {
      selectedVariant,
    };

  }

  state: any = {
    selectedVariant: null,
  };

  onDimensionValueChange = ({ dimension, value }: DimensionValueProps) => {
    const { selectedVariant } = this.state;
    const newAttributes = selectedVariant.attributes.map((attr: any) => {
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
    const matchedVariant = product.variations.find((v: any) => {
      let match = true;
      newAttributes.forEach((attr: any) => {
        if (
          !v.attributes.find(
            (a: any) =>
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
      <ProductContainer itemScope itemType="http://schema.org/Product">
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

            <Switcher
              {...product}
              selectedVariant={selectedVariant}
              onDimensionValueChange={this.onDimensionValueChange}
            />

            <ProductFooter>
              <Button price={selectedVariant && selectedVariant.price_ex_vat}>
                Add to basket
              </Button>
            </ProductFooter>
          </ProductInfo>
        </ProductWrapper>
      </ProductContainer>
    );
  }
}

class ProductPageDataLoader extends Component<ProductPageProps> {
  static graph = graphSettings;

  render() {
    const { data } = this.props;
    const { loading, error } = data;

    if (loading) {
      return <Layout {...this.props} />;
    }

    if (error) {
      return (
        <Layout {...this.props}>
          Error getting product
        </Layout>
      );
    }

    return (
      <Layout {...this.props}>
        <ProductPage {...this.props} />
      </Layout>
    );
  }
}

export default graphql(
  ProductPageDataLoader.graph.query,
  ProductPageDataLoader.graph
)(ProductPageDataLoader);
