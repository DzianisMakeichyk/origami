import styled from 'styled-components';

import { styles } from '../../ui/constant/style';

export const ItemWrapper = styled.a`
  border-radius: 5px;
  display: block;
  overflow: hidden;
  position: relative;
  width: 100%;

  @media screen and (min-width: ${styles.mediaQueries.mobile + 1}px) {
    transition: box-shadow .4s ease, transform .4s ease;
  }

  &:hover {
    @media screen and (min-width: ${styles.mediaQueries.mobile + 1}px) {
      box-shadow: 0 4px 0 0 ${styles.colors.yellow};
      transform: translateY(-3px)
    }
  }
`;

export const DescriptionWrapper = styled.div`
  background: ${styles.colors.white};
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const Price = styled.span`
  color: ${styles.colors.grayMiddle};
  background: ${styles.colors.white};
  border-radius: 0 0 0 5px;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: .4px;
  padding: 17px;
  position: absolute;
  right: 0;
  top: 0;
`;

export const PriceName = styled.p`
  color: ${styles.colors.grayMiddle};
  font-size: 17px;
  font-weight: 100;
`;

export const Product = styled.div`
  max-width: 1200px;
  margin: 0 auto 150px;

  @media screen and (max-width: ${styles.mediaQueries.mobile - 1}px) {
    margin: 0 auto 25px;
  }
`;
export const ProductWrapper = styled.div`
  align-items: center;
  background: ${styles.colors.white};
  border-radius: 5px;
  box-shadow: 0 4px 10px 0 ${styles.colors.gray};
  display: flex;
  justify-content: center;
  margin: 0 15px;

  @media screen and (max-width: ${styles.mediaQueries.desktop - 1}px) {
    flex-wrap: wrap;
  }
`;

export const ProductImageWrapper = styled.div`
  box-shadow: 0 4px 10px 0 ${styles.colors.gray};
  overflow: hidden;

  @media screen and (min-width: ${styles.mediaQueries.desktop}px) {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    max-width: 650px;
    width: 50%;
  }

  @media screen and (max-width: ${styles.mediaQueries.desktop - 1}px) {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  width: 100%;
  }
`;

export const Loader = styled.div`
  font-size: 2rem;
  margin: 50px;
  text-align: center;
`;

export const ProductInfo = styled.div`
  padding: 60px;

  @media screen and (min-width: ${styles.mediaQueries.desktop}px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  
  @media screen and (max-width: ${styles.mediaQueries.desktop - 1}px) {
    padding: 25px 20px;
    text-align: center;
  }
`;

export const TextHeading = styled.h1`
  color: ${styles.colors.text};
  display: inline-block;
  font-size: 54px;
  position: relative;
  z-index: 5;

  @media screen and (max-width: ${styles.mediaQueries.mobile - 1}px) {
    font-size: 38px;
  }
  
  &::after {
    background: ${styles.colors.yellow};
    bottom: 7px;
    content: '';
    height: 15px;
    position: absolute;
    right: -15px;
    width: 90%;
    z-index: -1;
    
    @media screen and (max-width: ${styles.mediaQueries.mobile - 1}px) {
      height: 6px;
      right: 0;
      width: 80%;
    }
  }
`;

// export const Price = styled.div`
//   text-align: center;
//   color: ${styles.colors.black};
//   font-size: 44px;
//   font-weight: 100;
//   strong {
//     display: inline-block;
//     margin-left: 5px;
//   }
// `;

export const ProductFooter = styled.div`
  display: flex;
  border-top: 1px solid #dfdfdf;
  padding: 15px 0;
  justify-content: space-between;
  align-items: center;
`;
