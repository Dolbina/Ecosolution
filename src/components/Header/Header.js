import { HeaderWrapper, BurgerWrapTop, HeaderContainer } from './Header.styled';
import  Logo  from '../Logo/Logo';
import Burger from '../Burger/Burger';
import ButtonGetInTouch from '../ButtonGetInTouch/ButtonGetInTouch';



const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <Logo />
          <BurgerWrapTop>
            <Burger />
            <ButtonGetInTouch />
          </BurgerWrapTop>
        </HeaderContainer>
      </HeaderWrapper>
    </>
  );
};

export default Header;
