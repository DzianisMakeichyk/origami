import Link from 'next/link';

import Image from '../Image';

interface ProductItemProps {
  data?: ProductItemDataProps,
}

interface ProductItemDataProps {
  name?: string;
  link?: string;
  product: ProductItemDetailsProps;
}

interface ProductItemDetailsProps {
  price?: string;
  product_image?: string;
  product_image_resized?: string;
}

import {
  DescriptionWrapper,
  ItemWrapper,
  Price,
  ProductName
} from './ProductStyles';

const Item = ({ data }: ProductItemProps) => {
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
          <ProductName>{name}</ProductName>
          <Price>
            {price ? price + ' kr' : <em>soon</em>}
          </Price>
        </DescriptionWrapper>
      </ItemWrapper>
    </Link>
  )
};

export default Item;
