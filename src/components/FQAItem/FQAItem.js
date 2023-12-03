import {
  Question,
  Answer,
  FAQItemContainer,
  IconQuestion,
  QuestionWrap,
} from './FQAItem.styled.js';

import icon from '../../assets/icons/symbol-defs (1).svg';

const FAQItem = ({ question, answer, isOpen, toggleItem }) => {
  return (
    <FAQItemContainer
      className={`faq-item ${isOpen ? 'open' : ''}`}
      onClick={toggleItem}
    >
      <QuestionWrap>
        <IconQuestion isOpen={isOpen}>
          <use href={icon + (isOpen ? '#icon-minus' : '#icon-add')}></use>
        </IconQuestion>
        <div>
          <Question>{question}</Question>
          {isOpen && <Answer>{answer}</Answer>}
        </div>
      </QuestionWrap>
    </FAQItemContainer>
  );
};

export default FAQItem;
