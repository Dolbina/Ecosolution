import styled from 'styled-components';

export const FAQSection = styled.section`
  margin-top: 36px;
  @media (min-width: 768px) {
    margin-top: 100px;
  }
  @media (min-width: 1440px) {
    margin-top: 120px;
  }
`;

export const FAQTitle = styled.h2`
  width: 320px;
  color: #173d33;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;

  @media (min-width: 768px) {
    width: 347px;
    font-size: 36px;
  }
  @media (min-width: 1440px) {
    width: 398px;
    font-size: 48px;
  }
`;

export const FAQContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`;

export const FAQText = styled.p`
  margin-top: 36px;
  color: #173d33;
  text-align: justify;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  @media (min-width: 1440px) {
    font-size: 24px;
  }
`;

export const FAQTextWrap = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const FAQTextWrapTabl = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    gap: 12px;
    flex-direction: column;
    align-items: center;
  }
`;

export const FAQTitileWrap = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const FAQWrap = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 24px;
  }
  @media (min-width: 1440px) {
    gap: 185px;
  }
`;
