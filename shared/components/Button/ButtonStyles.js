import styled from 'styled-components';

import { styles } from '../../ui/constant/style';

export const ButtonStyle = styled.button`
  -webkit-appearance: none;
  appearance: none;
  background: ${styles.colors.white};
  border-radius:40px;
  border: 2px solid ${styles.colors.green};
  color: ${styles.colors.green};
  display: flex;
  font-size: 12px;
  justify-content: center;
  letter-spacing:1px;
  margin: 15px 0;
  padding: 16px 30px;
  text-shadow:0;
  text-transform: uppercase;
  
  @media screen and (max-width: ${styles.mediaQueries.hd - 1}px) {
    margin: 15px auto 0;
  }
  
  @media screen and (min-width: ${styles.mediaQueries.mobile + 1}px) {
    transition: background .4s ease, color .4s ease;
  }
  
  &:not(:disabled) {
    &:hover {
      @media screen and (min-width: ${styles.mediaQueries.mobile + 1}px) {
        background: ${styles.colors.green};
        color: ${styles.colors.white};
      }
    }
  }
  
  &:disabled {
    border: 2px solid ${styles.colors.gray};
    color: ${styles.colors.gray};
    cursor: not-allowed;
  }
  
  span {
    display: inline-block;
    font-weight: 600;
    min-width: 80px;
    padding: 0 0 0 30px;
    text-align: center;
    text-transform: capitalize;
  }
`;
