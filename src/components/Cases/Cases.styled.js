import styled from 'styled-components';

export const CasesSection = styled.section`
  margin-top: 36px;
  @media (min-width: 768px) {
    margin-top: 100px;
  }
  @media (min-width: 1440px) {
    margin-top: 120px;
  }
`;

export const CasesTitle = styled.h2`
  color: #173d33;
  width: 264px;
  font-size: 28px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 36px;
  }
  @media (min-width: 1440px) {
    width: 398px;
    font-size: 48px;
  }
`;

export const CasesWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 9px;
  }
  @media (min-width: 1440px) {
    gap: 161px;
  }
`;

export const CasesWrapInner = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 342px;
  }
  @media (min-width: 1440px) {
    width: 459px;
  }
`;

export const CasesTitleWrap = styled.div`
  display: flex;
  @media (min-width: 768px) {
    gap: 90px;
    width: 355px;
  }
  @media (min-width: 1440px) {
    width: 620px;
    gap: 221px;
  }
`;



export const ArrowWrap = styled.div`
  display: flex;
  height: 66px;
  width: 66px;
  justify-content: center;
  align-items: center;
  border: solid 1px;
  border-radius: 50%;
  background-color: transparent;
  color: #173d33;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #97d28b;
  }
`;
export const IconCases = styled.svg`
  width: 36px;
  height: 36px;
  stroke: currentColor;
  fill: none;
`;

export const ArrowWrapSecond = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-end;
`;

export const NumberPhoto = styled.p`
  color: #173d33;
  text-align: justify;
   font-size: 28px;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -1.12px;
`;

export const NumberPhotoSpan = styled.span`
  color: rgba(23, 61, 51, 0.25);
`;

export const NumberPhotoWrap = styled.div`
  display: flex;
    align-items: flex-end;
`;

export const Rectangle = styled.div`
  display: none;
  width: 1px;
  height: 65px;
  background-color: #97d28b;
  @media (min-width: 768px) {
    display: block;
  }
  @media (min-width: 1440px) {
    height: 96px;
  }
`;



export const CasesItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 26px;

  @media (min-width: 768px) {
    margin-top: 38px;
  }
  @media (min-width: 1440px) {
    margin-top: 120px;
  }
`;

export const ImgSlide = styled.img`
  /* width: 320px; */

  @media (min-width: 768px) {
    /* width: 343px; */

    @media (min-width: 1440px) {
      /* width: 596px; */
    }
  }
`;

export const SignWrap = styled.div`
  display: block;
  padding: 24px 12px 12px 12px;
  background-color: #eaedf1;
  @media (min-width: 768px) {
    @media (min-width: 1440px) {
    }
  }
`;

export const Sign = styled.p`
  color: #173d33;
  width: 175px;
  text-align: justify;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  @media (min-width: 768px) {
    @media (min-width: 1440px) {
    }
  }
`;
export const RectangleCard = styled.div`
  background-color: #97d28b;
  width: 100%;
  height: 1px;
  margin-top: 21px;

  @media (min-width: 768px) {
    margin-top: 22px;
  }

  @media (min-width: 1440px) {
  }
`;
export const SignWrapInner = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    @media (min-width: 1440px) {
    }
  }
`;

export const ArrowWrapCard = styled.div`
  display: flex;
  height: 60px;
  width: 60px;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background-color: #97d28b;
  color: #173d33;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #173d33;
    color: #97d28b;
  }
`;
export const IconCard = styled.svg`
  width: 28px;
  height: 28px;
  stroke: currentColor;
  fill: none;
`;

export const SignWrapSecond = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  @media (min-width: 768px) {
    @media (min-width: 1440px) {
    }
  }
`;

export const SignSecond = styled.p`
  color: #173d33;
  text-align: justify;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;

  @media (min-width: 768px) {
    @media (min-width: 1440px) {
    }
  }
`;