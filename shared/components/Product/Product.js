import React from 'react';
import Link from 'next/link';

import Image from '../Image';

import {
  DescriptionWrapper,
  ItemWrapper,
  Price,
  PriceName
} from './ProductStyles';

const Item = ({ data = {} }) => {
  const { name, link, product } = data;
  const { price, product_image, product_image_resized } = product;

  if (!product) {
    return null;
  }

  return (
    <Link
      as={link}
      href={link}
      passHref
    >
      <ItemWrapper>
        <Image
          alt={name}
          src={product_image}
          srcMobile={product_image_resized}
        />
        <DescriptionWrapper>
          <PriceName>{name}</PriceName>
          <Price>
            {price ? price + ' kr' : <em>soon</em>}
          </Price>
        </DescriptionWrapper>
      </ItemWrapper>
    </Link>
  )
};

export default Item;
