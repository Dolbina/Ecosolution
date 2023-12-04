import { Button, Circle, IconArrow } from './ButtonGetInTouch.styled';
import icon from '../../assets/icons/symbol-defs (1).svg';

const ButtonGetInTouch = () => {
  const scrollToContactUs = () => {
    const contactUsSection = document.getElementById('contact-section');
    contactUsSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Button onClick={scrollToContactUs}>
      Get in touch
      <Circle>
        <IconArrow>
          <use href={icon + '#icon-arrow-top'}></use>
        </IconArrow>
      </Circle>
    </Button>
  );
};

export default ButtonGetInTouch;
