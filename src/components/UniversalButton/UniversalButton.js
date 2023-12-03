import React from 'react';
import { Button, Circle, IconArrow } from './UniversalButton.styled';
import icon from '../../assets/icons/symbol-defs (1).svg';

const UniversalButton = ({ buttonText }) =>
{
    
        const scrollToContactUs = () => {
            const contactUsSection = document.getElementById('contact-section');
            contactUsSection.scrollIntoView({ behavior: 'smooth' });
        };
  return (
    <Button onClick={scrollToContactUs}>
      {buttonText}
      <Circle>
        <IconArrow>
          <use href={icon + '#icon-arrow-top'}></use>
        </IconArrow>
      </Circle>
    </Button>
  );
};

export default UniversalButton;
