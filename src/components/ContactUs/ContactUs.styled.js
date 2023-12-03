import styled from 'styled-components';

export const ContactUsSection = styled.section`
  margin-top: 36px;
  @media (min-width: 768px) {
    margin-top: 100px;
  }
  @media (min-width: 1440px) {
    margin-top: 120px;
  }
`;
export const ContactUsTitle = styled.h2`
  color: #173d33;

  font-size: 28px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 36px;
  }
  @media (min-width: 1440px) {
    font-size: 48px;
  }
`;

export const ContactUsTitleWrap = styled.div`
display: flex;
justify-content:center;
text-align: center;
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
  }
`;

export const ContactUsWrap = styled.div`
margin-top: 24px;
  @media (min-width: 768px) {

  }
  @media (min-width: 1440px) {

  }
`;
export const ContactUsText = styled.p`
  color: #173d33;
  text-align: justify;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  margin-bottom: 8px;

  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
  }
`;
export const AddressWrap = styled.div`
display: flex;
flex-direction:column;

  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
  }
`;
export const IconAddress = styled.svg`
margin-right:8px;
  width: 24px;
  height: 24px;
  stroke: currentColor;
  fill: none;
`;

export const IconFacebook = styled.svg`
 margin-left:12px;
  width: 24px;
  height: 24px;
  stroke: currentColor;
  fill: currentColor;
`;

export const ContactUsPhone = styled.a`
  display: flex;
  align-items: center;
  color: #173d33;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
  transition:  color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    > svg {
      color: #97d28b;
    }
  }
`;

export const SocialWrap = styled.div`
display: flex;
gap:32px;
`;

export const ContactList = styled.ul`
display: flex;
flex-direction:column;
gap: 24px;
`;