import styled from 'styled-components';

import { styles } from '../../ui/constant/style';

export const Grid = styled.ul`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  list-style: none;

  > li {
    display: flex;
  }

  @media screen and (max-width: ${styles.mediaQueries.desktop - 1}px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: ${styles.mediaQueries.mobile - 1}px) {
    grid-template-columns: 1fr;
  }
`;
