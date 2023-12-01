import styled from 'styled-components';

export const MainSection = styled.section`
  margin-top: 146px;
  @media (min-width: 768px) {
    margin-top: 164px;
  }
  @media (min-width: 1440px) {
    margin-top: 207px;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
  }
`;
export const MainWrapperInner = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  /* @media (min-width: 1440px) {
    gap: 296px;
  } */
`;
export const MainTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    width: 342px;
    height: 57px;
    gap: 43px;
    @media (min-width: 1440px) {
      gap: 20px;
      width: 363px;
      margin-right: 96px;
    }
  }
`;

export const MainTitle = styled.h1`
  color: #173d33;

  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 48px;
  }
  @media (min-width: 1440px) {
    font-size: 64px;
  }
`;

export const TitleWrap = styled.div`
  width: 320px;
  height: 71px;
  @media (min-width: 768px) {
    width: 220px;
    height: 144px;
  }
  @media (min-width: 1440px) {
    min-width: 485px;
    height: 128px;
  }
`;

export const MainText = styled.p`
  color: #173d33;

  text-align: justify;
  font-family: Fira Sans;
  font-size: 16px;

  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const ButtonLearnMore = styled.button`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-width: 140px;
  height: 39px;
  padding: 4px 4px 4px 16px;
  text-align: center;

  cursor: pointer;
  border: 1px solid #97d28b;
  background-color: transparent;
  border-radius: 500px;

  color: #173d33;

  font-family: inherit;
  font-size: 16px;
  line-height: 1.12;

  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  transition: background-color, color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #173d33;
    color: #97d28b;
  }
`;

export const Circle = styled.span`
  display: inline-block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #97d28b;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const IconArrow = styled.svg`
  width: 16px;
  height: 16px;
  stroke: currentColor;
  fill: none;
`;

export const Rectangle = styled.div`
  width: 100%;
  height: 1px;
  background-color: #97d28b;
`;

export const MainAddress = styled.p`
  color: #173d33;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;
export const MainAddressCopy = styled.p`
  display: none;

  @media (min-width: 768px) {
    display: block;
    color: #173d33;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.64px;
  }
`;

export const AddressWrap = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const AddressWrapInner = styled.div`
  display: flex;
  gap: 50px;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 342px;
  }
  @media (min-width: 1440px) {
    width: 459px;
  }
`;

export const ImgHero = styled.img`
  margin-top: 36px;
  @media (min-width: 768px) {
    margin-top: 40px;
    width: 709px;
    @media (min-width: 1440px) {
      margin-top: 36px;
      width: 1242px;
    }
  }
`;
