import styled from 'styled-components';

export const FAQItemContainer = styled.div`
  border-top: solid 1px #97d28b;
  border-bottom: solid 1px #97d28b;

  cursor: pointer;
  &:last-child {
    border-bottom: none;
  }

  &.open {
  }
`;

export const Question = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  color: #173d33;
  text-align: justify;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
    margin-top: 24px;
    margin-bottom: 24px;
    font-size: 24px;
  }
`;

export const Answer = styled.div`
  margin-bottom: 14px;
  color: #173d33;
  text-align: justify;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;

  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
    margin-bottom: 16px;
  }
`;

export const IconQuestion = styled.svg`
  width: 16px;
  height: 16px;
  stroke: currentColor;
  fill: none;
  @media (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
 
`;

export const QuestionWrap = styled.div`
  display: flex;
  gap: 8px;

  align-items: baseline;

  @media (min-width: 768px) {
    gap: 16px;
  }
  @media (min-width: 1440px) {
    gap: 24px;
  }
`;
