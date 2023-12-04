import {
  ContactUsSection,
  ContactUsWrap,
  ContactUsTitle,
  ContactUsText,
  AddressWrap,
  IconAddress,
  ContactUsPhone,
  SocialWrap,
  ContactList,
  ContactUsTitleWrap,
  IconFacebook,
} from './ContactUs.styled.js';

import icon from '../../assets/icons/symbol-defs (1).svg';

import FormaRegistration from 'components/FormaRegistration/FormaRegistration.js';

const ContactUs = () => {
  const handleSave = formData => {
    console.log('Saved:', formData);
  };
  return (
    <ContactUsSection id="contact-section">
      <ContactUsTitleWrap>
        <ContactUsTitle>Contact us</ContactUsTitle>
      </ContactUsTitleWrap>

      <ContactUsWrap>
        <AddressWrap>
          <address>
            <ContactList>
              <li>
                <ContactUsText>Phone:</ContactUsText>
                <ContactUsPhone href="tel:+380981234567">
                  <IconAddress>
                    <use href={icon + '#icon-call'}></use>
                  </IconAddress>
                  38 (098) 12 34 567
                </ContactUsPhone>
                <ContactUsPhone href="tel:+380931234567">
                  <IconAddress>
                    <use href={icon + '#icon-call'}></use>
                  </IconAddress>
                  38 (093) 12 34 567
                </ContactUsPhone>
              </li>

              <li>
                <ContactUsText>E-mail:</ContactUsText>
                <ContactUsPhone href="mailto:office@ecosolution.com">
                  <IconAddress>
                    <use href={icon + '#icon-sms'}></use>
                  </IconAddress>
                  office@ecosolution.com
                </ContactUsPhone>
              </li>
              <li>
                <ContactUsText>Address:</ContactUsText>
                <ContactUsPhone
                  href="https://maps.app.goo.gl/pmoGC5Yf7tZ35uCb8"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <IconAddress>
                    <use href={icon + '#icon-map'}></use>
                  </IconAddress>
                  79005, Ukraine, Lvivstreet. <br />
                  Shota Rustaveli, 7
                </ContactUsPhone>
              </li>
              <li>
                <ContactUsText>Social Networks:</ContactUsText>
                <SocialWrap>
                  <ContactUsPhone
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <IconFacebook>
                      <use href={icon + '#icon-facebook'}></use>
                    </IconFacebook>
                  </ContactUsPhone>
                  <ContactUsPhone
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <IconAddress>
                      <use href={icon + '#icon-instagram'}></use>
                    </IconAddress>
                  </ContactUsPhone>
                </SocialWrap>
              </li>
            </ContactList>
          </address>
        </AddressWrap>
      </ContactUsWrap>
      <FormaRegistration onSave={handleSave} />
    </ContactUsSection>
  );
};

export default ContactUs;
