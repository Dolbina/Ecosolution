import React from 'react';

import {
  BurgerMenuWrapper,
  CloseButton,
  MenuList,
  MenuItem,
  IconClose,
  BurgerMenuContainer,
  Rectangle,
  MenuWrap,
  IconArrow,
  MenuWrapSecond,
  LinkSocial,
  IconSocial,
  Backdrop,
} from './BurgerMenu.styled';

import { IconAddress } from '../ContactUs/ContactUs.styled';

import icon from '../../assets/icons/symbol-defs (1).svg';

const BurgerMenu = ({ closeMenu }) => {
  const scrollToSection = sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };
  return (
    <>
      <Backdrop />

      <BurgerMenuWrapper>
        <BurgerMenuContainer>
          <CloseButton onClick={closeMenu}>
            <IconClose>
              <use href={icon + '#icon-iconamoon_close-light'}></use>
            </IconClose>
            close
          </CloseButton>
          <Rectangle />
          <nav>
            <MenuWrapSecond>
              <MenuWrap>
                <MenuList>
                  <li>
                    <MenuItem onClick={() => scrollToSection('main-section')}>
                      Main
                      <IconArrow>
                        <use href={icon + '#icon-arrow-right-top-16'}></use>
                      </IconArrow>
                    </MenuItem>
                  </li>
                  <li>
                    <MenuItem onClick={() => scrollToSection('about-section')}>
                      About
                      <IconArrow>
                        <use href={icon + '#icon-arrow-right-top-16'}></use>
                      </IconArrow>
                    </MenuItem>
                  </li>
                  <li>
                    <MenuItem onClick={() => scrollToSection('cases-section')}>
                      Cases
                      <IconArrow>
                        <use href={icon + '#icon-arrow-right-top-16'}></use>
                      </IconArrow>
                    </MenuItem>
                  </li>
                  <li>
                    <MenuItem onClick={() => scrollToSection('fqa-section')}>
                      FQA
                      <IconArrow>
                        <use href={icon + '#icon-arrow-right-top-16'}></use>
                      </IconArrow>
                    </MenuItem>
                  </li>
                  <li>
                    <MenuItem
                      onClick={() => scrollToSection('contact-section')}
                    >
                      Contact Us
                      <IconArrow>
                        <use href={icon + '#icon-arrow-right-top-16'}></use>
                      </IconArrow>
                    </MenuItem>
                  </li>
                </MenuList>
              </MenuWrap>
              <div>
                <LinkSocial
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <IconSocial>
                    <use href={icon + '#icon-facebook'}></use>
                  </IconSocial>
                </LinkSocial>
                <LinkSocial
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <IconAddress>
                    <use href={icon + '#icon-instagram'}></use>
                  </IconAddress>
                </LinkSocial>
              </div>
            </MenuWrapSecond>
          </nav>
        </BurgerMenuContainer>
      </BurgerMenuWrapper>
    </>
  );
};

export default BurgerMenu;
