import { BurgerWrap, IconBurger } from './Burger.styled.js';
import icon from '../../assets/icons/symbol-defs (1).svg';

const Burger = () => {
  return (
    <BurgerWrap>
      <IconBurger>
        <use href={icon + '#icon-menu'}></use>
      </IconBurger>
    </BurgerWrap>
  );
};

export default Burger;
