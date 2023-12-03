import {
  CasesItemWrap,
  ImgSlide,
  SignWrap,
  Sign,
  Rectangle,
  SignWrapInner,
  IconCard,
  ArrowWrap,
  SignSecond,
  SignWrapSecond,
} from './CasesItem.styled';

import icon from '../../assets/icons/symbol-defs (1).svg';

import slide1 from '../../assets/images/slide-1.jpg';
import slide12x from '../../assets/images/slide-1@2x.jpg';


const CasesItem = () => {
    return (
      <CasesItemWrap>
        <picture>
          <source
            srcSet={`${slide1}, ${slide12x} 2x`}
            media={`(min-width: 1400px)`}
          />
          <ImgSlide src={slide1} alt="wind turbine" width="596" />
        </picture>
        <SignWrap>
          <SignWrapInner>
            <Sign>
              Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”
            </Sign>
            <ArrowWrap>
              <IconCard>
                <use href={icon + '#icon-arrow-right-top'}></use>
              </IconCard>
            </ArrowWrap>
          </SignWrapInner>
          <Rectangle />
          <SignWrapSecond>
            <SignSecond>Wind Power for auto field irrigation</SignSecond>
            <SignSecond>July 2023</SignSecond>
          </SignWrapSecond>
        </SignWrap>
      </CasesItemWrap>
    );
};

export default CasesItem;
