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
} from './BurgerMenu.styled';

import { SocialWrap, ContactUsPhone, IconFacebook, IconAddress } from '../ContactUs/ContactUs.styled';


import icon from '../../assets/icons/symbol-defs (1).svg';

const BurgerMenu = ({ closeMenu }) => {
  return (
    <BurgerMenuWrapper>
      <BurgerMenuContainer>
        <CloseButton onClick={closeMenu}>
          <IconClose>
            <use href={icon + '#icon-iconamoon_close-light'}></use>
          </IconClose>
          close
        </CloseButton>
        <Rectangle />
        <MenuWrap>
          <MenuList>
            <MenuItem>
              Main
              <IconArrow>
                <use href={icon + '#icon-arrow-right-top-16'}></use>
              </IconArrow>
            </MenuItem>
            <MenuItem>
              About
              <IconArrow>
                <use href={icon + '#icon-arrow-right-top-16'}></use>
              </IconArrow>
            </MenuItem>
            <MenuItem>
              Cases
              <IconArrow>
                <use href={icon + '#icon-arrow-right-top-16'}></use>
              </IconArrow>
            </MenuItem>
            <MenuItem>
              FQA
              <IconArrow>
                <use href={icon + '#icon-arrow-right-top-16'}></use>
              </IconArrow>
            </MenuItem>
            <MenuItem>
              Contact Us
              <IconArrow>
                <use href={icon + '#icon-arrow-right-top-16'}></use>
              </IconArrow>
            </MenuItem>
          </MenuList>
        </MenuWrap>
        <SocialWrap>
          <ContactUsPhone
            href="#"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IconFacebook>
              <use href={icon + '#icon-facebook'}></use>
            </IconFacebook>
          </ContactUsPhone>
          <ContactUsPhone
            href="#"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <IconAddress>
              <use href={icon + '#icon-instagram'}></use>
            </IconAddress>
          </ContactUsPhone>
        </SocialWrap>
      </BurgerMenuContainer>
    </BurgerMenuWrapper>
  );
};

export default BurgerMenu;
