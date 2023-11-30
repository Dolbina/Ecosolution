import { HeaderWrapper, BurgerWrapTop } from './Header.styled';
import  Logo  from '../Logo/Logo';
import Burger from '../Burger/Burger';
import ButtonGetInTouch from '../ButtonGetInTouch/ButtonGetInTouch';



const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <Logo />
        <BurgerWrapTop>
          <Burger />
          <ButtonGetInTouch />
        </BurgerWrapTop>
      </HeaderWrapper>
    </>
  );
};

export default Header;
