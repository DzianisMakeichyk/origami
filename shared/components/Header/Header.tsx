import Link from 'next/link';
import Logo from '../../icons/Logo';

import { HeaderContainer, LogoWrapper } from './HeaderStyles';

const Header = () => (
  <HeaderContainer>
    <Link as="/" href="/illustrations">
      <a>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      </a>
    </Link>
  </HeaderContainer>
);

export default Header;
