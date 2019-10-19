import styled from 'styled-components';

import { styles } from '../../ui/constant/style';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  margin: 20px auto 75px;

  @media screen and (max-width: ${styles.mediaQueries.mobile - 1}px) {
    margin: 20px auto 35px;
  }
`;

export const LogoWrapper = styled.div`
  width: 60px;

  @media screen and (max-width: ${styles.mediaQueries.mobile - 1}px) {
    width: 40px;
  }
`;
