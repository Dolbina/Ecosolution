import {
  MainWrapper,
  MainTitle,
  TitleWrap,
  MainText,
  ButtonLearnMore,
  IconArrow,
  Circle,
  Rectangle,
  MainAddress,
  AddressWrap,
  MainAddressCopy,
  AddressWrapInner,
  MainTextWrap,
  MainWrapperInner,
  ImgHero,
  MainSection,
} from './Main.styled';

import icon from '../../assets/icons/symbol-defs (1).svg';

import mainMob from '../../assets/images/main-mob.jpg';
import mainMob2x from '../../assets/images/main-mob@2x.jpg';

import mainTabl from '../../assets/images/main-tabl.jpg';
import mainTabl2x from '../../assets/images/main-tabl@2x.jpg';

import mainDesk from '../../assets/images/main-desk.jpg';
import mainDesk2x from '../../assets/images/main-desk@2x.jpg';



const Main = () => {
  return (
    <>
      <MainSection>
        <MainWrapper>
          <MainWrapperInner>
            <TitleWrap>
              <MainTitle>RENEWABLE ENERGY For any task</MainTitle>
            </TitleWrap>
            <MainTextWrap>
              <MainText>
                Development and implementation of renewable non-polluting energy
                sources, generating power generation using energy wind, sun,
                water, biomass
              </MainText>
              <ButtonLearnMore>
                Learn more{' '}
                <Circle>
                  <IconArrow>
                    <use href={icon + '#icon-arrow-right-16'}></use>
                  </IconArrow>
                </Circle>
              </ButtonLearnMore>
            </MainTextWrap>
          </MainWrapperInner>
          <Rectangle />
          <AddressWrap>
            <MainAddress>
              79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
            </MainAddress>
            <AddressWrapInner>
              <MainAddress>office@ecosolution.com</MainAddress>
              <MainAddressCopy>ecosolution © 2023</MainAddressCopy>
            </AddressWrapInner>
          </AddressWrap>
        </MainWrapper>
        <picture>
          <source
            srcSet={`${mainDesk}, ${mainDesk2x} 2x`}
            media={`(min-width: 1280px)`}
          />
          <source
            srcSet={`${mainTabl}, ${mainTabl2x} 2x`}
            media={`(min-width: 768px)`}
          />
          <source
            srcSet={`${mainMob}, ${mainMob2x} 2x`}
            media={`(min-width: 150px)`}
          />
          <ImgHero src={mainDesk} alt="wind turbine" width="319" />
        </picture>
      </MainSection>
    </>
  );
};

export default Main;
