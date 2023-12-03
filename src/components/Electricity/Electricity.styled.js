import styled from 'styled-components';

export const ElectricitySection = styled.section`
  margin-top: 36px;
 
  @media (min-width: 768px) {
    margin-top: 100px;
  }
  @media (min-width: 1440px) {
    margin-top: 120px;
  }
`;
export const ElecticityWrap = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
  }
`;

export const ElectricityTitle = styled.h2`
  color: #173d33;
  width: 286px;
  text-align: center;
  font-size: 28px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 36px;
    width: 368px;
  }
  @media (min-width: 1440px) {
    font-size: 48px;
    width: 491px;
  }
`;

export const Rectangle = styled.div`
  width: 1px;
  height: 48px;
  background-color: #97d28b;
  @media (min-width: 768px) {
    height: 87px;
  }
  @media (min-width: 1440px) {
  }
`;

export const Counter = styled.p`
  color: #173d33;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  line-height: 1;

  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 1.71;
  }
  @media (min-width: 1440px) {
    font-size: 48px;
    line-height: 1;
  }
`;
export const CounterNumbers = styled.span`
  color: #97d28b;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 100px;
  }
  @media (min-width: 1440px) {
    font-size: 164px;
  }
`;

export const CounterWrap = styled.div`
  display: flex;
  gap: 8px;

  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    gap: 24px;
  }
  @media (min-width: 1440px) {
    gap: 16px;
  }
`;
