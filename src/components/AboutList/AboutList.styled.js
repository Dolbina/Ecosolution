import styled from 'styled-components';

export const AboutValuesWrap = styled.div`

  margin-top: 36px;
  @media (min-width: 768px) {
    margin-top: 100px;
  }
  @media (min-width: 1440px) {
    margin-top: 122px;
  }
`;

export const AboutValuesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 24px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  @media (min-width: 1440px) {
    gap: 48px;
  }
`;

export const AboutValuesItem = styled.li`
  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(5),
  &:nth-child(6) {
    grid-column: span 1;
    width: 148px;

    display: flex;
    flex-direction: column;
    justify-items: center;
    gap: 5px;
    background: #eaedf1;
    padding: 12px;

    @media (min-width: 768px) {
      width: 159px;
    }
    @media (min-width: 1440px) {
      width: 274px;

      padding: 48px 24px;
    }
  }
  &:nth-child(3),
  &:nth-child(4) {
    display: none;
    @media (min-width: 768px) {
      grid-column: span 2;
      display: block;
      width: 346px;

      @media (min-width: 1440px) {
        width: 596px;
      }
    }
  }
`;



export const IconValues = styled.svg`
  margin-right: 8px;
  width: 16px;
  height: 16px;
  stroke: currentColor;
  fill: none;
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
    width: 24px;
    height: 24px;
  }
`;
export const AboutValuesTitle = styled.h3`
  color: #173d33;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
  @media (min-width: 1440px) {
    font-size: 32px;
    line-height: 1.5;
  }
`;
export const AboutValuesText = styled.p`
  color: #173d33;

  text-align: justify;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;
  margin-top: 12px;

  @media (min-width: 1440px) {
    margin-top: 24px;
    font-size: 16px;
  }
`;

export const Rectangle = styled.div`
  background-color: #97d28b;
  height: 1px;
  width: 100%;
  margin-top: 33px;
  @media (min-width: 768px) {
    margin-top: 51px;
  }
  @media (min-width: 1440px) {
    margin-top: 94px;
  }
`;
export const ImgValues = styled.img`
  display: block;
  width: 100%;
  height: auto;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  @media (min-width: 1440px) {
  }
`;

