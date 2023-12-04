import styled from 'styled-components';

export const AboutSection = styled.section`
  margin-top: 36px;

  @media (min-width: 768px) {
    margin-top: 100px;
  }
  @media (min-width: 1440px) {
    margin-top: 120px;
  }
`;

export const AboutTitle = styled.h2`
  color: #173d33;
  font-size: 28px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 36px;
    width: 272px;
    height: 72px;
  }
  @media (min-width: 1440px) {
    font-size: 48px;
    width: 365px;
    height: 96px;
  }
`;

export const AboutText = styled.p`
  color: #173d33;

  text-align: justify;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media (min-width: 768px) {
    width: 342px;
    height: 114px;
  }
  @media (min-width: 1440px) {
    width: 459px;
    height: 95px;
  }
`;

export const AboutWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media (min-width: 1440px) {
  }
`;
