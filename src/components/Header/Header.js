import { HeaderWrapper } from './Header.styled';
import  Logo  from '../Logo/Logo';
import  Burger  from '../Burger/Burger';



const Header = () => {
  return (
    <>
          <HeaderWrapper>
              <Logo />
              <Burger/>
      </HeaderWrapper>
    </>
  );
};

export default Header;
