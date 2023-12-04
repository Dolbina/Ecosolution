import React, { useState } from 'react';
import { BurgerWrap, IconBurger } from './Burger.styled.js';
import icon from '../../assets/icons/symbol-defs (1).svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu.js';

const Burger = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <BurgerWrap>
      <IconBurger onClick={toggleMenu}>
        <use href={icon + '#icon-menu'}></use>
      </IconBurger>
      {isMenuOpen && <BurgerMenu closeMenu={toggleMenu} />}
    </BurgerWrap>
  );
};

export default Burger;
